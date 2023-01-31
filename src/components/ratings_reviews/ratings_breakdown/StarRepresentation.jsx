import React from 'react';
import StarRating from '../../shared/StarRating';

export default function StarRepresentation({ averageRating }) {
  const roundedRating = Math.round(averageRating * 10) / 10
  return (
    <>
      <h4>StarRepresentation</h4>
      <div className="star-representation">
        <div className="average-rating">
          {roundedRating}
        </div>
        <div>
          <StarRating score={roundedRating} />
        </div>
      </div>
    </>
  );
}
