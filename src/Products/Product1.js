import Product2 from "./Product2";

function Product1(val){

    return(
        <div>Product 1 {val.amount}
            <Product2 amount={val.amount}/>
        </div>
    )
}
export default Product1;