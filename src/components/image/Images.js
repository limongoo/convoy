import React from 'react';
import Image from './Image';
import ImageError from './ImageError';
import './image.css';

const Images = props => {
  const results = props.data;
  let img;
  if(results.length > 0) {
    img = results.map(img =>
      <Image
        link={img.links.html}
        key={img.id}
        name={img.user.name}
        url={img.urls.small}
        user={img.user.links.html}
        userProfile={img.user.profile_image.small}
      />
    );
  } else {
    img = <ImageError />;
  }

  return (
    <ul className="image-ul">
      {img}
    </ul>
  );
};

export default Images;