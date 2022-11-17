import './App.css';
import {useState} from 'react';

function AddProduct(){   
    const [title,setTitle] = useState([]);
    const [data,setData] = useState([]);

    return(
    <div>
        <h2>Add Product</h2>
        <input type = "text" onChange={(e)=>{
            setTitle(e.target.value)
            {console.log(title);}}
        }/><br></br>
        
        <button onClick={()=>{
            data.push(title)
            setData([...data]);
            }
        }>Add</button>

        {data && data.map((value,index)=>{
            return <div key={index}>Title: {value} {index} </div>
            })
        }<br></br>

        Description: <input type = "text"/><br></br>

        Amount:<input type = "text"/><br></br>

        <input type = "submit" value = "Add"/><br></br>
    </div>    
    );   
}   
export default AddProduct;