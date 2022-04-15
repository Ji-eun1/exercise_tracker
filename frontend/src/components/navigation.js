import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const naviStyle = {
        color: '#eee',
        textDecoration: 'none',
        margin: '0 10'
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">ExerciseTracker</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to='/' style={naviStyle}>Exercises</Link>
                    <Link to="/create" style={naviStyle}>Create</Link>
                    <Link to="/register" style={naviStyle}>Register</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;
