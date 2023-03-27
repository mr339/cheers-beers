import Card from "react-bootstrap/Card";
import Layout from "@shared/components/layout";
import styles from "./myBeers.module.scss";
import AddBeerModal from "@features/add-beer-modal";
import { useContext, useEffect, useState } from "react";
import AppContext from "@shared/components/appContext";
import { OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import noBeer from "@public/images/noBeer.png";
import Image from "next/image";

function MyBeers() {
  const {
    showModal,
    myBeerValue,
    setshowModal,
    setmyBeerValue,
    searchText,
    setsearchText,
  } = useContext(AppContext) as {
    showModal: boolean;
    myBeerValue: string;
    setshowModal: any;
    setmyBeerValue: any;
    searchText: any;
    setsearchText: any;
  };

  const [myBeers, setMyBeers] = useState<any>([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem("myBeerData");
    if (localStorageData && JSON.parse(localStorageData).length > 0) {
      setMyBeers(JSON.parse(localStorageData));
    } else {
      setMyBeers([]);
    }

    return () => {
      // cleanup function to clear searchValue
      setsearchText("");
    };
  }, [myBeerValue]);

  const openModal = () => {
    setshowModal(true);
  };

  const deleteMyBeer = (index: number) => {
    const updatedBeers = [...myBeers]; // create a new array with the existing beers
    updatedBeers.splice(index, 1); // remove the clicked item from the array
    localStorage.setItem("myBeerData", JSON.stringify(updatedBeers)); // update localStorage
    setmyBeerValue(updatedBeers);
  };

  const filteredBeers = myBeers.filter((beer: any) =>
    beer.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <Layout showLoadMore={false} showButton={true}>
      {showModal && <AddBeerModal />}
      <Row></Row>
      {filteredBeers.length > 0 ? (
        <>
          {filteredBeers.map((beer: any, index: any) => (
            <div className={`${styles.card_item} col-sm-12`} key={index}>
              <Card className="h-100 position-relative">
                <i
                  className={"fa fa-times " + styles.cross_delete}
                  aria-hidden="true"
                  onClick={() => deleteMyBeer(index)}
                ></i>
                <Card.Body className={styles.card_body}>
                  <div className={styles.card_item_index}>{index + 1}</div>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>
                        <div className={styles.tooltip_content}>
                          Description: {beer.description}
                        </div>
                      </Tooltip>
                    }
                  >
                    <div className={`${styles.card_image_wrap}`}>
                      <Card.Img
                        variant="top"
                        src="./images/beer.png"
                        className={styles.card_image}
                      />
                    </div>
                  </OverlayTrigger>

                  <div className={styles.card_info}>
                    <Card.Title className={styles.card_title}>
                      {beer.name}
                    </Card.Title>
                    <Card.Subtitle className={styles.card_subtitle}>
                      {beer.genre}
                    </Card.Subtitle>
                    <Card.Text>{beer.description}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </>
      ) : (
        <div className={styles.noBeer_div}>
          <span className={styles.noBeer_content}>
            {searchText ? (
              <>
                "You do not have any beers!!"
                <br />
                <Image
                  src={noBeer}
                  width={115}
                  height={115}
                  className={styles.beer_image}
                  alt="user"
                />
              </>
            ) : (
              <>
                Nothing to see yet.
                <br />
                <button
                  className={styles.click_button}
                  onClick={() => openModal()}
                >
                  Click here
                </button>{" "}
                to add your first beer!
              </>
            )}
          </span>
        </div>
      )}
    </Layout>
  );
}

export default MyBeers;
