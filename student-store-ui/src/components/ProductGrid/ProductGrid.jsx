import React from 'react'
import { Link } from 'react-router-dom' 

function ProdGrid({productFilter}) {
    return(
        <div className="product-container">
        {
          productFilter?.map(product => {
            return (
            <div className="product">
             <Link to={"products/" + product.id} >
                <img src={product.image} />
                </Link>
              <p>{product.name}</p>
              <p>{"$"}{product.price}</p>
            </div>)
          })
        }
        </div>
    )
}

export default ProdGrid