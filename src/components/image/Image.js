import React from 'react';
import './image.css';

const Image = props =>
  
  <li className="image-li">
    <a href={props.link} target="_blank" rel="author noopener noreferrer">
      <img src={props.url} alt={props.name} />
    </a>
    <p className="image-description">
      <img className="user-profile" src={props.userProfile} alt={props.name}/>
      <span className="image-description-offset">
        <a href={props.user} target="_blank" rel="author noopener noreferrer">{props.name}</a> — 
        <a href={props.link} target="_blank" rel="author noopener noreferrer"> Unsplash</a>
      </span>
    </p>
  </li>;
  

export default Image;