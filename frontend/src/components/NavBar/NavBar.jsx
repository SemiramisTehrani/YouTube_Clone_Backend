// import React from "react";
// import { useContext } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import AuthContext from "../../context/AuthContext";
// import "./NavBar.css";
// const Navbar = () => {
//   const { logoutUser, user } = useContext(AuthContext);
//   const navigate = useNavigate();
//   return (
//     <div className="navBar">
//       <ul>
//         <li className="brand">
//           <Link to="/" style={{ textDecoration: "none", color: "white" }}>
//             <b>React/Django JWT</b>
//           </Link>
//         </li>
//         <li>
//           {user ? (
//             <button onClick={logoutUser}>Logout</button>
//           ) : (
//             <button onClick={() => navigate("/login")}>Login</button>
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// };

import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { Navbar, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">YouTube-ish</Navbar.Brand>

        <SearchBar
          search={props.search}
          setSearch={props.setSearch}
          getVideo={props.getVideo}
        />
        <Link to="loginform">
          <li>Login</li>
        </Link>
        <Button>Logout</Button> 
      </Container>
    </Navbar>

  
  );
};

export default NavBar;


