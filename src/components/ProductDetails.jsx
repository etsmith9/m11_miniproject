import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteError, setDeleteError] = useState(null);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load product details");
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    axios.delete(`http://127.0.0.1:5000/products/${id}`)
      .then(() => {
        setDeleted(true);
        setTimeout(() => navigate("/products"), 1500); // Redirect after a short delay
      })
      .catch((error) => {
        setDeleteError("Failed to delete the product");
      });
  };

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      {deleted && <Alert variant="success">Product deleted successfully. Redirecting...</Alert>}
      {deleteError && <Alert variant="danger">{deleteError}</Alert>}

      <Card className="product-card my-3">
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: ${product.price}</Card.Text>
          <Button variant="danger" onClick={handleDelete}>
            Delete Product
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetails;
