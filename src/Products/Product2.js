import Product3 from './Product3'

function Product2(val){
    return(
        <div> Product2 {val.amount}
            <Product3 amount={val.amount}/>
        </div>
    )
}
export default Product2;