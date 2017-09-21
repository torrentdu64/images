import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
    {title: 'pen', link: 'https://dummyimage.com/600x400/'},
    {title: 'pine pee', link: 'https://dummyimage.com/600x400/'},
    {title: 'piwi', link: 'https://dummyimage.com/600x400/'}
];


const ImageList = ( ) => {
const RenderedImages = IMAGES.map( (image) => {
    return <ImageDetail key={image.title} image={image} />;
});

  return (
    <ul className="media-list list-group">
    {RenderedImages}
    </ul>
    );
};


export default ImageList;
