import styled from "styled-components";
import "../styles/signup.css"

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



function Signup() {
    return (
        <div className="bgImg">
            <div className="opacitydiv">
                <u style={{ color: 'red' }}><h1 className="heading">Signup</h1></u>
                <form>
                    <FormDiv>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder="Name" style={{ padding: '0.5em', fontSize: '1.2em', width: '80%' }} />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" placeholder="Username" style={{ padding: '0.5em', fontSize: '1.2em', width: '80%' }} />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Email" style={{ padding: '0.5em', fontSize: '1.2em', width: '80%' }} />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" placeholder="Phone" style={{ padding: '0.5em', fontSize: '1.2em', width: '80%' }} />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" placeholder="Password" style={{ padding: '0.5em', fontSize: '1.2em', width: '80%' }} />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" placeholder="Confirm Password" style={{ padding: '0.5em', fontSize: '1.2em', width: '80%' }} />
                    </FormDiv>
                    <button type="submit" className="submitBtn">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup