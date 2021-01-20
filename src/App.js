import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
// import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    isColor: false,
  };
  componentDidMount() {
    document.addEventListener("scroll", () => {
      console.log(window.scrollY);
      this.navColorHandler();
    });
  }
  // FOR NAV COLOR
  navColorHandler = () => {
    let position = window.pageYOffset;
    console.log(position);
    if (position > 70) {
      console.log("i am position 70 above");
      this.setState({
        isColor: true,
      });
    } else {
      this.setState({
        isColor: false,
      });
    }
  };
  // // For Nav Color
  // const [navColor, setNavColor] = useState({
  //   isColor: false,
  // });

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     console.log(window.scrollY);
  //     let position = window.pageYOffset;
  //     console.log(position);
  //     if (position > 50) {
  //       console.log("I am at position above 50px");
  //       setNavColor({
  //         isColor: true,
  //       });
  //     } else {
  //       setNavColor({
  //         isColor: false,
  //       });
  //     }
  //   });
  // }, []);

  render() {
    return (
      <>
        <Navbar
          changeNavColor={this.navColorHandler}
          defNavColor={this.state.isColor}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/faq" component={FaqPage} />
          {/* <Route path="/contact" component={ContactPage} /> */}
          <Route component={ErrorPage} />
        </Switch>
      </>
    );
  }
}

export default App;
