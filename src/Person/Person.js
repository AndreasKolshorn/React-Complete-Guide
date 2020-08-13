import React from 'react';

const person = (props) => {    // convention use props
    
    return (
    <div>
        <p>I'm {props.name} Person I'm  {props.age}  {Math.floor(Math.random()*30)} years old!</p>
        <p>{props.children}</p>  
    </div> 
    )
    
}

export default person
