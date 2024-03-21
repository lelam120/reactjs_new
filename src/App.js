import { Route, Routes } from "react-router-dom";
import Listofbook from "./component/page/Listofbook"
import './App.css'

function App() {
  return (
    <>
    <header/>

    <menu/>
    <Routes>
      <Route path="/" Component={Listofbook}/>
    </Routes>

    <footer/>
    </>
  );
}

export default App;
