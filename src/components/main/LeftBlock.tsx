import React from 'react'
import styled, {css} from 'styled-components'

import {leftBlockAnimations} from '../../animations'
import {ISlideContent} from '../../interfaces'

interface IProps {
    slides: ISlideContent[],
    slideNumbers: number[],
    slideSwappingAnimation: boolean
}

const headerTextDisappear = css`
  animation: ${leftBlockAnimations.headerTextDisappear} 1s linear forwards
`

const headerTextAppear = css`
  animation: ${leftBlockAnimations.headerTextAppear} 1s linear forwards
`

const fromLeftToRight = css`
  animation: ${leftBlockAnimations.fromLeftToRight} 1s linear forwards;
`

const fromLeftToRightGemini = css`
  animation: ${leftBlockAnimations.fromLeftToRightGemini} 1s linear forwards;
`

const fromCenterToLeft = css`
  animation: ${leftBlockAnimations.fromCenterToLeft} 1s linear forwards;
`

const fromLeftToCenter = css`
  animation: ${leftBlockAnimations.fromLeftToCenter} 1s linear forwards;
`

const buttonAppear = css`
  animation: ${leftBlockAnimations.buttonAppear} 1s linear forwards;
`

const buttonDisappear = css`
  animation: ${leftBlockAnimations.buttonDisappear} 1s linear forwards;
`

const Container = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  align-items: center;

  @media (max-width: 1150px) {
    align-items: normal;
  }

  @media (max-width: 620px) {
    width: 100%;
  }
`

const ContentContainer = styled.div`
  width: 60%;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media (max-width: 1150px) {
    margin-top: 150px;
    height: 400px;
    width: 70%;
  }

  @media (max-width: 620px) {
    width: 100%;
    height: 100%;
  }
`

const HeaderTextContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
`

const HeaderTextLine = styled.div<{ width: number, slideSwappingAnimation: boolean}>`
  width: ${props => `${props.width}%`};
  height: 50%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  h1 {
    font-size: 2.5em;
    font-family: BodoniBold, serif;
    ${props => props.slideSwappingAnimation ? headerTextDisappear : headerTextAppear};
    position: relative;
  }

  div {
    top: 0;
    height: 100%;
    width: 100%;
    ${props => props.slideSwappingAnimation ? fromLeftToRight : fromLeftToRightGemini};
    position: absolute;
    background: orange;
  }

  @media (max-width: 1150px) {
    &:first-child {
      width: 90%;
    }
  }

  @media (max-width: 620px) {
    height: 15%;
    width: 80%;
    &:first-child {
      width: 70%;
    }
    margin-left: 15%;
    
    h1 {
      font-size: 2em;
    }
  }
`

const PromoTextContainer = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding-top: 20px;

  @media (max-width: 1150px) {
    padding-top: 50px;
  }

  @media (max-width: 620px) {
    display: none;
  }
`

const OrangeLineContainer = styled.div`
  width: 10%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 7px;
  overflow: hidden;
`

const OrangeLine = styled.div<{slideSwappingAnimation: boolean}>`
  width: 100%;
  height: 3px;
  background: orange;
  ${props => props.slideSwappingAnimation ? fromCenterToLeft : fromLeftToCenter}
`

const PromoText = styled.div<{slideSwappingAnimation: boolean}>`
  width: 70%;
  height: 100%;
  color: #898989;
  margin-left: 10px;
  overflow: hidden;
  
  div {
    font-family: MontsRegular, serif;
    ${props => props.slideSwappingAnimation ? fromCenterToLeft : fromLeftToCenter}
  }
`

const KnowMoreContainer = styled.div`
  width:100%;
  height: 20%;
  box-sizing: border-box;
  padding-top: 5%;
  padding-left: 10%;

  @media (max-width: 620px) {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    padding: 0;
  }
`

const KnowMoreButton = styled.div<{slideSwappingAnimation: boolean}>`
  width: 200px;
  height: 40px;
  margin-left: 10px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  font-family: MontsBold, serif;
  color: white;
  overflow: hidden;
  ${props => props.slideSwappingAnimation ? buttonDisappear : buttonAppear};
  
  &:hover {
    cursor: pointer;
    
    div {
      &:first-child {
        animation: ${leftBlockAnimations.fromLeftToCenter} 0.5s linear forwards;
      }
      &:last-child {
        animation: ${leftBlockAnimations.fromLeftToCenter} 0.5s linear forwards;
      }
    }
  }
  
  p {
    position: relative;
    z-index: 3;
  }

  @media (max-width: 620px) {
    margin-left: auto;
    margin-right: auto;

  }
  
`

const ButtonSliderLine = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 50%;
  background: orange;
  
  &:first-child {
    top: 0;
    animation: ${leftBlockAnimations.fromCenterToRight} 0.5s linear forwards;
  }
  &:last-child {
    top: 50%;
    animation: ${leftBlockAnimations.fromCenterToRight} 0.5s linear forwards;
  }
`

const LeftBlock: React.FC<IProps> = ({slides, slideNumbers, slideSwappingAnimation}) => {

    return (
        <Container>
            <ContentContainer>
                <HeaderTextContainer>
                    <HeaderTextLine width={85} slideSwappingAnimation={slideSwappingAnimation}>
                        <h1>
                            {slides[slideNumbers[0]].headerTextFirstLine}
                        </h1>
                        <div/>
                    </HeaderTextLine>
                    <HeaderTextLine width={100} slideSwappingAnimation={slideSwappingAnimation}>
                        <h1>
                            {slides[slideNumbers[0]].headerTextSecondLine}
                        </h1>
                        <div/>
                    </HeaderTextLine>
                </HeaderTextContainer>
                <PromoTextContainer>
                    <OrangeLineContainer>
                        <OrangeLine slideSwappingAnimation={slideSwappingAnimation}/>
                    </OrangeLineContainer>
                    <PromoText slideSwappingAnimation={slideSwappingAnimation}>
                        <div>{slides[slideNumbers[0]].promoText}</div>
                    </PromoText>
                </PromoTextContainer>
                <KnowMoreContainer>
                    <KnowMoreButton slideSwappingAnimation={slideSwappingAnimation}>
                        <ButtonSliderLine/>
                        <p>УЗНАТЬ БОЛЬШЕ</p>
                        <ButtonSliderLine/>
                    </KnowMoreButton>
                </KnowMoreContainer>
            </ContentContainer>
        </Container>
    )
}

export default LeftBlock
