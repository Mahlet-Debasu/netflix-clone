import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import RowList from '../../components/Rows/RowList/RowList'
import Row from '../../components/Rows/Row/Row'
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Row />
      <RowList />

      <Footer />
    </>
  );
}

export default Home
