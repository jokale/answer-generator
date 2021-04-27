import './App.css';
import Input from './Components/Input';

function App() {
  return (
    <div className="App">
      <h1>Answer Generator 	&copy;</h1>
      <p>You have a burning question you need answering, use a random generator to get your answer instead of asking a human being.<br></br> making life easier via the internet.</p>
 
      <Input/>
      <footer>
              <h6 className="terms">Ask a question at your own discretion , I can't be held liable if you ask a dumb question and it says yes and you actually <br></br>go do it</h6>

      </footer>
      <h6 className="trademark">Joanna E. Websites &copy;</h6>
    </div>
  );
}

export default App;
