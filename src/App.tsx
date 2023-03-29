import "./App.css";
import { Card } from "./pages/card";
import { Contact } from "./pages/contact";
import { CopyRight } from "./pages/copyright";
import { Entertainment } from "./pages/entertainment";
import { Home } from "./pages/home";
import { Icons } from "./pages/icons";
import { Menu } from "./pages/menu";
import { Pics } from "./pages/pics";
import { School } from "./pages/school";
import { Star } from "./pages/star";
import { Time } from "./pages/time";
import { TimeLine } from "./pages/timeline";

function App() {
  return (
    <>
      <Menu />
      <Home />
      <Entertainment />
      <Card />
      <School />
      <Time />
      <Pics />
      <Star />
      <TimeLine />
      <Contact />
      <Icons />
      <CopyRight />
    </>
  );
}

export default App;
