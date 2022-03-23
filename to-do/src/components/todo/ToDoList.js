import React from 'react'

const ToDoList = ({list,deleteItem,editItem}) => {

  
  return (
    <div>
      
        <p className="h3" style={{textAlign:'center'}}> Current list</p>

        <ul  className="list-group list-group-flush">
        {
            list.map(point =>{
                return  <li  key={point.key} className="list-group-item">{point.msg}
                            <button  type="button"  className="btn btn-outline-primary" onClick={() => deleteItem(point.key)} >Delete</button>
                            <button  type="button" className="btn btn-outline-primary"  onClick={()=>editItem(point.key)}    >Edit</button>
                        </li>


            })
           
        }
        </ul>
    </div>
   
  );

}

export default ToDoList;