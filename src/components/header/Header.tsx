import React, {useState} from 'react'
import styled from 'styled-components'

import logo from '../../icons/logo.svg'
import gps from '../../icons/gps-navigator.png'
import loupe from '../../icons/loupe.png'
import rank from '../../icons/rank.png'
import heart from '../../icons/heart.png'
import menu from '../../icons/menu.png'

const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  padding-left: 20px;
  align-items: center;
  justify-content: space-between;
  background: none;
  box-sizing: border-box;
  position: relative;
  z-index: 100;

  @media (max-width: 620px) {
    height: 50px;
  }
`

const HeaderLeft = styled.div`
  height: 35px;
  width: 1047px;
  display: flex;
  justify-content: space-between;

  img {
    height: 100%;
  }

  @media (max-width: 1150px) {
    width: 300px;
  }
`

const Links = styled.div`
  height: 100%;
  width: 80%;

  ul {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
  }

  @media (max-width: 1150px) {
    display: none;
  }
`

const Link = styled.li`
  height: 17px;
  font-family: MontsBold, serif;
  font-size: 15px;

  &:hover {
    color: #898989;
    cursor: pointer;
  }
`

const HeaderRight = styled.div`
  width: 334px;
  height: 100%;
  background: gray;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1150px) {
    display: none;
  }
`

const BurgerMenu = styled.div`
  width: 90px;
  height: 90px;
  background: gray;
  margin-right: 0;
  
  display: none;
  
  img {
    height: 50%;
  }

  @media (max-width: 1150px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 620px) {
    width: 60px;
    height: 60px;
  }
`

const OpenedBurger = styled.div<{isOpen: boolean}>`
  position: absolute;
  top: 95px;
  right: 0;
  background: gray;
  height: 300px;
  width: 200px;
  border: 1px solid black;
  display: ${props => props.isOpen ? 'block' : 'none'};
`

const RightButtons = styled.div`
  height: 20px;
  font-family: MontsRegular, serif;
  font-size: 15px;
  color: white;
  display: flex;
  align-items: center;

  img {
    height: 100%;
  }
`


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <Container>
            <HeaderLeft>
                <img src={logo}/>
                <Links>
                    <ul>
                        <Link>КАТАЛОГ</Link>
                        <Link>STIHL</Link>
                        <Link>AKKU</Link>
                        <Link>АКЦИИ</Link>
                        <Link>ПОИСК ДИЛЕРА</Link>
                        <Link>НОВОСТИ</Link>
                        <Link>О НАС</Link>
                        <Link>КОНТАКТЫ</Link>
                    </ul>
                </Links>
            </HeaderLeft>
            <HeaderRight>
                <RightButtons>МОСКВА <img src={gps}/></RightButtons>
                <RightButtons><img src={loupe}/></RightButtons>
                <RightButtons><img src={heart}/></RightButtons>
                <RightButtons><img src={rank}/></RightButtons>
            </HeaderRight>
            <BurgerMenu onClick={() => {
                setIsOpen(!isOpen)
            }}>
                <img src={menu}></img>
            </BurgerMenu>
            <OpenedBurger isOpen={isOpen}>
                <ul>
                    <li>Some list items</li>
                    <li>Some list items</li>
                    <li>Some list items</li>
                    <li>Some list items</li>
                </ul>
            </OpenedBurger>
        </Container>
    )
}

export default Header
