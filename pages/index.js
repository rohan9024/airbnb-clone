import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import First from '../components/First'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import Second from '../components/Second'
import Third from '../components/Third'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>

      <Header />
      <Banner />
      <Main />
      <First />
      <Second />
      <Third />
      <Footer />

    </div>
  )
}
