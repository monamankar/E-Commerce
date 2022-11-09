import './App.css';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="App">
      <h1>This is layout</h1>
      <a href='/home'>Home</a> <br />
      <a href='/aboutus'>AboutUs</a><br/>
      <a href='/addproduct'>AddProduct</a><br/>
      <a href='/addproduct2'>AddProduct2</a><br/>
      <a href='/addproduct3'>Addproduct3</a><br/>
      <a href='/editproduct'>EditProduct</a><br/>
      <a href='/listproduct'>ListProduct</a><br/> 
      <a href='/showpost'>ShowPost</a><br/> 
      <a href='/userlist'>Userlist</a><br/> 
      
      <Outlet/>
    </div>
  );
}

export default Layout;