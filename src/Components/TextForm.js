import React,{useState} from 'react'

export default function TextForm(props) {

  const handleonChange=(event)=>
  {
    //console.log("handle on change");
    setText(event.target.value);
  }
  const handleUpChange=()=>
  {
    //console.log("handle on change");
   let newtext=Text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase","successs");
  }
  const handleLowChange=()=>
  {
    //console.log("handle on change");
   let newtext=Text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase","successs")
  }
  const handleClearChange=()=>
  {
    
   let newtext="";
    setText(newtext);
    const utterance = new SpeechSynthesisUtterance(Text)
    window.speechSynthesis.cancel(utterance)
    props.showAlert("Clearing the Text","successs")
  }
  const handleSpeakChange=()=>
  {
    
    const utterance = new SpeechSynthesisUtterance(Text)
    window.speechSynthesis.speak(utterance)
    props.showAlert("Audio Reading Enabled","successs") 
  //setText(newtext);
  }
  const handleCopyChange=()=>
  {
    let copyText = document.getElementById("Textarea");

  // Select the text field
  copyText.select();
   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  // Alert the copied text
  //alert("Copied the text: " + copyText.value);
  props.showAlert("Text has been copied","successs")
  //setText(newtext);
  }
  const handleSpaceChange=()=>
  {
let sentence = Text.replace(/\s+/g, ' ').trim()   
  setText(sentence);
  props.showAlert("Removed White Spaces","successs")
}
  

  const [Text, setText] = useState('');
  
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
<div className="mb-3"  >
    <h1>{props.heading}</h1>
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color
:props.mode==='dark'?'white':'black'}} value={Text} onChange={handleonChange} id="Textarea" rows="8"></textarea>
</div>
<button type="button" onClick={handleUpChange} className="btn btn-primary mx-2">Convert to Upper Case</button>
<button type="button" onClick={handleLowChange} className="btn btn-primary mx-2">Convert to Lower Case</button>
<button type="button" onClick={handleClearChange} className="btn btn-primary mx-2">Clear Text</button>
<button type="button" onClick={handleSpeakChange} className="btn btn-primary mx-2">Audio</button>
<button type="button" onClick={handleCopyChange} className="btn btn-primary mx-2">Copy Text</button>
<button type="button" onClick={handleSpaceChange} className="btn btn-primary mx-2">Remove White Spaces</button>


    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{Text.split(" ").length} Words {Text.length} Characters </p>
      <p>{0.008*Text.split(" ").length} Minutes Reading </p>
      <h2>Preview</h2>
      <p>{Text.length>0?Text:"Please Enter the Text in Above Box"}</p>
    </div>
    </>
  )
}
