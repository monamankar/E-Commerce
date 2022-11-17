import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';


function Userlist() {

  const [list,setList] = useState([])
  
  useEffect(()=>{
    console.log("api call")
    axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
        console.log("result",result.data)
        setList(result.data)
    })
    },[])

  return (
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          </tr>
      </thead>
      <tbody>
      {list && list.map((val)=>{
        return (
        <tr id="rowdata">
        <td>{val.id}</td>
        <td>{val.name}</td>
        <td>{val.email}</td>
        </tr>
        )
        })
      }
      </tbody>
      </Table>
      </div>
  );         
}
export default Userlist;