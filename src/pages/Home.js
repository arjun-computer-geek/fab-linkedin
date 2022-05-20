import React from 'react'
import styled from "styled-components"
import Header from '../components/header/Header'
import Container from '../components/styled-component/Container'

const Home = () => {
    return (
        <>
            <Header />
            <LandingPageContainer>
                <div>Home</div>
            </LandingPageContainer>
        </>
    )
}
const LandingPageContainer = styled(Container)`

`
export default Home