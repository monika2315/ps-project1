import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Components/mainPage'
import {MyProvider} from './Context/contextFile'

function App() {
  return (
    <div>
      <MyProvider>
        <MainPage />
      </MyProvider>
       
    </div>
  );
}

export default App;
