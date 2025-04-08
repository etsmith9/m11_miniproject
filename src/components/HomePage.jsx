import { Form, Button, Alert, Container, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import hello from '../assets/hello.jpg';

// Task 1.1: add a button to the home page
// Task 1.2: add styling to home page

function HomePage() {
    return (
        <Card className="m-3">
            <Card.Body>
                <div className="homepage">  
                    <h1> Welcome to the E-Commerce App </h1>
                    <p>This is the place to find all your needs at one click.</p>
                    <Button variant='primary' type='submit'>Shop Now!</Button>
                    <Image src={hello} fluid className="mb-3" alt="hello" />
                </div>
            </Card.Body>
        </Card>
    );
}

export default HomePage;