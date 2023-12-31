import React, { useContext } from 'react'
import { Container, Nav, Navbar as NavbarComp } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from '../context/userContext'
import ImgDumbMerch from '../assets/DumbMerch.png'

export default function NavbarAdmin(props) {
  const [_, dispatch] = useContext(UserContext)

  let navigate = useNavigate()

  const logout = () => {
    dispatch({
      type: "LOGOUT"
    })
    navigate("/auth")
  }

  return (
    <NavbarComp expand="lg">
      <Container>
        <NavbarComp.Brand as={Link} to="/complain-admin">
          <img src={ImgDumbMerch} className="img-fluid" style={{ width: '60px', height: '60px' }} />
        </NavbarComp.Brand>
        <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
        <NavbarComp.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/complain-admin" className={props?.title == 'Complain admin' ? `text-navbar-active` : `text-navbar`}>Complain</Nav.Link>
            <Nav.Link as={Link} to="/category-admin" className={props?.title == 'Category admin' ? `text-navbar-active` : `text-navbar`}>Category</Nav.Link>
            <Nav.Link as={Link} to="/product-admin" className={props?.title == 'Product admin' ? `text-navbar-active` : `text-navbar`}>Product</Nav.Link>
            <Nav.Link onClick={logout} className="text-navbar">Logout</Nav.Link>
          </Nav>
        </NavbarComp.Collapse>
      </Container>
    </NavbarComp>
  )
}
