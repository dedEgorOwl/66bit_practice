import Header from "./components/Header/Header";
import { useTypedSelector } from "./hooks/useTypedSelector";
import "./App.scss";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { setTheme } from "./store/action-creators/theme";

export const cookies = new Cookies();

function App() {
    const { theme } = useTypedSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTheme(cookies.get("current_theme")));
    }, []);

    return (
        <div className="app" id={`theme-${theme.current}`}>
            <Header />
        </div>
    );
}

export default App;
