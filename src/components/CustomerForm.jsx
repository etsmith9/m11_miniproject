import { Component } from 'react';
import axios from 'axios';
import { func, number } from 'prop-types';
import { Form, Button, Alert, Container, Modal } from 'react-bootstrap';

class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      error: null,
      errors: {},
      selectedCustomerId: null,
      isLoading: false,
      showSuccessModal: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    console.log(id);
    if (id) {
      this.fetchCustomerData(id);
    }
  }

  fetchCustomerData = (id) => {
    axios.get(`http://127.0.0.1:5000/customers/${id}`)
      .then(response => {
        const customerData = response.data;
        this.setState({
          name: customerData.name,
          email: customerData.email,
          phone: customerData.phone,
          selectedCustomerId: id,
        });
      })
      .catch(error => {
        console.error('Error fetching customer data:', error);
        this.setState({ error: 'Error fetching customer data' });
      });
  }

  
  componentDidUpdate(prevProps) {
    if (prevProps.customerId !== this.props.customerId) {
      this.setState({ selectedCustomerId: this.props.customerId });
      this.fetchCustomerData(this.props.customerId);

      if (this.props.customerId) {
        axios.get(`http://127.0.0.1:5000/customers/${this.props.customerId}`)
            .then(response => {
                const customerData = response.data;
                this.setState({
                name: customerData.name,
                email: customerData.email,
                phone: customerData.phone,
                });
            })
            .catch(error => {
                console.error('Error fetching customer data:', error);
            });
      }
    }
  }



  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    const { name, email, phone } = this.state;
    const errors = {};
    if (!name.trim()) errors.name = 'Name is required';
    if (!email.trim()) errors.email = 'Email is required';
    if (!phone.trim()) errors.phone = 'Phone is required';

    return errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validateForm();
    if (Object.keys(errors).length === 0) {
        this.setState({ isLoading: true, error: null });
        const customerData = {
            name: this.state.name.trim(),
            email: this.state.email.trim(),
            phone: this.state.phone.trim()
      };

      const apiUrl = this.state.selectedCustomerId
        ? `http://127.0.0.1:5000/customers/${selectedCustomerId}`
        : `http://127.0.0.1:5000/customers`;

      const httpMethod = this.state.selectedCustomerId ? axios.put : axios.post;

      httpMethod(apiUrl, customerData)
        .then(() => {
          this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {},
            selectedCustomerId: null,
            isLoading: false,
            showSuccessModal: true,
          });
        })
        .catch(error => {
          this.setState({ error: error.toString(), isLoading: false });
        });
    } else {
      this.setState({ errors });
    }
  };

      closeModal = () => {
        this.setState({ 
          showSuccessModal: false,
          name: '',
          email: '',
          phone: '',
          errors: {},
          selectedCustomerId: null,
          
         });
         this.props.navigate(`/customer`);
      }

  render() {
    const { name, email, phone, errors, error, isLoading, showSuccessModal } = this.state;


    return (
      <Container>
          {isLoading && <Alert variable='info'> Submitting customer data...</Alert>}
          {error && <Alert variable='danger' >Error submitting customer data: {error}</Alert>}

          <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId='formGroupName'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='text' name='name' value={name} onChange={this.handleChange} />
                  {errors.name && <div style={{color: 'red'}}>{errors.name}</div>}
              </Form.Group>
              
              <Form.Group controlId='formGroupEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='text' name='email' value={email} onChange={this.handleChange} />
                  {errors.email && <div style={{color: 'red'}}>{errors.email}</div>}
              </Form.Group>

              <Form.Group controlId='formGroupPhone'>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type='tel' name='phone' value={phone} onChange={this.handleChange} />
                  {errors.phone && <div style={{color: 'red'}}>{errors.phone}</div>}
              </Form.Group>

              <Button variant='primary' type='submit'>Submit</Button>

          </Form>


          <Modal show={showSuccessModal} onHide={this.closeModal}>

            <Modal.Header closeButton>
              <Modal.Title>Success</Modal.Title>
            </Modal.Header>
            <Modal.Body>Customer data submitted successfully! {this.state.selectedCustomerId ? 'updated' : 'added'}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
      </Container>
    );
  }
}

CustomerForm.propTypes = {
  customerId: number,
  onUpdateCustomerList: func,
};

export default CustomerForm;
