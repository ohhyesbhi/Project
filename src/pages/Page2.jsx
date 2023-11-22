
import Navbar from '../components/Navbar'
import { useState } from 'react'

function Ch2() {
  const [state1,setState1] = useState(false)
  const [state2,setState2] = useState(false)
  const [state3,setState3] = useState(false)
  const [state4,setState4] = useState(false)
  return (
 <>
  <Navbar/>
  
  <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">

    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

    {
    state1 && 
    (<>
    <p className='ml-4 mt-4'>Name : E</p>
    <p className='ml-4 mt-4'>Latname : lastname</p>
    <p className='ml-4 mt-4'>DoB : 17-12-2000</p>
    <p className='ml-4 mt-4'>Symptoms : Dengue, Allergies</p></>
    )
  }
  {
    state2 && 
    (<>
    <p className='ml-4 mt-4'>Name : F</p>
    <p className='ml-4 mt-4'>Latname : lastname</p>
    <p className='ml-4 mt-4'>DoB : 17-12-2000</p>
    <p className='ml-4 mt-4'>Symptoms : Dengue, Allergies,Colds and Flu</p>
    </>
    )
  }
   {
    state3 && 
    (<>
    <p className='ml-4 mt-4'>Name : G</p>
    <p className='ml-4 mt-4'>Latname : lastname</p>
    <p className='ml-4 mt-4'>DoB : 17-12-2000</p>
    <p className='ml-4 mt-4'>Symptoms : Dengue, Allergies,Acne</p>
    </>
    )
  }
   {
    state4 && 
    (<>
    <p className='ml-4 mt-4'>Name : H</p>
    <p className='ml-4 mt-4'>Latname : lastname</p>
    <p className='ml-4 mt-4'>DoB : 17-12-2000</p>
    <p className='ml-4 mt-4'>Symptoms : Back Pain,Dengue, Allergies,Acne</p>
    </>
    )
  }

      
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li onClick={()=> {
        setState1(true)
        setState2(false)
        setState3(false)
        setState4(false)
      }
      }><a>E</a></li>
      <li onClick={()=> {
        setState2(true)
        setState1(false)
        setState3(false)
        setState4(false)
        }}><a>F</a></li>
      <li onClick={()=> {
        setState3(true)
        setState2(false)
        setState1(false)
        setState4(false)
        }}><a>G</a></li>
      <li onClick={()=> {
        setState4(true)
        setState3(false)
        setState2(false)
        setState1(false)
        }}><a>H</a></li>
    </ul>
  
  </div>
</div>
 </>
  )
}

export default Ch2
