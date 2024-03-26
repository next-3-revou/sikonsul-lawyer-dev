import React from 'react'
import { useNavigate } from 'react-router-dom';
import Master from '../../layout/master'
import Breadcrumb from "../../layout/breadcrumb";
import { Avatar, Rate } from "antd";
import { UserOutlined } from '@ant-design/icons';
import RightChevron from '../../uploads/right-chevron.png'
import { ListCategoryLawyer } from '../../component';


const CategoryLawyer = () => {

  const navigate = useNavigate()

  const onPrev = e => {
    e.preventDefault()
    navigate(-1)
  }


  return (
    <Master>
      <div className="content px-4">
        <Breadcrumb title={"Pilih Lawyer"} onClick={e => onPrev(e)} type={"category"} />
        <div className="content-wrapper py-12">
          <ListCategoryLawyer name={'John Doe'} speciality={"Hukum, Bisnis"} />
          <ListCategoryLawyer name={'Jane Doe'} speciality={"Hukum, Bisnis"} />
          <ListCategoryLawyer name={'Angel Tania'} speciality={"Hukum, Property"} />
        </div>
      </div>
    </Master>
  )
}

export default CategoryLawyer