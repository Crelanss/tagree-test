import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import LeftBlock from './LeftBlock'
import RightBlock from './RightBlock'
import {ISlideContent} from '../../interfaces'
import chainsaw from '../../images/promo-01.png'
import scythe from '../../images/promo-02.png'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  overflow: hidden;
`

const slides: ISlideContent[] = [
    {
        headerTextFirstLine: 'ВОЗЬМИ STIHL - ',
        headerTextSecondLine: 'ПОЧУВСТВУЙ МОЩЬ!',
        promoText: 'Единственное условие – регистрация продукта, которая  займет меньше минуты и будет сделана прямо в' +
            ' магазине в момент Вашей покупки!',
        techniqueName: 'БЕНЗОПИЛЫ',
        techniqueImg: chainsaw
    },
    {
        headerTextFirstLine: 'ВОЗЬМИ STIHL - ',
        headerTextSecondLine: 'ПОЧУВСТВУЙ МОЩЬ!',
        promoText: 'Промо-текст, почувствуй мощь.',
        techniqueName: 'МОТОКОСЫ',
        techniqueImg: scythe
    }
]

const Main: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [slideSwappingAnimation, setSlideSwappingAnimation] = useState<boolean>(false)

    useEffect(() => {
        const interval = setInterval(() => {
            animateSlideSwapping()
            setTimeout(() => {
                setCurrentSlide((current) => {
                    return current === slides.length - 1 ? 0 : current + 1
                })
            }, 2500)
        }, 4000)

        return () => clearInterval(interval)
    })

    const prevSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    const nextSlide = currentSlide === slides.length - 1? 0: currentSlide + 1

    const animateSlideSwapping = () => {
        setSlideSwappingAnimation(true)
        setTimeout(() => {
            setSlideSwappingAnimation(false)
        }, 2500)
    }

    const swapSlidesOnButton = (slideChosen: number) => {
        animateSlideSwapping()
        setTimeout(() => {
            setCurrentSlide(slideChosen)
        }, 2500)
    }

    return (
        <Container>
            <LeftBlock
                slides={slides}
                slideNumbers={[currentSlide, prevSlide, nextSlide]}
                slideSwappingAnimation={slideSwappingAnimation}/>
            <RightBlock
                slides={slides}
                slideNumbers={[currentSlide, prevSlide, nextSlide]}
                setCurrentSlide={swapSlidesOnButton}
                slideSwappingAnimation={slideSwappingAnimation}/>
        </Container>
    )
}

export default Main
