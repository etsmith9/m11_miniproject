import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function PlaceOrderForm() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/customers').then(res => setCustomers(res.data));
  axios.get('http://127.0.0.1:5000/products').then(res => {
    setProducts(res.data);
    if (id) setSelectedProductIds([parseInt(id)]);
  });
}, [id]);

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://127.0.0.1:5000/orders', {
      customer_id: selectedCustomerId,
      product_ids: selectedProductIds,
    });

    const { message, order_date, customer_name, customer_email } = response.data;

    setSuccessMsg(
      `${message} \n\nDate: ${order_date}\nCustomer: ${customer_name}`
    );
    setErrorMsg('');
  } catch (err) {
    setErrorMsg('Failed to place order.');
    setSuccessMsg('');
  }
};


  const toggleProductSelection = (productId) => {
    setSelectedProductIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <Container>
      <h2 className="my-4">Place an Order</h2>
      {successMsg && <Alert variant="success">{successMsg}</Alert>}
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Select Customer</Form.Label>
          <Form.Select onChange={(e) => setSelectedCustomerId(e.target.value)} required>
            <option value="">-- Select Customer --</option>
            {customers.map((cust) => (
              <option key={cust.id} value={cust.id}>{cust.name}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Select Products</Form.Label>
          {products.map((product) => (
            <Form.Check
              key={product.id}
              type="checkbox"
              label={`${product.name} ($${product.price})`}
              onChange={() => toggleProductSelection(product.id)}
            />
          ))}
        </Form.Group>

        <Button type="submit" variant="primary">Place Order</Button>
      </Form>
    </Container>
  );
}

export default PlaceOrderForm;
