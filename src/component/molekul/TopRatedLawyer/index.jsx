/* eslint-disable react/prop-types */
// import React from 'react'
import { ListLawyer } from '../../../component';

const TopRatedLawyer = ({ dataLawyers, onClick }) => {
  return (
    <div className="content-section">
      <div className="content-title pb-6">
        <h2 className='text-black text-left text-lg font-semibold'>Top Rated Lawyer</h2>
      </div>
      {dataLawyers.slice(0, 3).map((lawyer, index) => (
        <ListLawyer
          key={index}
          name={lawyer.name}
          speciality={lawyer.speciality && lawyer.speciality.join(', ')}
          rate={lawyer.rate}
          onClick={() => onClick(lawyer.id)}
        />
      ))}
    </div>
  );
}

export default TopRatedLawyer