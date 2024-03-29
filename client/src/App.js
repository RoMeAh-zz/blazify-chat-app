import React from 'react';

import SignUp from './components/SignUp/SignUp';
import RoomCreate from './components/RoomCreate/RoomCreate';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={SignUp} />
      <Route path="/roomcreate" component={RoomCreate} />
      <Route path="/join" component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
