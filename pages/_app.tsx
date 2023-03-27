import { store } from "@store/index";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import AppContext from "@shared/components/appContext";
import { useState } from "react";
import { NextPage } from "next";
// Custom styles
import "../styles/sass/styles.scss";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [showModal, setshowModal] = useState<boolean>(false);
  const [myBeerValue, setmyBeerValue] = useState<string>("");
  const [searchText, setsearchText] = useState<string>("");

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <AppContext.Provider
        value={{
          showModal,
          setshowModal,
          myBeerValue,
          setmyBeerValue,
          searchText,
          setsearchText,
        }}
      >
        <Provider store={store}>
          {getLayout(<Component {...pageProps} />)}
        </Provider>
      </AppContext.Provider>
    </>
  );
}
