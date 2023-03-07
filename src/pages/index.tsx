import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const getFakeData = async () => {
    const fakeDataResponse = await fetch(`https://fakestoreapi.com/products`);
    const fakeData = await fakeDataResponse.json();
    return fakeData;
  };

  const [fakeData, setFakeData] = useState([]);

  const handleSearch = async () => {
    const fakeData = await getFakeData();
    setFakeData(fakeData);
  };

  type product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };

  return (
    <>
      <Head>
        <title>Shopping Kart</title>
        <meta
          name="description"
          content="A shopping cart with elastic search"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shopping.png" />
      </Head>
      <main>
        <h1 className={styles.title}>Shopping kart</h1>
        <div className={styles.searchContainer}>
          <TextField
            type="text"
            className={styles.searchInput}
            placeholder="Search"
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            className={styles.searchButton}
          >
            Search
          </Button>
        </div>
        <ul>
          {fakeData.map((product: product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
