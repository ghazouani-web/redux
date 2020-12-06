import React, {  useState } from "react";

import {connect} from "react-redux"
import{addTodo} from "../js/action";

function AddTodo({addTodo}) {
    const[text,setText]=useState("");
     const handelSubmit = (event)=>{
         event.preventDefault();
         const newTodo={
             text: text,
             id:Date.now(),
             isCOmplete:false,
         };
         addTodo(newTodo);
         setText("");
     }
   
   
    return (
        <div>
            <h1>Todo App</h1>
            <form  onSubmit={handelSubmit}>

                <input type="text" 
                value={ text}
                onChange={(e)=>setText(e.target.value)}
                required
                />
                <button type="submit" >ADD</button>
            </form>
        </div>
    )
}

export default connect(null,{addTodo}) (AddTodo);
