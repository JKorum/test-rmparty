import React, { FC } from 'react'
import styled from 'styled-components'

interface SSpinnerProps {
  className?: string
}

const Spinner: FC<SSpinnerProps> = ({ className }) => (
  <div className={className}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export const SSpinner = styled(Spinner)`
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 60px;
  height: 60px;
  & div {
    position: absolute;
    width: 44px;
    height: 44px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #dadada transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
