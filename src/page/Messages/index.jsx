import { useEffect, useState } from "react";
import Master from "../../layout/master";
import { ListMessages } from "../../component";
import { useNavigate } from 'react-router-dom';
import { DB } from "../../config";
import {
  ref,
  onValue,
} from "firebase/database";

const Messages = () => {
  const navigate = useNavigate()
  let userId = 'abcd';

  const [messages, setMessages] = useState([]);
  const [mounted, setMounted] = useState(true);


  useEffect(() => {
    const urlMessages = `messages/${userId}`;
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
        }
      })
    }

  })
  

  const chatLawyer = (e, idLawyer) => {
    e.preventDefault()
    navigate(`/lawyer/${idLawyer}/chat`)
  }

  return (
    <Master type={"navbar"}>
      <div className="content px-4">
        <div className="content-title pt-4 pb-2">
          <h2 className="text-black text-left text-2xl">Messages</h2>
        </div>
        {messages.length > 0 &&
          messages.map((cur, key) => {
            return (
              <ListMessages key={key} title={cur.data[2].data} specialization={cur.data[1].data} onCLick={(e) => chatLawyer(e, cur.data[5].data)} />
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
  )
}

export default Messages