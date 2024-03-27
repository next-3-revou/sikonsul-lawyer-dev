// import React from 'react'
import Master from "../../layout/master";
import { ListMessages } from "../../component";


const Messages = () => {
  return (
    <Master type={"navbar"}>
      <div className="content px-4">
        <div className="content-title pt-4 pb-2">
          <h2 className="text-black text-left text-2xl">Messages</h2>
        </div>
        <ListMessages title={"Melody Laksani"} specialization={"Perdata, Hukum, Sipil"} />
        <ListMessages title={"Cindy Yuvia"} specialization={"Perdata, Hukum, Sipil"} />
        <ListMessages title={"Shania o29u"} specialization={"Perdata, Hukum, Sipil"} />
        <ListMessages title={"Stella Parfume"} specialization={"Perdata, Hukum, Sipil"} />
        <ListMessages title={"Gladys Parfume"} specialization={"Perdata, Hukum, Sipil"} />

      </div>
    </Master>
  )
}

export default Messages