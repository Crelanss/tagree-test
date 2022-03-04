import React, {useEffect, useRef, useState} from 'react'
import styled, {css} from 'styled-components'

import rightArrow from '../../icons/arrow-right.svg'
import leftArrow from '../../icons/arrow-left.svg'
import {leftBlockAnimations, rightBlockAnimations} from '../../animations'
import {IImgDataToMove, ISlideContent} from '../../interfaces'


interface IProps {
    slides: ISlideContent[],
    slideNumbers: number[],
    setCurrentSlide: Function,
    slideSwappingAnimation: boolean
}

const moveImageToRight = (width: number, marginRight: number) => css`
  animation: ${rightBlockAnimations.moveImageToRight(width, marginRight)} 1s linear forwards;
`

const moveImageToLeft = (width: number, marginRight: number) => css`
  animation: ${rightBlockAnimations.moveImageToLeft(width, marginRight)} 1s linear forwards;
`

const moveTextToLeft = css`
  animation: ${rightBlockAnimations.moveTextToLeft} 1s linear forwards;
`

const moveTextToRight = css`
  animation: ${rightBlockAnimations.moveTextToRight} 1s linear forwards;
`

const progressOrangeLine = css`
  animation: ${rightBlockAnimations.progressOrangeLine} 5s linear forwards;
`

const onSlideSwapOrangeLine = css`
  animation: ${rightBlockAnimations.onSlideSwapOrangeLine} 1s linear forwards;
`

const fromCenterToRight = css`
  animation: ${leftBlockAnimations.fromCenterToRight} 1s linear forwards;
`

const fromRightToCenter = css`
  animation: ${leftBlockAnimations.fromRightToCenter} 1s linear forwards;
`

const Container = styled.div`
  height: 100%;
  width: 35%;
  background: #D28154;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 620px) {
    position: absolute;
    right: 0;
    background: transparent;
    width: 50%;
  }
`

const TechniqueNameContainer = styled.div<{ slideSwappingAnimation: boolean }>`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  
  span {
    ${props => props.slideSwappingAnimation ? moveTextToLeft : moveTextToRight}
    writing-mode: vertical-lr;
    color: white;
    font-family: BodoniBold, serif;
    font-size: 115px;
    letter-spacing: 10px;
    margin-left: 100px;
  }

  @media (max-width: 1150px) {
    span {
      font-size: 90px;
      padding-right: 20px;
      
    }
  }

  @media (max-width: 620px) {
    display: none;
  }
`

const ProgressBarContainer = styled.div`
  max-width: 334px;
  width: 200%;
  align-self: self-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  z-index: 10;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  background: white;
  position: relative;
  z-index: 10;
`

const ProgressBlock = styled.div`
  width: 100%;
  height: 15%;
  background: #F1EBE8;
  display: flex;
  position: relative;
  z-index: 10;
`

const ProgressLine = styled.div`
  height: 100%;
  width: 100%;
  background: #F1EBE8;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 10;
  overflow: hidden;
`

const OrangeSquareInLine = styled.div`
  width: 10%;
  height: 100%;
  background: orange;
`

const OrangeLineTimer = styled.div<{ isActive: number, lineNumber: number, slideSwappingAnimation: boolean }>`
  width: 100%;
  height: 100%;
  background: orange;
  position: absolute;
  ${props => props.lineNumber === props.isActive ? (props.slideSwappingAnimation === true ? onSlideSwapOrangeLine : progressOrangeLine) : ''}
  display: ${props => props.lineNumber === props.isActive ? 'block' : 'none'};

`

const ArrowsBlock = styled.div`
  width: 100%;
  height: 85%;
  background: #F1EBE8;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  padding-left: 30%;
  padding-right: 30%;
`

const Arrow = styled.div`
  &:hover {
    cursor: pointer;
    transform: scale(1.2, 1.2);
    transition: 0.2s ease-out;
  }

  img {
    height: 7px;
  }
`

const ImageContainer = styled.div<{ imgWidth: number, marginRight: number, slideSwappingAnimation: boolean }>`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 50%;
  left: -50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.slideSwappingAnimation ?
          moveImageToRight(props.imgWidth, props.marginRight)
          : moveImageToLeft(props.imgWidth, props.marginRight)}
  img {
    position: relative;
  }

  @media (max-width: 1150px) {
    img {
      height: 300px;
    }
  }

  @media (max-width: 620px) {
    img {
      left: 0; 
    }
  }
  
`

const SlideNumberTextContainer = styled.div<{ slideSwappingAnimation: boolean }>`
  height: 100px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  font-family: MontsBold, serif;
  align-items: flex-end;
  justify-content: space-between;
  margin-right: 15px;
  margin-bottom: 15px;
  overflow: hidden;
  position: relative;

  @media (max-width: 620px) {
    display: none;
  }

  h3 {
    writing-mode: vertical-lr;
    color: black;
    margin: 0;
    font-size: 40px;
    ${props => props.slideSwappingAnimation ? fromCenterToRight : fromRightToCenter}
  }

  div {
    width: 50px;
    height: 3px;
    background: #F1EBE8;
    position: absolute;
    top: 52%;
  }

  h5 {
    writing-mode: vertical-lr;
    color: white;
    margin: 0;
    font-size: 20px;
  }
`

const RightBlock: React.FC<IProps> = ({slides, slideNumbers, setCurrentSlide, slideSwappingAnimation}) => {
    const ref = useRef<HTMLImageElement>(null)

    const [imgDataToMove, setImgDataToMove] = useState<IImgDataToMove>({
        width: 0,
        marginRight: 0
    })

    useEffect(() => {
        document.onreadystatechange = () => {
            setImgDataToMove({
                width: ref.current!.scrollWidth,
                marginRight: document.documentElement.clientWidth - ref.current!.getBoundingClientRect().right
            })
        }

    }, [])

    return (
        <Container>
            <TechniqueNameContainer slideSwappingAnimation={slideSwappingAnimation}>
                <span>{slides[slideNumbers[0]].techniqueName}</span>
            </TechniqueNameContainer>
            <ImageContainer
                imgWidth={imgDataToMove.width}
                marginRight={imgDataToMove.marginRight}
                slideSwappingAnimation={slideSwappingAnimation}>
                <img src={slides[slideNumbers[0]].techniqueImg} ref={ref}/>
            </ImageContainer>
            <ProgressBarContainer>
                <SlideNumberTextContainer slideSwappingAnimation={slideSwappingAnimation}>
                    <h3>
                        {`0${slideNumbers[0] + 1}`}
                    </h3>
                    <div/>
                    <h5>
                        {`0${slides.length}`}
                    </h5>
                </SlideNumberTextContainer>
                <ProgressBar>
                    <ProgressBlock>
                        {slides.map((slide, key) => (
                            <ProgressLine key={key}>
                                <OrangeSquareInLine/>
                                <OrangeLineTimer
                                    key={key}
                                    isActive={slideNumbers[0]}
                                    lineNumber={key}
                                    slideSwappingAnimation={slideSwappingAnimation}>
                                </OrangeLineTimer>
                            </ProgressLine>
                        ))}
                    </ProgressBlock>
                    <ArrowsBlock>
                        <Arrow onClick={() => {
                            setCurrentSlide(slideNumbers[1])
                        }}>
                            <img src={leftArrow}/>
                        </Arrow>
                        <Arrow onClick={() => {
                            setCurrentSlide(slideNumbers[2])
                        }}>
                            <img src={rightArrow}/>
                        </Arrow>
                    </ArrowsBlock>
                </ProgressBar>
            </ProgressBarContainer>
        </Container>
    )
}

export default RightBlock
