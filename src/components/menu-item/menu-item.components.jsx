import React from 'react';
import './menu-item.components.scss';

const MenuItem = ({title, imageUrl, size}) => (        // instead of pasing props (props) , then props. title,, we used this
            <div className= {`${size} menu-item`}  > 
                <div className="backgorund-image" style={{
                    backgroundImage:  `url(${imageUrl})` // we used this for mapping the images
                }} />
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
)

export default MenuItem;