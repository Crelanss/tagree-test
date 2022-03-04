import {keyframes} from 'styled-components'

export const leftBlockAnimations = {
    buttonAppear: keyframes`
      from {
        transform: scaleY(0);
      }

      to {
        transform: scaleY(1);
      }
    `,
    buttonDisappear: keyframes`
      from {
        transform: scaleY(1);
      }

      to {
        transform: scaleY(0);
      }
    `,
    fromLeftToCenter: keyframes`
      from {
        transform: translateX(-100%);
      }

      to {
        transform: translateX(0);
      }
    `,
    fromCenterToRight: keyframes`
      from {
        transform: translateX(0%);
      }

      to {
        transform: translateX(100%);
      }
    `,
    fromCenterToLeft: keyframes`
      from {
        transform: translateX(0%);
      }

      to {
        transform: translateX(-100%);
      }
    `,
    fromLeftToRight: keyframes`
      from {
        transform: translateX(-100%);
      }

      50% {
        transform: translateX(0);
      }

      to {
        transform: translateX(105%);
      }
    `,
    fromLeftToRightGemini: keyframes`
      from {
        transform: translateX(-101%);
      }

      50% {
        transform: translateX(0);
      }

      to {
        transform: translateX(105%);
      }
    `,
    headerTextAppear: keyframes`
      from {
        display: block;
        visibility: hidden;
      }

      50% {
        display: block;
        visibility: hidden;
      }

      to {
        display: block;
        visibility: visible;
      }
    `,
    headerTextDisappear: keyframes`
      from {
        display: block;
        visibility: visible;
      }

      50% {
        display: block;
        visibility: hidden;
      }

      to {
        display: block;
        visibility: hidden;
      }
    `,
    fromRightToCenter: keyframes`
      from {
        transform: translateX(100%);
      }
      
      to {
        transform: translateX(0);
      }
    `

}

export const rightBlockAnimations = {
    moveImageToRight: (width: number, marginRight: number) => keyframes`
      from {
        transform: translateX(0);
      }
      
      to {
        transform: translateX(${width + marginRight}px);
        visibility: hidden;
      }
    `,
    moveImageToLeft: (width: number, marginRight: number) => keyframes`
      from {
        transform: translateX(${width + marginRight}px);
        visibility: hidden;
      }
      
      to {
        transform: translateX(0);
        visibility: visible;
      }
    `,
    moveTextToLeft: keyframes`
      from {
        transform: translateX(0);
      }
      
      to {
        transform: translateX(-100%);
      }
    `,

    moveTextToRight: keyframes`
      from {
        transform: translateX(-100%);
      }
      
      to {
        transform: translateX(0);
      }
    `,

    progressOrangeLine: keyframes`
      from {
        transform: translateX(-100%);
      }

      90% {
        transform: translateX(0%);
      }

      to {
        transform: translateX(100%);
      }
    `,
    onSlideSwapOrangeLine: keyframes`
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(100%);
      }
    `
}
