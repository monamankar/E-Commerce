import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios';

function Showpost() {

  const [list,setList] = useState([])
  
  useEffect(()=>{
    console.log("api call")
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result)=>{
        console.log("result",result.data)
        setList(result.data)
    })
    },[])

  return (
    <div className="App">
      {list.map((val)=>{
        return <div>{val.id}-{val.title}</div>
      })}
    </div>
  );
}

export default Showpost;