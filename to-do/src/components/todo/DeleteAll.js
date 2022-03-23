import React from 'react'

const DeleteAll = ({deleteList}) => {
  const onClick = () =>{
      deleteList();
  }
  return (
    <div>
        <br />
        <br />
        <button type="button" onClick={onClick}className="btn btn-outline-primary">Delete All</button>
    </div>
    
  )
}

export default DeleteAll;