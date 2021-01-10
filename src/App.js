import {Route, Link} from 'react-router-dom';
import './App.css';

const Home = (props) => {
  return <h1>Home Component</h1>
};

/**
 * 
 * @param {*} props 
 * @function push
 * Description:
 *  Push a route onto the history stack.
 */
const About = (props) => {
  const {push} = props.history;
  return <>
    <h1>About Component</h1>
    <button onClick={() => push('/')}>Back</button>
    </>
};

const Contact = (props) => {
  return <h1>Contact Component</h1>
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />

      </header>
    </div>
  );
}

export default App;
