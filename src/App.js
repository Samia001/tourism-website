import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home/Home";
import { Header, Footer } from "./components/Shared/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider";
import BookingReview from "./components/BookingReview/BookingReview";
import BookingProceed from "./components/BookingProceed/BookingProceed";
import MyOrders from "./components/MyOrders/MyOrders";
import AddService from "./components/AddService/AddService";
import ManageServices from "./components/ManageServices/ManageServices";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <BookingReview />
            </PrivateRoute>
            <PrivateRoute path="/my-orders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/add-service">
              <AddService />
            </PrivateRoute>

            <PrivateRoute path="/manage-services">
              <ManageServices />
            </PrivateRoute>

            <Route path="/booking">
              <BookingProceed />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
