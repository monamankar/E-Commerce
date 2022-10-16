import './App.css';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="App">
      <h1>This is layout</h1>
      <a href='/home'>Home</a> <br />
      <a href='/aboutus'>AboutUs</a><br/>
      <a href='/addproduct'>AddProduct</a><br/>
      <a href='/editproduct'>EditProduct</a><br/>
      <a href='/listproduct'>ListProduct</a><br/> 
      <Outlet/>
    </div>
  );
}

export default Layout;