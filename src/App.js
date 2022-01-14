import React from 'react';
import { BrowserRouter, NavLink, Switch, Route, useParams } from "react-router-dom";
import CreateComp from "./components/Create";
import ReadComp from "./components/Read";
import UpdateComp from "./components/Update";
import DeleteComp from "./components/Delete";
import './App.css';

function Home1() {
  return <div>This is Home page</div>;
}
function About1() {
  return <div>This is about us page</div>;
}
function Contact() {
  const {id} = useParams();
  return <div>This is Contact page with id: {id}</div>;
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavLink to="">Create</NavLink>
        <NavLink to="read">Read</NavLink>
        <NavLink to="update">Update</NavLink>
        <NavLink to="delete">Delete</NavLink>

        <Switch>
          <Route path="/" exact component={CreateComp} />
          <Route path="/read" exact component={ReadComp} />
          <Route path="/update" exact component={UpdateComp} />
          <Route path="/delete" exact component={DeleteComp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;


//render(<App />, document.querySelector('#app'));
