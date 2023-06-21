import React from 'react'
import { Link } from 'react-router-dom' 
import "./ProductGrid.css"

function ProdGrid({productFilter, shoppingList, setShoppingList}) {
    
    //function that adds item to the cart
    function additems(product) {
        //increase the quantity of the shoppingList item
    const inCart = shoppingList?.find( item =>  item.id === product.id)
       if (inCart){
        console.log("FOUND")
        //increment the quantity 
        
        const updatedCart = shoppingList?.map(item => {
            if (item?.id == product?.id) {
                return {...item, quantity: item?.quantity + 1}
            }
            return item
           })

        console.log("updated cart: ",updatedCart)
        setShoppingList(updatedCart)
       }else {
        console.log("NOT FOUND")
        //there is not another entry
        setShoppingList([...shoppingList, {...product, quantity: 1}])
       }
       console.log(shoppingList)
    }

    //function that deletes items to the cart
    function deleteItems(product) {
        //decrease the quantity of the items
        const inCart = shoppingList?.find( item => {item.product.id == product.id})

        if (inCart) {
            //decrease the quantity
            setShoppingList(shoppingList?.map(item => {
                if (item.quantity > 0) {
                    item.quanity -= 1;
                }
            }))
        }
    }

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
              <span>
              <button onClick={()=>{additems(product)}}> + </button>
              <button onClick={()=>{deleteItems(product)}} > - </button>
              </span>
            </div>)
          })
        }
        </div>
    )
}

export default ProdGrid