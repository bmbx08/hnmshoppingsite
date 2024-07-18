import React from 'react'
import { useNavigate } from 'react-router'

const ProductCard = ({item}) => {

    const navigate=useNavigate();

    // const goToDetailPage=()=>{
    //     if(authenticate === true){
    //         navigate(`/product/${item?.id}`);
    //     } else if(authenticate===false){
    //         navigate('/login');
    //     }
    // }

    const showDetail=()=>{
      navigate(`/product/${item.id}`)
    }

  return (
    <div className="product-card" onClick={showDetail}>
      <img width="300px" src={item?.img}/>
      <div>{item?.choice==true?"Conscious choice":""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new==true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard
