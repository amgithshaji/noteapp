
import { useState } from 'react';
import './App.css'
import { RiDeleteBin5Fill } from "react-icons/ri";


function App() {

  const [note, setnote] = useState("")
  const [finalNote, setfinalNote] = useState([])
  // console.log(note);

  // add button
  // console.log(finalNote);

  const addbtn = () => {
    if (!note) {
      alert("please add an note")

    } else {
      setfinalNote([...finalNote, { id: Date.now(), note }])

    }
    setnote("")
  }
  // deletebtn
  const removebtn = (id) => {
    setfinalNote(finalNote?.filter(item => item.id != id))
  }

  return (
    < div className='row' >
      <div className='col-md-2' ></div>
      <div className='col-md-8'>
        <div className='  mt-5 border rounded-4 p-5 shadow ' >
          <h1 className='text-center mb-5' >Note App</h1>
          <div className='d-flex justify-content-center align-items-center flex-column ' >
            <input placeholder='write your note here' value={note} onChange={e => setnote(e.target.value)} className='form-control w-50' type="text" />
            <button onClick={addbtn} className='btn btn-primary ms-3 mt-2 mb-3 fw-bold' >Add</button>
            <ul className="list-group w-50 fw-bold">
              {finalNote?.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center position-relative">
                  <span className="w-100 text-center ms-5">{item.note}</span>  <RiDeleteBin5Fill onClick={() => removebtn(item.id)} className="fs-2 text-danger end-0 me-3" />
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
      <div className='col-md-2' ></div>
    </div>
  )
}

export default App
