import styled from "styled-components";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    background-color: #e1e1e1;
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
`;



function Signup() {
  return (
    <Container>
        <u style={{ color: 'red' }}><h1 style={{ fontFamily: 'Montserrat', fontSize: '3em', color: 'black', textAlign:'center' }}>Signup</h1></u>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1em', width: '60%', margin: '2em' }}>
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
            <input type="password" id="confirmPassword" placeholder="Confirm Password" style={{ padding: '0.5em', fontSize: '1.2em', width: '120%' }} />
            </FormDiv>
            <button type="submit" style={{ margin: '1em 0', padding: '0.5em', fontSize: '1.2em', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Sign Up</button>
        </form>
    </Container>
  )
}

export default Signup