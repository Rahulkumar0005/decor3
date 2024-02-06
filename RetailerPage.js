import React from "react";
import ProductForm from "../Components/ProductForm";
import SellerPanel from "../Components/sellerPanel";
const RetailerPage = ()=>{
    return (
        <>
        {<ProductForm/>}
        {<SellerPanel/>}
        </>
    );
}
export default RetailerPage;