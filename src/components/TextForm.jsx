import {React,useState} from 'react'

export default function TextForm(props) {
const changeToLower = () => {
    try {
      var lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Converted to Lower Case","success");
    } catch (error) {
      setError(error);
    }
}
const changeToUpper = () => {
 try {
  var lowerText = text.toUpperCase();
  setText(lowerText);
  props.showAlert("Converted to Upper Case","success");
 } catch (error) {
   setError(error);
 }
}
const countWords = () => {
  try {
    var cnt = text.split(" ").length;
    setText(cnt);
    props.showAlert("Words Counted","success");
  } catch (error) {
    setError(error);
  }
}
const capitalText = () => {
   try {
    var out = text.charAt(0).toUpperCase()+text.slice(1);
    setText(out);
    props.showAlert("Input Capitalized","success");
   } catch (error) {
     setError(error);
   }
}
const onTextChange= (event) =>{
    setText(event.target.value);
}
const [text, setText] = useState('');
const [error, setError] = useState(null);
    return (
        <>
     
      <div className="container"  >
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Text to Perform Buttoned Actions</label>
        <textarea className="form-control" placeholder="Enter your input here:-" id="exampleFormControlTextarea1" rows="5" onChange={onTextChange} onError={error} value={text} style= {
        {
            backgroundColor : props.Mode === 'dark' ? 'grey' : 'white',
        color:props.Mode === 'dark' ? 'white' : 'black',
}
      }></textarea>
        <button type="button" className="btn btn-primary my-2"  onClick={changeToLower}>Change to LowerCase</button>
        <button type="button" className="btn btn-secondary mx-3 my-2" onClick={changeToUpper}>Change to UpperCase</button>
        <button type="button" className="btn btn-success my-2" onClick={countWords}>Count Words</button>
        <button type="button" className="btn btn-danger mx-3 my-2 " onClick= {capitalText}>Capital Case</button>
        
      </div>

      <div className="container" style= {
        {//backgroundColor : props.Mode === 'light' ? 'grey' : 'light',
        color:props.Mode === 'light' ? 'black' : 'white',
}
      }>
            <h2>Number of characters in your input are:</h2>
            <h1>{text.length}</h1>
          <h3>
              Preview of the entered Text is available here:
          </h3><br></br>
            <p>{text}</p>
      </div>
        </>
    )
}
