import PrimaryButton from "@shared/components/buttons/primary-button";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import styles from "./addBeerModal.module.scss";
import { useForm } from "react-hook-form";
import { NewBeerInterface } from "./newBeer.interface";
import { saveToLocalStorage } from "@shared/utils/localstorage-utils/localstorage.util";
import AppContext from "@shared/components/appContext";
import Image from "next/image";
import BeerImage from "@public/images/beer.png";

const AddBeerModal = ({ }: any) => {
  const { setmyBeerValue, setshowModal } = useContext(AppContext) as {
    setshowModal: any;
    setmyBeerValue: any;
  };
  const handleClose = () => {
    setshowModal(false);
    setShow(false);
  };
  const [show, setShow] = useState(true);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<NewBeerInterface>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const handleRegister = (formData: NewBeerInterface) => {
    setmyBeerValue(formData);
    saveToLocalStorage({ formData, localKeyName: "myBeerData" }); //Saving data to localStorage
    setshowModal(false);
    setShow(false);
    reset();
  };

  return (
    <>
      <div className={`modal show ${styles.call_modal}`}>
        <Modal show={show} centered>
          <Modal.Body>
            <h2>Add a New Beer</h2>
            <div className={styles.form_section}>
              <Form
                noValidate
                onSubmit={handleSubmit(handleRegister)}
                autoComplete="off"
              >
                <Form.Group className="mb-3" controlId="name">
                  <div className={styles.beer_image_wrapper}>
                    <Image
                      src={BeerImage}
                      width={115}
                      height={115}
                      className={styles.beer_image}
                      alt="user"
                    />
                  </div>
                  <div>
                    <Form.Control
                      autoComplete="off"
                      className="bg-white"
                      type="text"
                      {...register("name", {
                        required: "This field is required.",
                      })}
                      placeholder="Beer name*"
                    />
                    {errors.name?.message && (
                      <Form.Control.Feedback
                        type="invalid"
                        className="d-block fs-xs"
                      >
                        <>
                          <span className={styles.error}>
                            <i className={`fa-solid fa-triangle-exclamation me-1 ${styles.error_exlamation}`}></i>
                            <p>Name is required!</p>
                          </span>
                        </>
                      </Form.Control.Feedback>
                    )}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="genre">
                  <div>
                    <Form.Control
                      autoComplete="off"
                      {...register("genre", {
                        required: "This field is required.",
                      })}
                      className="bg-white"
                      type="text"
                      placeholder="Genre*"
                    />
                    {errors.genre?.message && (
                      <Form.Control.Feedback
                        type="invalid"
                        className="d-block fs-xs"
                      >
                        <>
                          <span className={styles.error}>
                            <i className={`fa-solid fa-triangle-exclamation me-1 ${styles.error_exlamation}`}></i>
                            <p>Genre is required!</p>
                          </span>
                        </>
                      </Form.Control.Feedback>
                    )}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                  <div>
                    <Form.Control
                      autoComplete="off"
                      as="textarea"
                      {...register("description", {
                        required: "This field is required",
                      })}
                      className="bg-white"
                      placeholder="Description*"
                    />
                    {errors.description?.message && (
                      <Form.Control.Feedback
                        type="invalid"
                        className="d-block fs-xs"
                      >
                        <>
                          <span className={styles.error}>
                            <i className={`fa-solid fa-triangle-exclamation me-1 ${styles.error_exlamation}`}></i>
                            <p>Description is required!</p>
                          </span>
                        </>
                      </Form.Control.Feedback>
                    )}
                  </div>
                </Form.Group>
                <div className={styles.button_wrapper}>
                  <PrimaryButton
                    label="Cancel"
                    type="button"
                    func={handleClose}
                    variant="link"
                    classname="text-decoration-none text-dark"
                  />
                  <PrimaryButton
                    label="Save"
                    type="submit"
                    moduleStyles="save_button"
                    classname="cursor-pointer"
                    variant="primary"
                    disable={Object.keys(errors).length !== 0 || !isValid}
                  />
                </div>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default AddBeerModal;
