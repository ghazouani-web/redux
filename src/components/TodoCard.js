import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect} from "react-redux";
import {removeTodo,toggleComplete} from '../js/action';
import Modale from "./Modale"
import "../App.css"

function TodoCard({todo,toggleComplete,removeTodo}) {
    return (
        <div  className="container" >
             <p   style={
          todo.isComplete
            ? { textDecoration: "line-through", opacity: "0.3" }
            : {}
        } > {todo.text}</p>
             <div>
                 <div  className=" button" >
               <button onClick={()=>toggleComplete(todo.id)} > {todo.isComplet ? "undo" : "complete"} </button>
               <button onClick={()=>removeTodo(todo.id)} >delete</button>
              <Modale   oldText={todo.text}  oldTodo ={todo}/>
              </div>
             </div>



        </div>
    )
}

const mapStateToProps = (state)=>({
  sss:state.todos,
 
 })

export default connect(null, {removeTodo,toggleComplete})(TodoCard);
