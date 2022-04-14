import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">ExerciseTracker</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to='/'>Exercises</Link>
                    <Link to="/create">Create</Link>
                    <Link to="/register">Register</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;
