import { useNavigate } from 'react-router-dom';
import {News, Sliders, TopRatedLawyer, Users} from "../../component"
import Master from "../../layout/master"

const Dashboard = () => {
  const navigate = useNavigate()

  const lawyerProfile = e => {
    e.preventDefault()
    navigate('/lawyer/profile')
  }

  return (
    <Master type={"navbar"}>
      <div className="content px-4 overflow-y-auto h-full">
        <Users name={"Kekeyi"} job={"Backend Engineer"}/>
        <Sliders />
        <TopRatedLawyer onClick={e => lawyerProfile(e)} />
        <News />
      </div>
    </Master>
  )
}

export default Dashboard