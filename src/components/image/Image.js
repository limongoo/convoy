import React from 'react';

const Image = props =>
  <li>
    <a href={props.link}>
      <img src={props.url} alt={props.name} />
    </a>
    <p>
			Photo by
      <a href={props.user}>{props.name}</a>
      <a href={props.link}> See on Unsplash</a>
    </p>
  </li>;

export default Image;