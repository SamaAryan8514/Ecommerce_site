import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header.jsx';
import './HomePage.css';
import { ProductsGrid } from './ProductsGrid.jsx';

export function HomePage({ cartItems }) {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data);
            });



    }, []);
    return (
        <>
            <title>Ecommerce Project</title>

            <Header cartItems={cartItems} />

            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    )
}