import React from 'react';
import {withRouter} from 'react-router-dom';  // higher order component, function takes a component as argument and returns a modiefied component.

import './menu-item.components.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (        // instead of pasing props (props) , then props. title,, we used this
            <div className= {`${size} menu-item`}  onClick={() => history.push(`${match.url}${linkUrl}`)} > 
                <div className="backgorund-image" style={{
                    backgroundImage:  `url(${imageUrl})` // we used this for mapping the images
                }} />
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
)

export default withRouter(MenuItem);