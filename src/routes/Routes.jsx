import { Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "./home/Home";
import Shifokorlar from "./shifokorlar/Shifokorlar";
import Bulimlar from "./bulimlar/Bulimlar";
import Yangiliklar from "./yangiliklar/Yangiliklar";
import Qvp from "./qvp/Qvp";
import Aloqa from "./aloqa/Aloqa";
import Ish from "./ish/Ish";
const Routes = () => {
  return (
    <>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/shifokorlar">
        <Shifokorlar />
      </Route>
      <Route path="/bulimlar">
        <Bulimlar />
      </Route>
      <Route path="/yangiliklar">
        <Yangiliklar />
      </Route>
      <Route path="/ish">
        <Ish />
      </Route>
      <Route path="/qvp">
        <Qvp />
      </Route>
      <Route path="/aloqa">
        <Aloqa />
      </Route>
      <Footer />
    </>
  );
};

export default Routes;
