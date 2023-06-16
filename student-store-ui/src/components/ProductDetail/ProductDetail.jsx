import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./ProductDetail.css"

function ProdDetail() {

    const params = useParams();
    const [product, setProducts] = useState({})

    useEffect(() => {
        axios.get(`https://codepath-store-api.herokuapp.com/store/${params.id}`)
        .then( response => setProducts(response.data.product))
    }, [])

    return(
        <div className="details">
            <img className ="imgDetails" src={product.image} />
            <p className="descdet">{product.description}</p>
        </div>
    )
}

export default ProdDetail