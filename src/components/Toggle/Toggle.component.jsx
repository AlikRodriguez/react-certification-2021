import React from 'react';
import styled from 'styled-components'

const Slider = styled.label`
  display:flex;
  position:relative;
  align-items: center;
  width: 40px;
  height: 1em;
  margin: auto 0;
input {
  opacity: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .2s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1em;
  width: 1em;
  left: 4px;
  background-color: white;
  transition: .2s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 13px;
}

.slider.round:before {
  border-radius: 50%;
} 
`



const Toggle = () => {

  const changeTheme = () =>{
    console.log('clicked')
  }

  return ( 
    <Slider> 
      <input onClick={changeTheme}type="checkbox" />
      <span className="slider round" />
    </Slider> 
  )


}

export default Toggle;
