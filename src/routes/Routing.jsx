
import { Route, Routes } from 'react-router-dom'
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2"


import Home from "../components/Home"

function Routing() {
  return (
  <>
  <Routes>
    <Route path='/'  element = {<Home/>} />
    <Route path='/ch1' element={<Page1/>}/>
    <Route path='/ch2' element={<Page2/>} />
  </Routes>
  </>
  )
}

export default Routing
