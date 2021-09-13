import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Header } from 'components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gustavo Vargas</title>
      </Head>
      <div className="container mx-auto flex flex-col h-screen w-screen">
        <Header />
        <main className="flex-grow px-6 xl:px-0 h-full w-full">
          <div className="flex h-full">
            <aside className="flex flex-col justify-center w-16">
              <p>L</p>
              <p>M</p>
              <p>N</p>
            </aside>
            <section className="flex flex-grow items-center">
              <h1>Hi, I'm Gustavo</h1>
            </section>
          </div>
          <section className="flex justify-center">
            <h2 className="">Skills</h2>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
