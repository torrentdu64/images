import React from 'react';
import ImageDetail from './image_detail';

const IMAGEs = [
    {title: 'pen', link: 'https://dummyimage.com/600x400/'},
    {title: 'pine pee', link: 'https://dummyimage.com/600x400/'},
    {title: 'piwi', link: 'https://dummyimage.com/600x400/'}
];


const ImageList = ( ) => {
  return (
    <ul>
    <ImageDetail />
    </ul>
    );
};


export default ImageList;
