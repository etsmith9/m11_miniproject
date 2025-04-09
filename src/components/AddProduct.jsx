import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function AddProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
  });

  // Fetch product for editing
  useEffect(() => {
    if (id) {
      axios.get(`http://127.0.0.1:5000/products/${id}`)
        .then((res) => {
          setFormData({
            name: res.data.name,
            price: res.data.price,
          });
        })
        .catch((err) => {
          setError("Failed to fetch product data");
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = id
        ? `http://127.0.0.1:5000/products/${id}`
        : `http://127.0.0.1:5000/products`;
      const method = id ? axios.put : axios.post;

      const response = await method(url, formData);
      setSubmitted(true);
      setError(null);
      setProduct(response.data);
      setTimeout(() => navigate("/products"), 1500); // Redirect after short delay
    } catch (err) {
      setError(`Error submitting form: ${err.message}`);
    }
  };

  return (
    <Container className="mt-5">
      <h2>{id ? 'Edit Product' : 'Add Product'}</h2>

      {submitted && <Alert variant="success">Product {id ? 'updated' : 'created'} successfully!</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" name="price" value={formData.price} onChange={handleChange} required />
        </Form.Group>

        <Button type="submit">{id ? 'Update' : 'Add'} Product</Button>
      </Form>
    </Container>
  );
}

export default AddProduct;
