
function ListProduct(){

return(

<div>

<h2>List Products</h2>

<table style={{ "border":"1px solid black"}}>
  <tr>
    <th>No.</th>
    <th>Name</th>
    <th>Description</th>
    <th>Amount</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>1</td>
    <td>A</td>
    <td>D</td>
    <td>100</td>
    <td>Edit-Delete</td>
  </tr>
  <tr>
    <td>2</td>
    <td>B</td>
    <td>E</td>
    <td>200</td>
    <td>Edit-Delete</td>
  </tr>
  <tr>
    <td>3</td>
    <td>C</td>
    <td>F</td>
    <td>300</td>
    <td><td><button>Edit</button></td><td><button>Delete</button></td></td>
  </tr>
  </table>
</div>

);

}

export default ListProduct;

