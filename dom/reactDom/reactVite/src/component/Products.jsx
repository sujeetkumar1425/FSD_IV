import React, { useEffect, useState } from 'react';

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();

        setData(result.products);
      } catch (e) {
        console.log(e);
      } finally {
        console.log('All done');
      }
    }

    getData();
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {data.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}