import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const OrderList = ({ customerId, onOrderSelect }) => {
    const [orders, setOrders] = useState([]);

    // useEffect(setup<function>, dependency[customerId - empty array])

    useEffect(() => {
        // Mimicking an API Call
        if (customerId) {
            const fetchedOrders = [
                { id: 101, date: '2021-01-01' },
                { id: 102, date: '2021-02-15' },
            ];
            setOrders(fetchedOrders); // setting the empty array to fetched orders
        }
    }, [customerId]); // Fetch orders when customerId changes

    return (  
        <div className="order-list">
            <h3>Orders</h3>
            <ul>
                {orders.map(order => (  // mapping over orders array
                    <li key={order.id} onClick={() => onOrderSelect(order.id)}>
                        Order ID: {order.id}, Date: {order.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

OrderList.propTypes = {
    customerId: PropTypes.number.isRequired,
    onOrderSelect: PropTypes.func.isRequired,
}

export default OrderList;
