import Header from "./components/Header/Header";
import { useTypedSelector } from "./hooks/useTypedSelector";
import "./App.scss";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { setTheme } from "./store/action-creators/theme";
import { setWindowWidth } from "./store/action-creators/windowWidth";
import BreadCrumbs from "./components/BreadCrumbs/Breadcrumbs";

export const cookies = new Cookies();

function App() {
    const { theme } = useTypedSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTheme(cookies.get("current_theme")));

        function handleResize() {
            dispatch(setWindowWidth(window.innerWidth));
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setWindowWidth]);

    return (
        <div className="app" id={`theme-${theme.current}`}>
            <Header />
            <BreadCrumbs />
        </div>
    );
}

export default App;
