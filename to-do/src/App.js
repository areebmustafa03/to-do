
import './App.css';
import { useEffect,useState } from 'react';
import Navbar from './components/layout/Navbar';
import FormList from './components/todo/FormList';
import ToDoList from './components/todo/ToDoList';
import DeleteAll from './components/todo/DeleteAll';
function App() {

  const [list, setList] = useState([]);
  const [edit, setEdit] = useState({});
  const [isEdit,setIsEdit] = useState(false);
  useEffect(()=>{
    setList([  {key:1, msg:'Walk the dog'} , {key:2,msg:'Pick up the laundry'}]);
  },[]);

  const deleteItem = key =>{
    const newList = list.filter((item)=> item.key !== key);
    setList(newList);
  }
  const editItem = key => {
    setEdit(list.find(item=>item.key===key));
    setIsEdit(true);
    
  }
  const addToList = (key,text) => {

  
    setList([...list, {key, msg:text}]);
    
  }
  const handleEdit = (text,key) => {
    setIsEdit(false);
    let obj = list.find(item=>item.key===key);
    obj.msg = text;
  }
  const deleteList = () => {
    setList([]);
  }
  return (
    <div>
      <Navbar title='Todo List' />
      <FormList list={list} addToList={addToList} edit={edit} isEdit={isEdit} handleEdit={handleEdit}/>
      <ToDoList list={list} deleteItem={deleteItem} editItem={editItem} />
      {
        list.length > 0 && <DeleteAll list={list} deleteList={deleteList} />
      }
      

    </div>
  );
}

export default App;
