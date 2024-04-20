import { useEffect, useState } from "react";
import Master from "../../layout/master";
import { ListMessages } from "../../component";
import { useNavigate } from 'react-router-dom';
import { DB } from "../../config";
import { useSelector } from 'react-redux';
import {
  ref,
  onValue,
} from "firebase/database";
import { message } from "antd";

const Messages = () => {
  const navigate = useNavigate()
  const profile = useSelector(state => state.profile.profile);  
  let lawyerId = profile.id;
  const [messages, setMessages] = useState([]);
  const [mounted, setMounted] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();


  useEffect(() => {
    const urlMessages = `messages/${lawyerId}`;
    const refMessages = ref(DB, urlMessages);

    if(mounted) {
      onValue(refMessages, async (snapshot) => {
        const data = snapshot.val();
        if(data !== null) {
          const dataSnapshot = data;
          const AllDataChat = [];
    
          Object.keys(dataSnapshot).map(item => {
            const dataChat = dataSnapshot[item];
            const newDataChat = [];
    
            Object.keys(dataChat).map(key => {
              newDataChat.push({
                id: key,
                data: dataChat[key],
              });
            });
            AllDataChat.push({
              date: item,
              data: newDataChat,
            });
          });
          
          AllDataChat.sort(function(a, b) {
            return b.data[0].data - a.data[0].data;
          });
          setMessages(AllDataChat);
          setMounted(false);
        }else{
          messageApi.open({
            type: 'error',
            content: 'No Messages',
          })
        }
      })
    }

  })
  

  const chatUser = (e, userId, userName) => {
    e.preventDefault()
    let nameUrl = userName.replace(/\s+/g, '-')
    navigate(`/user/${userId}/chat/${nameUrl}`)
  }

  return (
    <>
    {contextHolder}
    <Master type={"navbar"}>
      <div className="content px-4">
        <div className="content-title pt-4 pb-2">
          <h2 className="text-black text-left text-2xl">Messages</h2>
        </div>
        {messages.length > 0 &&
          messages.map((cur, key) => {
            return (
              <ListMessages key={key} title={cur.data[2].data} specialization={cur.data[1].data} onCLick={(e) => chatUser(e, cur.data[5].data, cur.data[2].data)} />
            )
          })

        }
        
        {messages.length === 0 &&
          <div className="warning py-5">
            <h2 className="text-black text-xl">No Message</h2>
          </div>
        }
        

      </div>
    </Master>
    </>
  )
}

export default Messages