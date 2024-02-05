import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import { BrowserRouter as Router } from 'react-router-dom';

const Body=styled.div`
  background-color: ${({theme})=>theme.bg};
  width:100%;
  height:100%;
  overflow-x:hidden;
  `;
const Wrapper=styled.div`
  background: linear-gradient(
    38.73deg,
    rgba(204, 0, 187, 0.15) 0%,
    rgba(201, 32, 184, 0) 50%
  ),
  linear-gradient(
    141.27deg,
    rgba(0, 70, 209, 0) 50%,
    rgba(0, 70, 20, 0.15) 100%
  );
  width: 100%;
  clippath: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
       <Navbar/>
       <Body>
        <Hero/>
        <Wrapper>
          <Skills/>
        </Wrapper>
        <Projects/>
        <Wrapper>
          <Education/>
        </Wrapper>
        
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
