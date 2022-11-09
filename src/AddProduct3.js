import './App.css';
import {useState} from 'react'
import Table from 'react-bootstrap/Table';

function AddProduct3() {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  
  // to hold all previous values
  const [res, setRes] = useState([]);

  

  return (
    <div>
      
      Product Name:<input type="text" onChange={(e)=>{setName(e.target.value)}}/><br/>
      Description: <input type="text" onChange={(e)=>{setDescription(e.target.value)}}/><br></br>
      Amount: <input type="text" onChange={(e)=>{setAmount(e.target.value)}}/><br></br>
      
      <button onClick={()=>{
        res.push({"name": name,  "description": description ,"amount": amount  })
        setRes([...res]);
      }}>Add</button>
      

      
<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Action</th>
          <th>Add-to-Cart</th>
        </tr>
      </thead>
      <tbody>
      {res && res.map((val, index)=>{
        return <tr id="rowdata">
        <td>{index+1}</td>
        <td>{val.name}</td>
        <td>{val.description}</td>
        <td>{val.amount}</td>
        <td>{val.action}<td><button>Edit</button></td><td><button>Delete</button></td></td>
        <td>{val.addtocart}<td><button >Gotocart</button></td></td>
      </tr>
      })}
      </tbody>
    </Table>
    </div>

  );
}

export default AddProduct3;