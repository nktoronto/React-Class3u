import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hi from "./hi";
import MediaCard from "./mediacard";
import Gate from "./gate";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Hi name="Nusrat Khwaja" batch={35 - 1} />
    <MediaCard
      title="Impact photography"
      body=" ..... Drop in an ocean !! ......."
      pik="https://thumbs.dreamstime.com/b/water-drip-8331601.jpg"
    />
    <Gate isOpen={true} />
    
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();