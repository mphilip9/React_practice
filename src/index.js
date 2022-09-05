// This index.js file is the first file to execute out of all your src files

//Import react DOM object from the react-dom library
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

  //Go check out the index.html file in the public dir and notice the empty div with an Id of root.
  //The createRoot method tells React to make this div the main place from which to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

  //This tells react WHAT to render in that div
root.render(<App />);
