import React from "react";
import NavBar from "./Module/NavBar";
import { Home, About, Center, MreInfo, CardsWithInfo, Reports,Symptoms,News,Footer} from "./Pages";
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Center />
      <MreInfo />
      <CardsWithInfo />
      <Reports />
      <Symptoms/>
      <News/>
      <Footer/>
    </>
  );
}
export default App;
