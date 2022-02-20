import { FaStar } from "react-icons/fa";

const StarRating = ({rating}) => {
   let stringRate = Object.values({rating});
   let rate = parseInt(stringRate[0]);
  return (
    <div className="StarRating">
      {[...Array(rate)].map(star => {return <FaStar className="StarOn"/>;})}
      {[...Array(5-rate)].map(star => {return <FaStar/>;})}
    </div>
  );
};

export default StarRating;