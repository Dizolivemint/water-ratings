import { NextPage } from "next";
import Map from "../../components/map";
import Head from 'next/head'
import Header from '../../components/header'

export default function MapPage() {
  return (
    <>
      <Head>
        <title>Water Ratings | Map</title>
        <meta name="description" content="Map of water quality reviews for restaurants and places." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    <Map />
    </>
  )
  
}

