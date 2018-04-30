import React, { Component } from 'react'
import logo from './logo.svg'
import Styled, { keyframes, ThemeProvider } from 'styled-components'
import { theme1, theme2 } from './theme/injectGlobal'
import ThemeSelect from './components/ThemeSelect'
import Button from './components/Button'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`

const AppWrapper = Styled.div`
  text-align: center;
`

const AppLogo = Styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1s linear;
  }
`

const AppHeader = Styled.div`
  background-color: #222;
  height: 12rem;
  padding: 1rem;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.primary};
`

const AppTitle = Styled.h1`
  font-size: 1.5em;
`

const AppIntro = Styled.p`
  font-size: large;
`

const CodeWrapper = Styled.code`
  font-size: 1.3rem;
`

class App extends Component {

  state = {
    theme: theme1
  }

  handleThemeChange = e => {
    let theme = e.target.value
    theme === 'theme1' ? (theme = theme1) : (theme = theme2)
    this.setState({ theme })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme} >
        <AppWrapper >
          <AppHeader >
            <AppLogo src={logo} alt="logo" />
            <AppTitle >Welcome to React</AppTitle>
          </AppHeader>
          <AppIntro>
            To get started, edit <CodeWrapper>src/App.js</CodeWrapper> and save to reload.
        </AppIntro>
        <ThemeSelect handleThemeChange={this.handleThemeChange} />
        <Button primary>Hello Primary</Button>
        <Button >Hello </Button>
        </AppWrapper>
      </ThemeProvider >
    );
  }
}

export default App;
