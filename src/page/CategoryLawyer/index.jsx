// import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import Master from '../../layout/master'
import Breadcrumb from "../../layout/breadcrumb";
import { ListCategoryLawyer } from '../../component';
// import { fetchLawyerSpecialize } from '../../services';
import { useEffect, useState } from 'react';
import { fetchLawyerSpecialize } from '../../services';

const CategoryLawyer = () => {
  const location = useLocation();
  const categoryId = location.pathname.split('/').pop();
  const navigate = useNavigate()
  const [users,setUser] =useState([])

  const onPrev = e => {
    e.preventDefault()
    navigate(-1)
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchLawyerSpecialize(categoryId);
        setUser(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, [categoryId]);

  

  return (
    <Master>
      <div className="content px-4">
        <Breadcrumb title={"Pilih Lawyer"} onClick={e => onPrev(e)} type={"category"} />
        <div className="content-wrapper py-12">
          <ListCategoryLawyer users={users} />
        </div>
      </div>
    </Master>
  )
}

export default CategoryLawyer