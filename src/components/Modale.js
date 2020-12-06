import React,{Fragment,useEffect, useState} from "react";
import Modal from "react-modal";
import{connect} from "react-redux";
import {editTask} from "../js/action"


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement("#root")





const Modale=({oldTodo,oldText,editTask})=> {

    const [show,setShow]= useState(false);
    const toggleModale =()=>setShow(!show);
    const [text,setText]=useState("");


    useEffect(()=>{
        setText(oldText)
    },[show,oldText]);


    const handleSubmit =(e)=> {
        e.preventDefault();
       
        const newTask={...oldTodo,text:text} //text (c est le nom de klé):text ( c est le nom du state)

        editTask(newTask);
        toggleModale();

    };

    return ( <Fragment>
 
        <button onClick={ toggleModale }>EDIT</button>
        <Modal  isOpen={show}  style={customStyles}  onRequestClose={toggleModale} >

            <form onSubmit={handleSubmit}>
                <input type="text" 
                      value={text}
                      onChange={ (e)=>setText(e.target.value) }
                       required
                
                />
                <button type ="submit">confirm</button>
                <button onClick={toggleModale} >cancel</button>
            </form>
        </Modal>


    </Fragment> )


    




}

export default connect(null,{editTask})(Modale);