import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-family: Montserrat, sans-serif;
  font-size: 1.2rem;
    &:hover {
    color: #ff6347;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

`;

const Container = styled.div`
  display: flex;
  background-color: #000000;
  align-items: center;
  justify-content: space-between;
  padding: 0 2vw;
  position: fixed;
  width: 96vw;
  height: 12vh;
  top: 0;
  backdrop-filter: blur(10px);
`;

const AdminHeading = styled.h1`
  color: #fff;
  font-family: Montserrat, sans-serif;
`;

const LogoutButton = styled.button`
    background-color: #ff6347;
    color: #ffffff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
      background-color: #ff4500;
      transform: scale(1.1);
      box-shadow: 0 0px 6px rgb(211, 42, 12);
      border-radius: 8px;
      transition: all 0.3s ease;
    }
`;


const AdminNav = () => {
  return (
    <Container>
      <AdminHeading>Library Admin</AdminHeading>
      <StyledLink to="/adminhome">Dashboard</StyledLink>
      <StyledLink to="/admin/books">Books</StyledLink>
      <StyledLink to="/admin/members">Members</StyledLink>
      <StyledLink to="/"><LogoutButton>Logout</LogoutButton></StyledLink>
    </Container>
  );
};

export default AdminNav;