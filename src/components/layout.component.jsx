import { Outlet, Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';

const Layout = () => {
  return (
    <>
        <NavBar bg="dark" variant="dark">
          <Container>

            <NavBar.Brand>
              <Link to="/" className="nav-link">
                Mathematical Relation
              </Link>
            </NavBar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to="/create-sequence" className="nav-link">
                  Create Sequence
                </Link>
              </Nav>
              <Nav>
                <Link to="/sequence-list" className="nav-link">
                  Sequence List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </NavBar>

      <Outlet />
    </>
  )
};

export default Layout;