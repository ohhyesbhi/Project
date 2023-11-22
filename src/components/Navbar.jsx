import Modals from './Modals'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <>
    <div className="navbar bg-[#071630]">
        <Link to="/"><a className="btn btn-ghost normal-case text-xl text-white">Home</a></Link>
  
  <button className='btn ml-8 font-bold text-white bg-[#d156d0] hover:text-black text-2xl' onClick={()=>document.getElementById('my_modal_2').showModal()}>RESIDENTS</button>
</div>


{/* <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button> */}

<Modals/>
   
   </>
  )
}

export default Navbar
