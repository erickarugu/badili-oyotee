import React from "react";
import { Container, Nav } from "react-bootstrap";
import { BootstrapNavbar, ProfileWrapper } from "./__styled__";

interface INavbarProps {
  cart: number[];
  favs: number[];
}
const Navbar: React.FC<INavbarProps> = ({ favs, cart }) => {
  return (
    <BootstrapNavbar className="mb-0 pb-0" bg="white" expand="lg">
      <Container fluid style={{ borderBottom: "1px solid var(--gray)" }}>
        <BootstrapNavbar.Brand href="#home">
          <img
            src={"./images/leaf_logo.png"}
            width="50"
            className="d-inline-block align-top"
            alt="Oyotee Logo"
          />
          <>OYOTEE</>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse
          className="text-center ms-md-5"
          id="basic-navbar-nav"
        >
          <Nav className="me-auto">
            <Nav.Link
              className="active font-weight-bolder mx-md-3 mx-3"
              href="#home"
            >
              Shop
            </Nav.Link>
            <Nav.Link className="mx-md-3 mx-3" href="#link">
              Plant Care
            </Nav.Link>
            <Nav.Link className="mx-md-3 mx-3" href="#link">
              Workshops
            </Nav.Link>
            <Nav.Link className="mx-md-3 mx-3" href="#link">
              Blogs
            </Nav.Link>
          </Nav>
          <ProfileWrapper className="profile d-flex align-items-center justify-content-evenly">
            <span className="profile__cart mx-3">
              <img
                src={"./icons/bag.png"}
                width="30"
                className="d-inline-block"
                alt="Bag"
              />
              <span className="counter text-white font-weight-bold">
                {cart.length}
              </span>
            </span>
            <span className="profile__heart cursor-pointer mx-3">
              <img
                src={"./icons/heart.png"}
                width="30"
                className="d-inline-block"
                alt="Heart"
              />
              <span className="counter text-white font-weight-bold">
                {favs.length}
              </span>
            </span>
            <span className="profile__avatar mx-3">
              <img
                src={"./images/user.jpg"}
                width="35"
                className="d-inline-block"
                alt="User"
              />
            </span>
          </ProfileWrapper>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
