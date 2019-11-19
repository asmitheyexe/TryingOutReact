import React from 'react';
import ImageCard from '../js/ImageCard';
import '../css/ImageList.css';

const ImageList = (props) => {
    const imagesMapping = props.images.map( (image) =>{
       return  <ImageCard key={image.id} image={image} /> 
            
       });
    return <div className="image-list">{imagesMapping}</div>;
};

export default ImageList;