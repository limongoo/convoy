import React from 'react';
import './image.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Image = props =>
  <ScrollAnimation animateIn='fadeIn'>
    <li className="image-li">
      <a href={props.link} target="_blank" rel="author noopener noreferrer">
        <img src={props.url} alt={props.name} />
      </a>
      <p className="image-description">
			Photo: 
        <a href={props.user} target="_blank" rel="author noopener noreferrer"> {props.name}</a> — 
        <a href={props.link} target="_blank" rel="author noopener noreferrer"> Unsplash</a>
      </p>
    </li>
  </ScrollAnimation>;

export default Image;