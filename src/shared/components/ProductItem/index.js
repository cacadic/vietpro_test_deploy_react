import React from "react";

const ProductItem = ({ item }) => {
  const { name, price, image, link = "#" } = item;
  return (
    <div className="product-item card text-center">
      <a href={link}>
        <img src={image} alt={name} />
      </a>
      <h4>
        <a href={link}>{name}</a>
      </h4>
      <p>
        Giá Bán:{" "}
        <span>
          {price} đ
        </span>
      </p>
    </div>
  );
};

export default ProductItem;
