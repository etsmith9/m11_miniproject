import { number } from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';  // Importing axios for making HTTP requests

const ProductList = ({ orderId }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/products');
                setProducts(response.data);
                console.log("response", response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        if (orderId) {
            fetchProducts();
        }

        fetchProducts(); // Fetch products when the component mounts
    }, [orderId]);

    return (   
        <div className="product-list">
            <h3>Products</h3>
            <ul>
                {products.map(product => ( 
                    <li key={product.id}>
                        Name: {product.name}, Product ID: {product.id}, 
                    </li>
                ))}
            </ul>
        </div>
    );
};

ProductList.propTypes = {
    orderId: number //defining the prop types
}

export default ProductList;