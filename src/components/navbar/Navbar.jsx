import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from './Navbar.module.css'


const Navbar_ = () => {
    return (
        <Navbar fixed="top" className={styles.navbar}>
            <Container>
                <Navbar.Brand href="/">Rick&Morty</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/cards">Characters</Nav.Link>
                    <Nav.Link href="/locations">Locations</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navbar_;