import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const linkStyle = {
        color: '#eee',
        textDecoration: 'none',
        margin: '0 10px'
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">ExerciseTracker</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to='/' style={linkStyle}>Exercises</Link>
                    <Link to="/create" style={linkStyle}>Create</Link>
                    <Link to="/register" style={linkStyle}>Register</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;
