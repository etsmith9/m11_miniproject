import PropTypes from 'prop-types';
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Button, Alert, Container, Modal, ListGroup } from 'react-bootstrap';

class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            selectedCustomerId: null,
            error: null,
        };
    }

    componentDidMount() {
        this.fetchCustomers();
    }

    fetchCustomers = () => {
        axios.get('http://127.0.0.1:5000/customers')
            .then(response => {
                this.setState({ customers: response.data });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                this.setState({ error: 'Error fetching customer' });
            });
    };


    

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedCustomerId !== this.state.selectedCustomerId) {
            console.log(`New customer selected: ID ${this.state.selectedCustomerId}`);
        }
    }

    selectCustomer = (id) => {
        this.setState({ selectedCustomerId: id });
        if (this.props.onCustomerSelect) {
            this.props.onCustomerSelect(id);
        }
    }

    componentWillUnmount() {
        console.log('CustomerList component is being unmounted');
    }

    deleteCustomer = (customerId) => {
        axios.delete(`http://127.0.0.1:5000/customers/${customerId}`)
            .then(() => {
                this.fetchCustomers();
            })
            .catch(error => {
                console.error('Error deleting customer:', error);
                this.setState({ error: 'Error deleting customer' });
            });
    }

    render() {
        const { customers, error } = this.state;
        return (
            <Container>
                {error && <Alert variant="danger">{error}</Alert>}
                <h3 className='mt-3 mb-3 text-center'>Customer List</h3>
                <ListGroup>
                    {customers.map(customer => (
                        <ListGroup.Item key={customer.id} className="d-flex justify-content-between align-items-center shadow-sm p-3 mb-3 bg-white rounded">
                            <Link to={`/edit-customer/${customer.id}`} className='text-primary'>{customer.name}</Link>
                            <Button variant="danger" size='sm' onClick={() => this.deleteCustomer(customer.id)}>Delete</Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        );
    }
}

CustomerList.propTypes = {
    onCustomerSelect: PropTypes.func
};

export default CustomerList;
