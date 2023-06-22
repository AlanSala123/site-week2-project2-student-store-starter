import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductGrid.css"

function ProdGrid({ productFilter, shoppingList, setShoppingList }) {


    //function that adds item to the cart
    function additems(product) {
        //increase the quantity of the shoppingList item
        const inCart = shoppingList?.find(item => item.id === product.id)
    
        if (inCart) {
            //increment the quantity 
            const updatedCart = shoppingList?.map(item => {
                if (item?.id == product?.id) {
                    return { ...item, quantity: item?.quantity + 1 }
                }
                return item
            })
            setShoppingList(updatedCart)
        }
        else {
            //there is not another entry
            setShoppingList([...shoppingList, { ...product, quantity: 1 }])
        }
    }

    //function that deletes items on the cart
    function deleteItems(product) {

        //find the item and decrement the  quantity
        const updatedCart = shoppingList?.map(item => {
            if (item?.id == product?.id) {
                if (item?.quantity > 0) {
                    return { ...item, quantity: item?.quantity - 1 }
                }
            }
            return item
        })
        setShoppingList(updatedCart);
    }

    function getQuantity(product){
       return shoppingList.map(item => {
            if (item.id === product.id) {
                return item.quantity;
            }
        })
    }

    return (
        <div className="product-container">
            {
                productFilter?.map(product => {
                    return (
                        <div className="product">
                            <Link to={"products/" + product.id} >
                                <img src={product.image} />
                            </Link>
                            <p>{product.name}</p>
                            <p>{"$"}{product.price.toFixed(2)}</p>
                            <span>
                                <button onClick={() => { additems(product) }}> + </button>
                                <button onClick={() => { deleteItems(product) }} > - </button>
                            </span>
                            <p>{"Quantity: "}{getQuantity(product)}</p>
                        </div>)
                })
            }

        </div>
    )
}

export default ProdGrid