// import React from 'react'
import { useNavigate } from 'react-router-dom';
import Master from "../../layout/master"
import { Button } from 'antd';
import { EnterOutlined } from '@ant-design/icons';
import './styles.css'
import Breadcrumb from "../../layout/breadcrumb";

const Chats = () => {
  const navigate = useNavigate()

  const onPrev = e => {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <Master>
      <div className="content h-full px-4">
        <Breadcrumb type={"chat"} title={"Tes"} onClick={e => onPrev(e)}/>
        <div className="chat-wrapper h-full">
          <div className="chat-elem h-full flex flex-col justify-between">
            <div className="chat-content h-full mt-4">
              <h2 className="text-black">tes</h2>
            </div>
            <div className="chat-input flex justify-around">
              <div className="chats-area">
                <textarea placeholder="Type your message" rows={1} cols={40} className="resize-none rounded-md text-black overflow-hidden"></textarea>
              </div>
              <div className="chat-btn mb-4">
                <Button type="primary" icon={<EnterOutlined />} className="w-12 h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </Master>
  )
}

export default Chats