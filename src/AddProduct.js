import './App.css';
import {useState} from 'react';

function AddProduct(){
    
    const [name,setName] = useState([]);

    const [res,setRes] = useState([]);

    return(

    <div>

        <h2>Add Product</h2>

        <input type = "text" onChange={(e)=>{setName(e.target.value)}}/><br></br>
        <button onClick={()=>
        {
        res.push(name)
        setRes([...res]);
        }
        }>Add</button>

        {res && res.map((value,index)=>
        {
            return <div key={index}>Name: {value} {index} </div>
        })}
        
        <br></br>

        Description: <input type = "text"/><br></br>

        Amount:<input type = "text"/><br></br>

        <input type = "submit" value = "Add"/><br></br>

    </div>
    
    );
   
    }
   
    export default AddProduct;