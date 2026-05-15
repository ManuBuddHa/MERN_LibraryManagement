import styled from 'styled-components';
import bgImg from '../images/homeBG.jpg';
import NavBarComponent from './NavBar';
const Container = styled.div`
    background-image: url(${bgImg});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: -1;
    `;

const Mask = styled.div`
    background-color: rgba(0,0,0, 0.3);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Quote = styled.div`
    background-color: #ffffffc2;
    border: 2px solid white;
    border-radius: 12px;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
    margin-top: 15vh;
    height: 40vh;
    width: 90vh;
    font-family: Share Tech;
    padding: 5px;
    display: flex;
    flex-direction: column;
    &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
        transform: scale(1.05);
        transition: all 0.6s ease;
    }
`
const BlockQuote = styled.blockquote`
    font-weight: 500;
    font-size: 1.5em;
    text-align: center;
    color: #142178dc;
`

const QuoteText = styled.p`
    text-align: center;
    font-size: 2em;
    padding: 10vh;
`;

const Hero = () => {
    return (
        <>
        <NavBarComponent />
        <Container>
            <Mask>
                <Quote>
                    <QuoteText>
                        “A <span style={{ color: 'red' }}>Library</span> is a map of human experience, drawn in ink and bound in <span style={{ color: 'red' }}>hope</span>.”
                    </QuoteText>
                    <BlockQuote>
                        — Eleanor Finch
                    </BlockQuote>
                </Quote>
            </Mask>
        </Container>
        </>
    )
}

export default Hero