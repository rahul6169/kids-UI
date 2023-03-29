import "./App.css";
import { Card } from "./pages/card";
import { Entertainment } from "./pages/entertainment";
import { Home } from "./pages/home";
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
    </>
  );
}

export default App;
