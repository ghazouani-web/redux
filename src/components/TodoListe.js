import React from 'react'
import TodoCard from "./TodoCard"
import { connect} from "react-redux";
function TodoListe({todoList}) {
    return (
        <div  >
            {todoList.map((el)=>(
            <TodoCard key={el.id} todo={el}   />)  )}
            
            
        </div>
    )
}

 const mapStateToProps = (state)=>({
 todoList:state.todos,

})

export default  connect(mapStateToProps)(TodoListe);
