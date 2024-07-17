import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Products.module.scss";

const baseURL = import.meta.env.VITE_BASE_URL;

const Product = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductById() {
      try {
        const response = await fetch(`${baseURL}/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProductById();
  }, [productId]);

  return (
    <div className={styles.product}>
      {product && (
        <>
          <h2>{product.name}</h2>
          <img
            src={product.image_url}
            alt={product.name}
            className={styles.productImage}
          />
          <p>{product.description}</p>
          <p className={styles.price}>Price: ${product.price}</p>
          <p className={styles.brand}>Brand: {product.brand_name}</p>
          <div className={styles.productDetails}>
            {/* Add additional product details if needed */}
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
