import React,{useState} from 'react'
import './Todo.css'

function Todo(){
    const[inputList,setInputList]=useState("")
    const[Items,setItems]=useState([])
    const deleteItems=(index)=>{
        console.log("deleted");
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,id)=>{

                return index !==id;
            })
        })
    }
    const itemEvent=(e)=>{
        setInputList(e.target.value);
    };
    const listOfItems=()=>{
         setItems((oldItems)=>{
             return [...oldItems,inputList]
         })
         setInputList("")
    }
    return(
        <>
        <div className="main_div">
            <div className="center_div">
            <h1>Todo list</h1>
            <br />
            <input type="text" placeholder='Add items' onChange={itemEvent}  value={inputList}/>
            
            <button type="button" onClick={listOfItems}><b> + </b></button>
            <br /><br />

            <ol>
                {/* <li> {inputList}</li> */}
                {Items.map((itemval,index)=>{
                   return (<>
                   <div className="todo_style">
                      <i className="fa fa-times" onClick={()=>{
                          deleteItems(index);
                      }}></i>
                      <li>{itemval}</li>
                    </div></>)

                })}
            </ol>
            </div>
        </div>
        </>
    )
}
export default Todo;