import { Route, Routes } from "react-router-dom";
import Css from "./pages/Css";
import Html from "./pages/Html";
import JavaScript from "./pages/JavaScript";
import JQuery from "./pages/JQuery";
import ReactPage from "./pages/ReactPage";
import Rca from "./pages/Rca";
import Links from "./pages/Links";
import Vsc from "./pages/Vsc";
import TestPage from "./pages/TestPage";
import GitHub from "./pages/GitHub";
import TypeScript from "./pages/TypeScript";

const Content = () => {
    return(
        <>
        <Routes>
            <Route element={<Html/>} path="/Html"/>
            <Route element={<Css/>} path="/css"/>
            <Route element={<JavaScript/>} path="/JavaScript"/>
            <Route element={<JQuery/>} path="/JQuery"/>
            <Route element={<ReactPage/>} path="/React"/>
            <Route element={<Rca/>} path="/reactCreatApp"/>
            <Route element={<Vsc/>} path="/visualStudioCode"/>
            <Route element={<Links/>} path="/links"/>
            <Route element={<TestPage/>} path="/TestPage"/>
            <Route element={<GitHub/>} path="/Github"/>
            <Route element={<TypeScript/>} path="/typescript"/>
            <Route element={<Css/>} path="/*"/>
        </Routes>
        </>
    )
}

export default Content