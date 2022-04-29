import { Navbar,Container,Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">cahayoyo</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#javascript">JAVASCRIPT</Nav.Link>
                        <Nav.Link href="#reactjs">REACTJS</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
        
    )
}

export default NavigationBar