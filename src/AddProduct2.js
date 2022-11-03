import './App.css';
import {useState} from 'react';

function AddProduct2(){
    
    const [name,setName] = useState([]);

    const [res,setRes] = useState([]);

    const [res2,setRes2] = useState([]);

    return(

    <div>

        <h2>Add Product 2</h2>

        <input type = "text" onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={()=>
        {
        res.push(name)
        setRes([...res]);
        }
        }>Add</button><br></br>

        {res && res.map((value,index)=>
        {
            return <div key={index}>Name: {value} {index} </div>
        })}
        
          
        <input type = "text" onChange={(a)=>{setName(a.target.value)}}/>
        <button onClick={()=>
        {
        res2.push(name)
        setRes2([...res2]);
        }
        }>Add2</button>

        {res2 && res2.map((value2,index2)=>
        {
            return <div key={index2}>Description: {value2} {index2} </div>
        })}
        <br></br>

        Amount:<input type = "text"/><br></br>

        <input type = "submit" value = "Add"/><br></br>

    </div>
    
    );
   
    }
   
    export default AddProduct2;