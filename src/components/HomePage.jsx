import { Form, Button, Alert, Container, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import hello from '../assets/hello.jpg';

function HomePage() {
    return (
        <Card className="m-3">
            <Card.Body>
                <div className="homepage">  
                    <h1> Welcome to the E-Commerce App </h1>
                    <p>This is the place to find all your needs at one click.</p>
                    <Image src={hello} fluid className="mb-3" alt="hello" />
                </div>
            </Card.Body>
        </Card>
    );
}

export default HomePage;