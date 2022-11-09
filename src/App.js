import {BrowserRouter,Route,Routes} from "react-router-dom"
import AboutUs from './AboutUs';
import AddProduct from './AddProduct';
import AddProduct2 from "./AddProduct2";
import AddProduct3 from "./AddProduct3";
import './App.css';
import EditProduct from './EditProduct';
import Home from './Home';
import Layout from './Layout';
import ListProduct from "./ListProduct";
import Showpost from "./Showpost";
import Userlist from "./Userlist";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Layout/>} />
        <Route path='home' element={<Home/>}/>
        <Route path='aboutus' element={<AboutUs/>} />
        <Route path='addproduct' element={<AddProduct/> } />
        <Route path='addproduct2' element={<AddProduct2/> } />
        <Route path='addproduct3' element={<AddProduct3/> } />
        <Route path='editproduct' element={<EditProduct/>} />
        <Route path='listproduct' element={<ListProduct/>}/> 
        <Route path='showpost' element={<Showpost/>}/> 
        <Route path='userlist' element={<Userlist/>}/> 
            
        
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
