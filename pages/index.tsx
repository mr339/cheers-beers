import Layout from '@shared/components/layout'
import Head from 'next/head';
import { NextPageWithLayout } from './_app';


const Dashboard: NextPageWithLayout<{ records: any }> = ({ }) => {
  return (
    <>
      <section></section>
    </>
  );
};


export default Dashboard;


export const getServerSideProps = () => {  // loading all-beers page by default
  return {
    redirect: {
      destination: '/all-beers',
      permanent: true
    }
  }
}

Dashboard.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

