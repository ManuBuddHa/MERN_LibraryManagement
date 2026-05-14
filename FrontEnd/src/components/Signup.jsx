import styled from "styled-components";
import img from '../images/SignupBG.jpg';
import NavBarComponent from './NavBar';

const BGimg = styled.div`
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    width: 100%;
    min-height: 100vh; /* Changed height to min-height for content growth */
    display: flex;
    align-items: center;
    justify-content: center; /* Fixed typo: jusify -> justify */
    padding: 2em 1em; /* Added responsive padding */
    box-sizing: border-box;
`;

const Container = styled.div`
    width: 100%;
    max-width: 500px; /* Instead of fixed 40%, use max-width */
    margin: auto;
    border: 2px solid #ffffff;
    border-radius: 12px;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    background-color: rgba(0, 0, 0, 0.7); 
    backdrop-filter: blur(5px); 
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    width: 100%; /* Take full width of Container */
    margin-top: 2em;
    margin-left: 2em;
    margin-right: 2em;
`;

const FormDiv = styled.div`
    display: flex;
    flex-direction: column; /* Stack vertically for better mobile scaling */
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    color: #ffffff;
    
    @media (min-width: 600px) {
        flex-direction: row; /* Side-by-side on larger screens */
        align-items: center;
        justify-content: space-between;
    }

    & label {
        font-size: 1rem;
        @media (min-width: 600px) {
            width: 35%;
        }
    }
`;

const Input = styled.input`
    padding: 0.5em;
    font-size: 1rem;
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid #0048ff;
    color: #ffffff;
    box-sizing: border-box;

    @media (min-width: 600px) {
        width: 65%;
    }

    &:focus {
        outline: none;
        border-bottom: 3px solid #0091ff;
        transition: all 0.3s ease;
    }
        &::placeholder {
        color: #ffffff3f;
        font-family: 'Montserrat', sans-serif;
    }
`;

const SignupBtn = styled.button`
    margin: 1em auto 0;
    padding: 0.8em;
    font-size: 1.1em;
    background-color: #2b8aaa;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
        background-color: #0091ff;
        box-shadow: 0 4px 12px rgba(0, 145, 255, 0.4);
    }
`;

function Signup() {
    return (
        <>
        <NavBarComponent />
        <BGimg>
            <Container>
                <u style={{ color: 'red' }}>
                <h1 style={{ color: 'white', fontSize: '3em', paddingBottom: '5px',fontFamily: 'Montserrat', fontWeight: '700' }}>
                    Signup
                </h1>
                </u>
                <Form>
                    <FormDiv>
                        <label htmlFor="name">Name : </label>
                        <Input type="text" id="name" placeholder="Name" />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="username">Username : </label>
                        <Input type="text" id="username" placeholder="Username" />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="email">Email :  </label>
                        <Input type="email" id="email" placeholder="Email" />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="phone">Phone : </label>
                        <Input type="tel" id="phone" placeholder="Phone" />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="password">Password : </label>
                        <Input type="password" id="password" placeholder="Password" />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="confirmPassword">Confirm Password :</label>
                        <Input type="password" id="confirmPassword" placeholder="Confirm Password" />
                    </FormDiv>
                    <SignupBtn type="submit">Sign Up</SignupBtn>
                </Form>
            </Container>
        </BGimg>
        </>
    );
}

export default Signup;