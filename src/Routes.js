import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import ProductPrep from "./Pages/ProductPrep/ProductPrep";
import Shipping from "./Pages/Shipping/Shipping";
import Delivered from "./Pages/Delivered/Delivered";
import ConfirmPurchase from "./Pages/ConfirmPurchase/ConfirmPurchase";
import AccountManage from "./Pages/AccountManage/AccountManage";
import ProductManage from "./Pages/ProductManage/ProductManage";
import ProductAdd from "./Pages/ProductAdd/ProductAdd";
import ProductEdit from "./Pages/ProductEdit/ProductEdit";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/productPrep" component={ProductPrep} />
          <Route exact path="/shipping" component={Shipping} />
          <Route exact path="/delivered" component={Delivered} />
          <Route exact path="/confirmPurchase" component={ConfirmPurchase} />
          <Route exact path="/productManage" component={ProductManage} />
          <Route exact path="/productAdd" component={ProductAdd} />
          <Route exact path="/productEdit" component={ProductEdit} />
          <Route exact path="/accountManage" component={AccountManage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
