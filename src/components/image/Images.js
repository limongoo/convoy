import React from 'react';
import Image from './Image';
import ImageError from './ImageError';

const Images = props => {
  const results = props.data;
  let img;
  if(results.length > 0) {
    img = results.map(img =>
      <Image
        url={img.urls.thumb}
        user={img.user.links.html}
        name={img.user.name}
        link={img.links.html}
        key={img.id}
      />
    );
  } else {
    img = <ImageError />;
  }

  return (
    <ul>
      {img}
    </ul>
  );
};

export default Images;