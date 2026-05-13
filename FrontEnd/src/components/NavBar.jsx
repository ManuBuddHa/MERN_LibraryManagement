import styled from "styled-components";
import { Link } from "react-router-dom";
const NavBar = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
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
`;
const List = styled.li`
    color: #ffffff;
    font-size: 1.2rem;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #4CAF50;
      transform: scale(1.1);
      font-weight: 500;
      transition: all 0.3s ease;
    }
`;

const Login = styled.button`
    background-color: #4CAF50;
    font-family: Montserrat;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 8px;
    &:hover {
      background-color: #12cd1b;
      transform: scale(1.1);
      box-shadow: 0 0px 4px rgba(255, 255, 255, 0.2);
      font-weight: 500;
      transition: all 0.3s ease;
    }
`;

const Signup = styled.button`
    background-color: #008CBA;
    color: white;
    font-family: Montserrat;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 8px;
    &:hover {
      background-color: #09c0ed;
      transform: scale(1.1);
      box-shadow: 0 0px 4px rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
    }
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
        <Link to="/"><List>Home</List></Link>
        <Link to="/books"><List>Books</List></Link>
        {/* View All Books */}
        <Link to="/members"><List>Members</List></Link>
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