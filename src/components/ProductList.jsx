import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';
import PlaceOrderForm from "./PlaceOrderForm";

// Task 2 - create a List Products Catalogue

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:5000/products`)
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to fetch products.");
                setLoading(false);
            })
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Container>
                <Row>
                    {products.map((product) => (
                        <Col key={product.id} md={4} className="mb-3">
                            <Card className="shadow-sm border-0 rounded">
                                <Card.Body>
                                    <Card.Title className="text-primary" >{product.name}</Card.Title>
                                    <Card.Text><strong>${product.price}</strong></Card.Text>
                                </Card.Body>
                                <div className="d-flex justify-content-between">
                                <Link className="custom-button" to={`/products/${product.id}`}>View Details / Delete</Link>
                                <Link to={`/edit-product/${product.id}`} className="btn btn-outline-primary btn-sm">Edit Details</Link>
                                <Link to={`/place-order/${product.id}`} className="btn btn-outline-primary btn-sm">Place Order</Link>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}

export default ProductList;