import {News, Sliders, TopRatedLawyer, Users} from "../../component"
import Master from "../../layout/master"

const Dashboard = () => {
  return (
    <Master type={"navbar"}>
      <div className="content px-4 overflow-y-auto">
        <Users name={"Kekeyi"} job={"Backend Engineer"}/>
        <Sliders />
        <TopRatedLawyer />
        <News />
      </div>
    </Master>
  )
}

export default Dashboard