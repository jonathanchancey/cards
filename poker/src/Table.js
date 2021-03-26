import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap';
import { Stage, Layer, Rect, Circle } from 'react-konva';
import tableSVG from './assets/table.svg';
import styled from 'styled-components';


const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

    }

    &:hover {
        color: white;

    }

`;


export const Table = () => {
  return (
    <Styles>
      <img src={tableSVG} alt="My logo" />

      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect width={50} height={50} fill="red" />
          <Circle x={200} y={200} stroke="black" radius={50} />
          
        </Layer>
      </Stage>
    </Styles>
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas

    
    
    
  );
}