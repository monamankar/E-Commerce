import { useContext } from "react";
import UserContext from "./Context";

    function Product3(){

        const productContext = useContext(UserContext);
        console.log("productContext",productContext)
        return (
            <div>ProductContext3{productContext.name}{productContext.age}</div>
        )
    }
export default Product3;