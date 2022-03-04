import React from 'react'
import styled from 'styled-components'

import Header from './components/header/Header'
import Main from './components/main/Main'

const Container = styled.div`
  height: 100%;
  width: 100%;
`

const App: React.FC = () => {

    return (
        <Container>
            <Header/>
            <Main/>
        </Container>
    )
}

export default App;
