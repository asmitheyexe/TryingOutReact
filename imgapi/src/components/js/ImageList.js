import React from 'react';

const ImageList = (props) => {
    const imagesMapping = props.images.map( ({description, id, urls}) =>{
       return (
            <div key={id}>
                <img alt={description} src={urls.regular} /> 
            </div>
       )   
    });
    return imagesMapping;
};

export default ImageList;