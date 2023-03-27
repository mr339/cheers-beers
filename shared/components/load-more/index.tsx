import styles from './loadMore.module.scss'
interface ILoadMoreProps {
    showLoadMore: boolean;
    currentPage: number;
    setCurrentPage: (number: number) => void;
    setperPage: (number: number) => void;
}

const LoadMore = ({
    showLoadMore = true,
    setCurrentPage,
    setperPage,
    currentPage
}: ILoadMoreProps) => {

    const load = () => {
        setCurrentPage(currentPage + 1);
        setperPage(10);
    };

    return (
        <>
            {showLoadMore && (
                <button className={styles.load_more} onClick={() => load()}>Load More <i className={`fa fa-angle-down ${styles.downArrow}`} aria-hidden="true"></i></button>
            )}
        </>
    );
};



export default LoadMore;