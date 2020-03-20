import React from 'react'; // Import the Component component from React
import './App.css';
 
function Thumbnail(props) {
  return (
    <li className={props.aClass}>
        <a href={props.link}>
            <img src={props.image} width={props.width} height={props.height} alt={props.altText}/>
        </a>
    </li>
  );
}
 
export default Thumbnail;