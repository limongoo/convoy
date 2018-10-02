import React from 'react';
import './image.css';

const Image = props =>
  <li className="image-li">
    <a href={props.link} target="_blank" rel="author noopener noreferrer">
      <img src={props.url} alt={props.name} />
    </a>
    <p>
			Photo by 
      <a href={props.user} target="_blank" rel="author noopener noreferrer"> {props.name}</a>
      <a href={props.link} target="_blank" rel="author noopener noreferrer"> See on Unsplash</a>
    </p>
  </li>;

export default Image;