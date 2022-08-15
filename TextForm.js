import React, { useState } from 'react';


export default function TextForm(props) {
    
    const handleupCick = () =>{
        console.log("upper case clicked", + text);
        let newText=  text.toUpperCase();
        setText(newText);
    }
  
    const handleonChange =(event) =>{
        console.log("upper case clicked");
        setText (event.target.value);
      
       

        
    }
    const [text, setText] = useState('Enter your  text 2');
  return (
    <div>
    <h1>{props.heading}</h1>
   
<div className="mb-3">
  <textarea className="form-control" value = {text} onChange={handleonChange} id="myBox" rows="8"></textarea>
</div>

<button type="button" className="btn btn-primary" onClick={handleupCick} >Convert to UpperCase</button>

    </div>
  )
}
