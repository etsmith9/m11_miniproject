import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import notfound from '../assets/notfound.jpg';

// Question 2, Improving NotFound Component w react-bootstrap
// color scheme, structure content with grid, add image, enhance navigation with navlink

function NotFound() {
    const navigate = useNavigate();
  
    return (
      <Container className="text-center mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Image src={notfound} fluid className="mb-4" alt="Page Not Found" />
            <h1 className="text-danger">404 - Page Not Found</h1>
            <p className="text-muted">
              Oops! The page you're looking for doesn't exist.
            </p>
            <Button variant="primary" onClick={() => navigate('/')}>
              Go to Homepage
            </Button>
          </Col>
        </Row>
      </Container>
    );
}
  

export default NotFound;
