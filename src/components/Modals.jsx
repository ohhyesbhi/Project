import Dropdown from "./Dropdown"

function Modals() {
  return (
 <>
 <dialog id="my_modal_2" className="modal">
 
  <div className="modal-box ">
    <Dropdown/>
  </div>

  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
 </>
  )
}

export default Modals
