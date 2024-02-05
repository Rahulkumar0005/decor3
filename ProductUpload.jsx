import './ProductUpload.css';
const ProductUpload = () => {
    return (
        <>
        <div className='product-upload-page'></div>
            <div className='product-upload-left'>
                <div className='Product-upload-main'>
                    <h5>Add Product Details</h5>
                    <div className='product-upload-head'>
                        <input type='checkbox' name='copydetails' />
                        <p><span>Copy input details to all product</span><br />
                            If you want to change specific fields for particular product like Color, Fabric etc, you can change it by selecting that product.
                        </p>
                    </div>

                </div>
                <div className='Invenyory'>
                    <h5 className='head'>Product, Size and Inventory</h5>
                    <h5 className='product-upload-line'></h5>
                    <div className='product-size-inventory'>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i title='This is for wight' class="fa fa-info-circle" />
                            <input type='text' />
                        </div>
                        <div className='upload-weight'>
                            <p>Product Name<br />
                                <span></span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                    </div>
                    <div className='product-size-inventory'>
                        <div className='upload-weight'>
                            <p>Style code/ <br/>
                                <span>Product ID</span></p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                        <div className='upload-weight'>
                            <p>Size<br />
                                <span></span> </p><i class="fa fa-info-circle"> </i>

                            <select>
                                <option value="Single">Single</option>
                                <option value="Double">Double</option>
                                <option value="King">King</option>
                                <option value="Queen">Queen</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='Invenyory'>
                    <h5 className='head'>Product Details</h5>
                    <h5 className='product-upload-line'></h5>
                    <div className='product-size-inventory'>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                    </div>
                    <div className='product-size-inventory'>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>

                    </div>
                    <div className='product-size-inventory'>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>

                    </div>
                    <div className='product-size-inventory'>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>

                    </div>
                </div>
                <div className='Invenyory'>
                    <h5 className='head'>Price & Tax</h5>
                    <h5 className='product-upload-line'></h5>
                    <div className='product-size-inventory'>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                    </div>
                    <div className='product-size-inventory'>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                    </div>
                </div>
                <div className='Invenyory'>
                    <h5 className='head'>Other Attributes</h5>
                    <h5 className='product-upload-line'></h5>
                    <div className='product-size-inventory'>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                    </div>
                    <div className='product-size-inventory'>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                    </div>
                    <div className='product-size-inventory'>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                    </div>
                    <div className='product-size-inventory'>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                        <div className='upload-weight'>
                            <p>Net Weight *<br />
                                <span>(gms) </span> </p><i class="fa fa-info-circle"> </i>
                            <input type='text' />
                        </div>
                    </div>
                </div>

            </div>
            <div className='product-upload-footer'>
                <button className='upload-discard'>Discard</button>
                <button class='upload-save'>Save and Go Back</button>
                <button class='upload-submit'>Submit Catalog</button>
            </div>
        </>
    );

}
export default ProductUpload;