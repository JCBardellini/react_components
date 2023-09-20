import React, { useState } from 'react'

const ProductDetails = ({products}) => {

    const [isVisible, setIsVisible] = useState(false)

    const handleVisibleToggle = () => {
        if (!isVisible) {
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }

    const visibleProducts = products.map( (product) => {
// need to figure out to make it for each ID
        return (
            <>
            <h2>{product.name}</h2>
            <button onClick={handleVisibleToggle}>Description</button>
            {isVisible ? <p>{product.description}</p> : <>{handleVisibleToggle}</>}
            </>
        )
    })

  return (
    <div>
        {visibleProducts}
    </div>
  )
}

export default ProductDetails