import Link from "next/link";
import Button from "react-bootstrap/Button";
import styles from "./topNav.module.scss";
import AppContext from "@shared/components/appContext";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import PrimaryButton from "../buttons/primary-button";

const TopNav = ({ showButton }: any) => {
  const { setshowModal, setsearchText, searchText } = useContext(
    AppContext
  ) as {
    setshowModal: any;
    setsearchText: any;
    searchText: string;
  };

  const router = useRouter();

  const displayModal = () => {
    setshowModal(true);
  };

  const handleChange = (event: any) => {
    setsearchText(event.target.value);
  };

  return (
    <>
      <div className={styles.my_nav}>
        <Link
          href="/all-beers"
          className={
            router.pathname === "/all-beers"
              ? `${styles.active}`
              : `${styles.inactive}`
          }
        >
          All Beers
        </Link>
        <Link
          href="/my-beers"
          className={
            router.pathname === "/my-beers"
              ? `${styles.active}`
              : `${styles.inactive}`
          }
        >
          My Beers
        </Link>
        {showButton && (
          <>
            <input
              type="text"
              placeholder="Search My Beer"
              value={searchText}
              onChange={handleChange}
              className={styles.search_bar}
            ></input>
            <PrimaryButton
              type="button"
              label="Add a new beer"
              variant="add"
              moduleStyles="add_beer_button"
              func={() => displayModal()}
            />
          </>
        )}
      </div>
    </>
  );
};

export default TopNav;
