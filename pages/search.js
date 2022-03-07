import { format } from 'date-fns';
import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard';
import Maps from '../components/Maps';

const Search = ({ searchResults }) => {
    const router = useRouter();
    // console.log(searchResults);

  const { location, startDate, endDate, noOfGests } = router.query;

  const formattedStartDate = format(new Date(startDate), 'yyyy/MM/dd');
  const formattedEndDate = format(new Date(endDate), 'yyyy/MM/dd');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="">
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Header placeholder={`${location} | ${range} | ${noOfGests}人`} />
      <main className="flex ">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays -{range}- for {noOfGests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-8">
            {location}に泊まる
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ">
            <p className="button">キャンセル可</p>
            <p className="button">場所の種類</p>
            <p className="button">値段</p>
            <p className="button">部屋とベッド数</p>
            <p className="button">条件追加</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Maps searchResults={searchResults} />
        </section>
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());

    return {
        props: {
            searchResults,
        }
    }
}
