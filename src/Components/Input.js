import React, { Component } from 'react';   


class Input extends Component {
    constructor(props) {
        super(props);
    this.state = {
        data: []
    }
}
          
    getAnswer = (e) => {
        e.preventDefault();
      fetch('https://yesno.wtf/api')
  .then(response => response.json())
  .then(yesdata =>
    this.setState({
        data: yesdata
      })
  )

    }

    resetState = () => {
        this.setState({data: " "})
        console.log('cleared the answer');
    }
    
    resetInput = () => {
        window.location.reload();
        };


    

    theReset = () => {
        this.resetState();
        this.resetInput();
        
    }



    render()
     {    

        return (
            <div>
                <br></br>
            
                <form>
                    <input required name="input"id="Input" placeholder="Ask a question">
                    </input>
                    <button className="submit"name="submitbtn"type="submit" onClick={this.getAnswer}>Ask away</button>
                </form>
                 <h1>{this.state.data.answer}</h1> <br></br>

                    <button className="newq" name ="newqbtn" onClick={this.theReset}>Ask another question</button>

            </div>
         );





    }


}
 
export default Input;


// import { useState } from "react";

// export default function Input() {
//   const [data, setData] = useState();

//   const getAnswer = (e) => {
//     e.preventDefault();
//     fetch("https://yesno.wtf/api")
//       .then((data) => data.json())
//       .then(setData);
//   };

//   const resetForm = () => {};

//   return (
//     <div>
//       <form>
//         <input name="input" id="Input" placeholder="Ask a question"></input>
//         <button type="submit" onClick={getAnswer}>
//           Ask away
//         </button>
//         <button onClick={resetForm}>Ask another question</button>
//       </form>
//       <h1>{data?.answer}</h1>
//     </div>
//   );
// }
