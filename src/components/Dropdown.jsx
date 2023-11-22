import { Link } from 'react-router-dom'

function Dropdown() {

    
  return (
 <>
 <div className="collapse bg-base-200">
  <Link to="/ch1"><div className="collapse-title text-xl font-medium"> CH1</div></Link>
 
  {/* hey */}
  
  {/* hey */}
</div>
<div className="collapse bg-base-200 mt-8">
  <Link to="/ch2"><div className="collapse-title text-xl font-medium"> CH2</div></Link>
  
   
</div>

 </>
  )
}

export default Dropdown
