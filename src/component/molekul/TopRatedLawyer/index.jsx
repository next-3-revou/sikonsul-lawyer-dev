/* eslint-disable react/prop-types */
// import React from 'react'
import { ListLawyer } from '../../../component';

const TopRatedLawyer = ({ dataLawyers, onClick }) => {
  return (
    <div className="content-section">
      <div className="content-title pb-6">
        <h2 className='text-black text-left text-lg font-semibold'>Top Rated Lawyer</h2>
      </div>
      {dataLawyers
        .sort((a, b) => b.rating - a.rating) // Mengurutkan dari rating terbesar ke terkecil
        .slice(0, 3) // Mengambil tiga data pertama setelah diurutkan
        .map((lawyer, index) => (
          <ListLawyer
            key={index}
            name={lawyer.name}  
            speciality={lawyer.profile[0].specialization && lawyer.profile[0].specialization.join(', ')}
            rating={lawyer.rating}
            onClick={() => onClick(lawyer.id)}
          />
        ))}
    </div>
  );
}

export default TopRatedLawyer