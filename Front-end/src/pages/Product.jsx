import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../components/Breadcrum';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay';
import DesciptionBox from '../components/DesciptionBox';
import RelatedProducts from '../components/RelatedProducts';


const Product = () => {
const {all_product} = useContext(ShopContext);
const {productId} = useParams();
const product =all_product.find((e)=>e.id === Number(productId));


  return (
    <div>
     <Breadcrum product={product} />
     <ProductDisplay product={product} />
     <DesciptionBox/>
     <RelatedProducts/>
    </div>
  )
}

export default Product
