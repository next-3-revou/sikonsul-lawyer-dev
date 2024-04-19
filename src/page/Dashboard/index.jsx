import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Modal } from 'antd';
import { clearData } from '../../util/LocalStorage';
import { fetchData } from '../../redux/actions';
import {News, Sliders, TopRatedLawyer, Users} from "../../component"
import Master from "../../layout/master"

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const news = useSelector((state) => state.news);
  const specializations = useSelector((state) => state.specializations);
  const lawyers = useSelector((state) => state.lawyers);

  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(false);
  
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleOk = () => {
    setOpen(false);
    clearData('accessToken');
    clearData('userId');
    dispatch({ type: 'CLEAR_PROFILE' });
    dispatch({ type: 'CLEAR_TOKEN' });
  };

  const handleCancel = () => {
    setOpen(false);
    clearData('accessToken');
    clearData('userId');
    dispatch({ type: 'CLEAR_PROFILE' });
    dispatch({ type: 'CLEAR_TOKEN' });
  };

  const lawyerProfile = (idLawyer) => {
    navigate(`/lawyer/profile/${idLawyer}`);
  };

  const lawyerCategory = (catId) => {
    navigate(`/lawyer/category/${catId}`);
  };

  return (
    <>
      <Master type={"navbar"}>
        <div className="content px-4 overflow-y-auto h-full">
          <Users name={profile.name || ""} job={profile.occupation || ""} />
          <Sliders dataSpecials={specializations} onCLick={lawyerCategory} />
          <TopRatedLawyer dataLawyers={lawyers} onClick={lawyerProfile} />
          <News datas={news} />
        </div>
      </Master>
      <Modal
        title="Session Expired"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h2>Session Expired. Please Login</h2>
      </Modal>

      {load && (
        <div className="absolute inset-0 flex justify-center items-center z-[9999] bg-gray-400 bg-opacity-75">
          <Spin size="large" />
        </div>
      )}
    </>
  );
};

export default Dashboard;
