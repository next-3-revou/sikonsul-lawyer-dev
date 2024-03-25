import Master from "../../layout/master"
import { Buttons } from '../../component'
import { useNavigate } from 'react-router-dom';

const Front = () => {
  const navigate = useNavigate()

  const toLogin = (e) => {
    e.preventDefault()
    navigate('/signin')
  }

  const toSignUp = e => {
    e.preventDefault()
    navigate('/signup')
  }


  return (
    <Master type={'front'}>
      <div className="content flex flex-col mt-96">
        <div className="content-title text-left px-10">
          <h2 className="text-white text-4xl">Konsultasi Dengan Pengacara Jadi Lebih Mudah dan Efisien</h2>
        </div>
        <div className="content-button flex flex-col items-center mt-32">
          <Buttons title={"Sign In"} width={"w-80"} height={"h-12"} gap={"my-2"} tipe={"active"} onClick={e => toLogin(e)} />
          <Buttons title={"Sign Up"} width={"w-80"} height={"h-12"} gap={"my-2"} tipe={"inactive"} onClick={e => toSignUp(e)} />
        </div>
      </div>
    </Master>
  )
}

export default Front