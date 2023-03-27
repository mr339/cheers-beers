import Head from "next/head";
import LoadMore from "../load-more";
import TopNav from "../top-nav";
import styles from './layout.module.scss'

export type ILayoutProps = {
    children: React.ReactNode;
    showLoadMore?: boolean;
    setCurrentPage?: (page: number) => void;
    setperPage?: (perPage: number) => void;
    currentPage?: number;
    showButton?: boolean;
    title?: string;
    description?: string;
    imageUrl?: string;
};

const Layout: React.FC<ILayoutProps> = ({
    children,
    showLoadMore,
    setCurrentPage,
    setperPage,
    currentPage,
    showButton }: any) => {
    return (
        <div className={styles.main_layout}>
            <Head>
                <title>Cheer Beer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.3.0/css/all.css" />
            </Head>
            <header>
                <TopNav showButton={showButton} />
            </header>
            <main>{children}</main>
            <LoadMore showLoadMore={showLoadMore} setCurrentPage={setCurrentPage} setperPage={setperPage} currentPage={currentPage} />

        </div>
    );
}

export default Layout;

