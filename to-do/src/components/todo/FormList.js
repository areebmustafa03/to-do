import React from 'react'
import {useState} from 'react';
import uuid from 'react-uuid';
const FormList = ({list, addToList,edit,isEdit,handleEdit}) => {

  const [text,setText] = useState('');
  const [editChange ,setEditChange] = useState('');
  const onEdit = e => {
    
      setEditChange(e.target.value);
    
  }
  const editing = e => {
    console.log("here");
    setEditChange(edit.msg);
  }
  const onChange = (e) => {
    
    
    setText(e.target.value);
  }
  const onSubmit = (e) => {



      e.preventDefault();
      if (isEdit === false){
        addToList(uuid(), text);
        setText('');

      }
      else{

        handleEdit(text,edit.key);
        setText('');
      }
     
  }
    
  return (
    <div>
      
      <form onSubmit={onSubmit}className="form">

        {
          isEdit === false ? <div> <input className="form-control" type="text" name="text" placeholder="Add anything to your list." onChange={onChange} value ={text} />
          <br/>
          <input className="btn btn-outline-primary" type="submit" value="Add"/></div> : 

          <div>
            <input className="form-control" type="text" name="text" placeholder="Add anything to your list." onChange={onEdit} value={editChange}/>
            <br/>
            <button  type="button"  className="btn btn-outline-primary" onClick={editing} >Edit</button>
            

          </div>
        }
         
      </form> 
  </div>
  );
}

export default FormList;