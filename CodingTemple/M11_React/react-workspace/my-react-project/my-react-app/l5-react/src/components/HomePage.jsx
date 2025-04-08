import { Form, Button, Alert, Container, Modal } from 'react-bootstrap';

// Task 1.1: add a button to the home page
// Task 1.2: add styling to home page

function HomePage() {
    return (
        <div className="homepage">  
            <h1> Welcome to the E-Commerce App </h1>
            <p>This is the place to find all your needs at one click.</p>
            <Button variant='primary' type='submit'>Shop Now!</Button>
        </div>
    )
}

export default HomePage;