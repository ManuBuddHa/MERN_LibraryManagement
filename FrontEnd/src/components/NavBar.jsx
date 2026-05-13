import styled from "styled-components";
import { Link } from "react-router-dom";
const NavBar = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Heading = styled.h1`
    color: #ffffff;
    font-size: 2rem;
    margin: 0;
    font-family: Montserrat,Playfair Display;
`;
const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
    width: 40%;
    
    font-family: Montserrat;
    font-weight: 200;
    justify-content: space-around;
    li a {
        color: #ffffff;
        text-decoration: none;
        font-size: 1.2rem;
    }
`;
const Login = styled.button`
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 8px;
`;

const Signup = styled.button`
    background-color: #008CBA;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 8px;
`;

const Container = styled.div`
    display: flex;
    gap: 1rem;
`;

const NavBarComponent = () => {
  return (
    <NavBar>
      <Heading>Library Management System</Heading>
      <NavLinks>
        <Link to="/"><li>Home</li></Link>
        <Link to="/books"><li>Books</li></Link>
        {/* View All Books */}
        <Link to="/members"><li>Members</li></Link>
        {/* View All Members */}
      </NavLinks>
      <Container>
         <Link to="/login"> <Login >Login</Login></Link>
        <Link to="/signup"><Signup>Signup</Signup></Link>
      </Container>
    </NavBar>
  );
};

export default NavBarComponent;