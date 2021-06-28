import React from "react";
import styled, { keyframes } from 'styled-components'

export default function Name(){

  const reactName = "Yann_developper_Web_Junior_Story".split("");

  return <Wrapper>{reactName.map((item, index) => (
    <span key={index}>{item}</span>
  ))}</Wrapper>
}

const animation = keyframes`
0% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blu(10px); }
25% { opacity: 1; transform: translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blu(0px); }
75% { opacity: 1; transform: translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blu(0px); }
100% { opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blu(10px); }
`

const Wrapper = styled.span`
  display:inline-block;
 
 span{
   
    display:inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-filled-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1)
  }
  span:nth-child(1) {
    animation-delay:0.1s
  }
  span:nth-child(2) {
    animation-delay:0.2s
  }
  span:nth-child(3) {
    animation-delay:0.3s
  }
  span:nth-child(4) {
    animation-delay:0.4s
  }
  span:nth-child(5) {
    animation-delay:0.5s
  }
  span:nth-child(6) {
    animation-delay:0.6s
  }
  span:nth-child(7) {
    animation-delay:0.7s
  }
  span:nth-child(8) {
    animation-delay:0.8s
  }
  span:nth-child(9) {
    animation-delay:0.9s
  }
  span:nth-child(10) {
    animation-delay:1.0s
  }
  span:nth-child(11) {
    animation-delay:1.1s
  }
  span:nth-child(12) {
    animation-delay:1.2s
  }
  span:nth-child(13) {
    animation-delay:1.3s
  }
  span:nth-child(14) {
    animation-delay:1.4s
  }
  span:nth-child(15) {
    animation-delay:1.5s
  }
  span:nth-child(16) {
    animation-delay:1.6s
  }
  span:nth-child(17) {
    animation-delay:1.7s
  }
  span:nth-child(18) {
    animation-delay:1.8s
  }
  span:nth-child(19) {
    animation-delay:1.9s
  }
  span:nth-child(20) {
    animation-delay:2.0s
  }
  span:nth-child(21) {
    animation-delay:2.1s
  }
  span:nth-child(22) {
    animation-delay:2.2s
  }
  span:nth-child(23) {
    animation-delay:2.3s
  }
  span:nth-child(24) {
    animation-delay:2.4s
  }
  span:nth-child(25) {
    animation-delay:2.5s
  }
  span:nth-child(26) {
    animation-delay:2.6s
  } 
  span:nth-child(27) {
    animation-delay:2.7s
  } 
  span:nth-child(28) {
    animation-delay:2.8s
  } 
  span:nth-child(29) {
    animation-delay:2.9s
  } 
  span:nth-child(30) {
    animation-delay:3s
  } 
  span:nth-child(31) {
    animation-delay:3.1s
  } 
  span:nth-child(32) {
    animation-delay:3.2s
  } 
`
