import Product1 from './Product4'
function Product3(val){

    return(
        <div>Product 3{val.amount} 
        <Product1 amount={val.amount}/>
        </div>
    )
}
export default Product3;