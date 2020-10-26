import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";
import UserList from "./components/UserList";

function Home() {
  return (
    <Layout>
      <SignIn />
    </Layout>
  );
}
function Test1() {
  return (
    <Layout>
      <SignUp />
    </Layout>
  );
}
function Test2() {
  return (
    <Layout>
      <UserList />
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/test1" exact={true} component={Test1} />
      <Route path="/test2" exact={true} component={Test2} />
      {/* <Route path="/test" exact={true} component={Test} />
      <Route path="/login" component={SignIn} />
      <Route path="/join" component={SignUp} />
      <Route path="/sticky-footer" component={StickyFooter} /> */}
    </BrowserRouter>
  );
}

export default App;
