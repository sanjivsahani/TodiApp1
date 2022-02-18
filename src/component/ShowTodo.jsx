import React from 'react'
import { FaTrash } from "react-icons/fa";
import swal from 'sweetalert';
import Swal from 'sweetalert2';
// const Swal = require('sweetalert2')



const ShowTodo = () => {
    const Cliclk = ()=>{

        swal("Good job! 💗", "You Have Completed The Task 😍😎", "success");
    }
    const del = ()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    return (
        <div className='Show_todo'>

            <div className="todo_container">
                <div className="todos">
                    <h4>hi mohan how are you</h4>
                </div>
                <div className="icons">
                    <input type="checkbox" onClick={Cliclk} style={{height:"20px",width:"20px",margin:"10px",}}/>
                <FaTrash fontSize='large' style={{color:"rgba(163, 3, 3, 0.781)"}} onClick={del}/>
                </div>
            </div>
             
        </div>
    )
}

export default ShowTodo