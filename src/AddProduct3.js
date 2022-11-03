import './App.css';
import {useState} from 'react'
import Table from 'react-bootstrap/Table';

function AddProduct3() {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [action, setAction] = useState();
  const [addtocart, setAddtocart] = useState();
  
  // to hold all previous values
  const [res, setRes] = useState([]);

  return (
    <div>
      <input type="text" onChange={(e)=>{setName(e.target.value)}}/><br/>
      <input type="text" onChange={(e)=>{setAmount(e.target.value)}}/><br></br>
      <input type="text" onChange={(e)=>{setDescription(e.target.value)}}/><br></br>
      <input type="text" onChange={(e)=>{setAction(e.target.value)}}/><br></br>
      <input type="text" onChange={(e)=>{setAddtocart(e.target.value)}}/><br></br>
      
      <button onClick={()=>{
        res.push({"name": name, "amount": amount , "description": description , "action": action , "addtocart": addtocart })
        setRes([...res]);
      }}>Add</button>

      
<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Description</th>
          <th>Action</th>
          <th>Add-to-Cart</th>
        </tr>
      </thead>
      <tbody>
      {res && res.map((val, index)=>{
        return <tr>
        <td>{index+1}</td>
        <td>{val.name}</td>
        <td>{val.amount}</td>
        <td>{val.description}</td>
        <td>{val.action}</td>
        <td>{val.addtocart}</td>
      </tr>
      })}
      </tbody>
    </Table>
    </div>

  );
}

export default AddProduct3;