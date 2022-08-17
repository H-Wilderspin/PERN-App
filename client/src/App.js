import { Fragment } from 'react'

import './App.css';

// UI components
import NewCatForm from './UI/NewCatForm';
import NewPostForm from './UI/NewPostForm';
import NewUserForm from './UI/NewUserForm';
import ViewPosts from './UI/ViewPosts';

function App() {
  return (
    <Fragment>
      <header className="App-header">
        <ViewPosts />
        <NewUserForm />
        <NewCatForm />
        <NewPostForm />
      </header>
    </Fragment>
  );
}

export default App;
