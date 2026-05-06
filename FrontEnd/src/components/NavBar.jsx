import styled from "styled-components";

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
        <li><a href="#">Home</a></li>
        <li><a href="#">Books</a></li> 
        {/* View All Books */}
        <li><a href="#">Members</a></li>
        {/* View All Members */}
      </NavLinks>
      <Container>
        <Login onClick={()=>{
          console.log("Login Page")
        }}>Login</Login>
        <Signup onClick={()=>{
          console.log("SignUp Page")
        }}>Signup</Signup>
      </Container>
    </NavBar>
  );
};

export default NavBarComponent;