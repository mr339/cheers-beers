import { Card, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Layout from "@shared/components/layout";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/redux-hooks";
import { getBeerData } from "@store/actions/beer-actions";
import styles from "./allBeers.module.scss";
import { scrollToTop } from "@shared/utils/scroll-top-top.utils/scroll-to-top.util";
import { store } from "@store/index";
import Head from "next/head";

function AllBeers({ title, imageUrl, description }: any) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setperPage] = useState<number>(6);
  const [scrollToTopButton, setscrollToTopButton] = useState(false);
  const dispatch = useAppDispatch();
  const { beerData, isLoading } = useAppSelector((state: any) => {
    return state.beers;
  });

  const handleScroll = () => {
    if (pageYOffset > 800) {
      setscrollToTopButton(true);
    } else {
      setscrollToTopButton(false);
    }
  };

  useEffect(() => {
    let subscribed = true;
    window.addEventListener("scroll", handleScroll);
    if (subscribed) {
      dispatch(getBeerData({ currentPage, perPage }));
    }
    return () => {
      // cleanup functions
      subscribed = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage, dispatch]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
      </Head>
      <Layout
        showLoadMore={!isLoading && true}
        setCurrentPage={setCurrentPage}
        setperPage={setperPage}
        currentPage={currentPage}
      >
        {/* handling the display of load more button using showLoadMore and sending metatags data*/}
        <Row>
          {beerData.length > 0 ? (
            <>
              {beerData?.map((beer: any, index: any) => (
                <div
                  className={`${styles.card_item} col-sm-12 col-md-6`}
                  key={index}
                >
                  <Card className="h-100">
                    <Card.Body className={styles.card_body}>
                      <div className={styles.card_item_index}>
                        {index + 1}
                      </div>
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>
                            <div className={styles.tooltip_content}>
                              <span className="d-inline-block me-1">
                                Ingredients:
                              </span>
                              {Object.keys(beer.ingredients).map(
                                (
                                  key: string,
                                  index: number,
                                  array: string[]
                                ) => {
                                  return (
                                    <div key={index}>
                                      {key}
                                      {index < array.length - 1 ? "," : ""}
                                    </div>
                                  );
                                }
                              )}
                              {/* displaying values inside of each key as well */}
                              {/* {beer.ingredients?.malt?.map((item: any) => (
                                                <div key={item.name}>{item.name},</div>
                                            ))}
                                            {beer.ingredients?.hops?.map((item: any) => (
                                                <div key={item.name}>{item.name},</div>
                                            ))}
                                            {beer.ingredients?.yeast && (
                                                <div>Yeast: {beer.ingredients.yeast}</div>
                                            )} */}
                            </div>
                          </Tooltip>
                        }
                      >
                        <div className={styles.card_image_wrap}>
                          <Card.Img
                            variant="top"
                            src={beer.image_url}
                            className={styles.card_image}
                          />
                        </div>
                      </OverlayTrigger>
                      <div className={styles.card_info}>
                        <Card.Title className={styles.card_title}>
                          {beer.name}
                        </Card.Title>
                        <Card.Subtitle className={styles.card_subtitle}>
                          {beer.tagline}
                        </Card.Subtitle>
                        <Card.Text className={styles.card_text}>
                          {beer.description}
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </>
          ) : (
            <Card>
              <div>Nothing found</div>
            </Card>
          )}
        </Row>
        {scrollToTopButton && (
          <a
            className={styles.show_scroll_button}
            onClick={() => scrollToTop()}
          >
            <i className={`fa fa-angle-up`} aria-hidden="true"></i>
          </a>
        )}
      </Layout>
    </>
  );
}

export default AllBeers;

export async function getServerSideProps() {
  // populating metatags
  await store.dispatch(getBeerData({ currentPage: 1, perPage: 3 }));
  const state = store.getState();
  const {
    beers: { beerData },
  } = state;
  const data = {
    title: beerData[0].name,
    description: beerData[0].description,
    imageUrl: beerData[0].image_url,
  };
  return {
    props: data,
  };
}
