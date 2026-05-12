import styled from "styled-components";
import img from '../images/login.jpg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    
    box-shadow: 0 0 12px rgba(0, 0, 0,0.5);
    margin: 2em auto;
    padding: 2em 0;
`;
const FormDiv = styled.div`
    display: flex;
    align-items: center;
    font-family: Montserrat;
    font-size: 1.2em;
    justify-content: space-between;
    width: 100%;
    text-shadow: 2px 2px 6px black;
    color: white;
    font-weight: 500;
`;
function Login() {
    return (
        <div>
            <Container>
                
                    <u style={{ color: 'red' }}><h1 className="heading">Login</h1></u>
                    <form>
                        <FormDiv>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" placeholder="Username" style={{ padding: '0.5em', fontSize: '1.2em', width: '80%' }} />
                        </FormDiv>
                        <FormDiv>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" placeholder="Password" style={{ padding: '0.5em', fontSize: '1.2em', width: '80%' }} />
                        </FormDiv>
                        <FormDiv>
                            <button type="submit" className="submitBtn">Login</button>
                        </FormDiv>
                    </form>
            
            </Container>
        </div>
    )
}

export default Login