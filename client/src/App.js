import { Fragment } from 'react'

import './App.css';

// UI components
import NewCatForm from './UI/NewCatForm';

function App() {
  return (
    <Fragment>
      <header className="App-header">
        <NewCatForm />
      </header>
    </Fragment>
  );
}

export default App;
