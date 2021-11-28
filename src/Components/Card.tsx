import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  title,
  imgSrc,
  text,
  itemUrl,
}: {
  title: string;
  imgSrc?: string;
  text?: string;
  itemUrl?: number | string;
}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {imgSrc && <img src={imgSrc} className="card-img-top" alt={title} />}
      {imgSrc === undefined && (
        <img
          src="https://previews.123rf.com/images/yitewang/yitewang1602/yitewang160203649/51985697-dinner-food-flat-icon.jpg"
          className="card-img-top"
          alt={title}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        {itemUrl && (
          <Link className="btn btn-primary" to={itemUrl as string}>
            See Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
