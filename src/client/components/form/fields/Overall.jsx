import React from 'react';
import Stars from 'react-star-ratings';
import { starDescriptions } from '../../../utils';

export default function Overall ({ formData, setFormData }) {
  const { rating } = formData;

  return (
    <>
      <h3>Overall Rating*</h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Stars
          rating={rating}
          starDimension="1em"
          starSpacing="0.1em"
          changeRating={setFormData({ ...formData, rating })}
        />
        <small style={{ marginLeft: '1em' }}>{starDescriptions[rating]}</small>
      </div>
    </>
  );
}
