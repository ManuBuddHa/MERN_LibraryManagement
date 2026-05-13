import styled from "styled-components";
import img from '../images/SignupBG.jpg'

const BGimg = styled.div`
    background-image: url(${img});
    background-position: center bottom;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const Container = styled.div`
    width: 30%;
    margin: auto;
    border: 2px solid #ffffff;
    border-radius: 12px;
    box-shadow: 0 0 12px rgba(255, 255, 255,0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 90%;
    margin: 3em auto;
    `;
const FormDiv = styled.div`
    display: flex;
    align-items: center;
    font-family: Montserrat;
    gap: 1em;
    font-size: 1.2em;
    justify-content: space-between;
    width: 100%;
    text-shadow: 2px 2px 6px black;
    color: #ffffff;
    font-weight: 500;
    margin: auto;
    & label {
        width: 25%;
        text-align: right;
    }
`;
const LoginBtn = styled.button`
    margin: 1em auto;
    padding: 0.5em;
    font-size: 1.2em;
    background-color: #2b8aaa;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 80%;
    font-family: Montserrat;
    font-weight: 600;
    &:hover{
        transform: scale(1.05);
        background-color: #0091ff;
        box-shadow: 0 0px 6px rgba(255, 255, 255, 0.3);
        transition: all 0.3s ease;
    }
`
const Input = styled.input`
    padding: 0.5em;
    font-size: 1.2em;
    width: 65%;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid #0048ff;
    color: #ffffff;
    &:focus {
        outline: none;
        border-bottom: 3px solid #0091ff;
        transition: all 0.3s ease;
    }
`;


function Login() {
    return (
        <BGimg>
            <Container>
                    <u style={{ color: 'red' }}><h1 className="heading">Login</h1></u>
                    <Form>
                        <FormDiv>
                            <label htmlFor="username">Username:</label>
                            <Input type="text" id="username" placeholder="Username" />
                        </FormDiv>
                        <FormDiv>
                            <label htmlFor="password">Password:</label>
                            <Input type="password" id="password" placeholder="Password" />
                        </FormDiv>
                        <FormDiv>
                            <LoginBtn type="submit">Login</LoginBtn>
                        </FormDiv>
                    </Form>
            </Container>
        </BGimg>
    )
}

export default Login