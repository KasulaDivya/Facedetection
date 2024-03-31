import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Idss from "./ids";

function Bb(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={Home}>
            </Route>
            <Route path="/ids" Component={Idss}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Bb