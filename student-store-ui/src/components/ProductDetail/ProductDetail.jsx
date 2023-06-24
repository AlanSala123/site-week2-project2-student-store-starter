import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./ProductDetail.css"
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

function ProdDetail() {

    const params = useParams();
    const [product, setProducts] = useState({})

    useEffect(() => {
        axios.get(`https://codepath-store-api.herokuapp.com/store/${params.id}`)
            .then(response => setProducts(response.data.product))
    }, [])

    return (
        <>
            <div className="details">
                <Navbar />
                <img className="imgDetails" src={product.image} />
                <p className="prodDes">{product.description}</p>
                <Link to="/">
                    <p className="backLink">Go Back to Home </p>
                </Link>
            </div>
        </>
    )
}

export default ProdDetail