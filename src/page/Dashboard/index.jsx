import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Modal } from 'antd';
import { clearData, getData } from '../../util/LocalStorage';
import { fetchProfile,fetchData } from '../../redux/actions';
import {News, Sliders, TopRatedLawyer, Users} from "../../component"
import Master from "../../layout/master"
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(false);
  const Datanews = useSelector((state) => state.dataReducer.news);
  const Dataspecializations = useSelector((state) => state.dataReducer.specializations);
  const Datalawyers = useSelector((state) => state.dataReducer.lawyers);
  
  useEffect(() => {
    const userId = getData('userId');
    if (userId) {
      dispatch(fetchProfile(userId));
      dispatch(fetchData());
    } else {
      navigate('/login');
    }
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

  return (
    
    <>
      <Master type={"navbar"}>
        <div className="content px-4 overflow-y-auto h-full">
          <Users name={profile.name || ""} job={profile.nik || ""} />
          <Sliders dataSpecials={Dataspecializations} />
          <TopRatedLawyer dataLawyers={Datalawyers} onClick={lawyerProfile} />
          <News datas={Datanews} />
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
