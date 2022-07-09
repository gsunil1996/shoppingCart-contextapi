import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./Styles.module.css";

const Rating = ({rating, onClick, style}) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style} >
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </div>
  );
}

export default Rating
