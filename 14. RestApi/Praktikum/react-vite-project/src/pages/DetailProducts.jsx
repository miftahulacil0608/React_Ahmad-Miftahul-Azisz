import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectProducts } from '../store/productSlice';

const DetailProducts = () => {
  const { id } = useParams();
  const products = useSelector(selectProducts);
  const productDetail = products.find((product) => product.id === parseInt(id));

  if (!productDetail) {
    return <p>Product not found</p>;
  }


  return (
    <section className='py-20'>
        <div className='container text-center'>
            <h2 className='text-3xl font-bold text-[#091B2F]'>Product Details</h2>
            <div className='mt-8 p-6 bg-[#091B2F] rounded-xl text-white max-w-lg mx-auto'>
                <p className='font-semibold text-xl'>ID : {productDetail.id}</p>
                <p className='mt-2 font-semibold text-xl'>Name : {productDetail.productName}</p>
                <p className='mt-2 font-semibold text-xl'>Category : {productDetail.productCategory}</p>
                <img className='w-20 h-20 mx-auto' src={productDetail.productImage} alt="products-image" />
                <p className='mt-2 font-semibold text-xl'>Freshness : {productDetail.productFreshness}</p>
                <p className='mt-2 font-semibold text-xl'>Description : {productDetail.productDescription}</p>
                <p className='mt-2 font-semibold text-xl'>Price : {productDetail.productPrice}</p>
            </div>
        </div>
    </section>
  )
}

export default DetailProducts