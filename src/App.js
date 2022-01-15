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
    <div style={{width: '50%', backgroundColor: 'lightblue', margin: '0px auto'}} className="p-4">
      <h2>Employee Management</h2>
      <div>Open Book Assignment Submitted By Raj Keshwani </div>
      <div className="mt-4">
        <BrowserRouter>
          <NavLink to="create" activeClassName="active-tab"><button type="button" class="btn btn-primary mr-3">Create</button></NavLink>
          <NavLink to="read" activeClassName="active-tab"><button type="button" class="btn btn-primary mr-3">Read</button></NavLink>
          <NavLink to="update" activeClassName="active-tab"><button type="button" class="btn btn-primary mr-3">Update</button></NavLink>
          <NavLink to="delete" activeClassName="active-tab"><button type="button" class="btn btn-primary mr-3">Delete</button></NavLink>

          <hr style={{border: '#000 solid 1px'}} />

          <Switch>
            <Route path="/create" exact component={CreateComp} />
            <Route path="/read" exact component={ReadComp} />
            <Route path="/update" exact component={UpdateComp} />
            <Route path="/delete" exact component={DeleteComp} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;


//render(<App />, document.querySelector('#app'));
