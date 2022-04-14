import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">ExerciseTracker</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Exercises</Nav.Link>
                    <Nav.Link href="/create">Create</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;
