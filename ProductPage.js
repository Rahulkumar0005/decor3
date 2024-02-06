import Product from "../Components/Product";

import Footer from "../Components/footer";
import Header from "../Components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";

const ProductPage =()=>{
    return (
        <>
        {<Header/>}
        {<Product/>}
        {<Footer/>}
        </>
    );
}
export default ProductPage;