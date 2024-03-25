import {Sliders, Users} from "../../component"
import Master from "../../layout/master"

const Dashboard = () => {
  return (
    <Master>
      <div className="profile-section">
        <Users name={"Hermione Granger"} />
      </div>
      <div className="slider-section">
        <Sliders />
      </div>
    </Master>
  )
}

export default Dashboard