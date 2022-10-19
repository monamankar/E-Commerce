import {BrowserRouter,Route,Routes} from "react-router-dom"
import AboutUs from './AboutUs';
import AddProduct from './AddProduct';
import AddProduct2 from "./AddProduct2";
import './App.css';
import EditProduct from './EditProduct';
import Home from './Home';
import Layout from './Layout';
import ListProduct from "./ListProduct";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Layout/>} />
        <Route path='home' element={<Home/>}/>
        <Route path='aboutus' element={<AboutUs/>} />
        <Route path='addproduct' element={<AddProduct/> } />
        <Route path='addproduct2' element={<AddProduct2/> } />
        <Route path='editproduct' element={<EditProduct/>} />
        <Route path='listproduct' element={<ListProduct/>}/>      
        
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
