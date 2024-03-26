/* eslint-disable react/prop-types */
// import React from 'react'
import { ListLawyer } from '../../../component';

const TopRatedLawyer = ({onClick}) => {
  return (
    <div className="content-section">
      <div className="content-title pb-6">
        <h2 className='text-black text-left text-lg font-semibold'>Top Rated Lawyer</h2>
      </div>
      <ListLawyer name="John Doe" speciality="Hukum, Business" rate={4} onClick={onClick} />
      <ListLawyer name="Jane Doe" speciality="Pidana, Property" rate={4} onClick={onClick} />
      <ListLawyer name="Ann Will" speciality="Pidana" rate={4} onClick={onClick} />
    </div>
  )
}

export default TopRatedLawyer