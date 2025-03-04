import { useDispatch } from "react-redux";
import styles from "./App.module.scss";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { switchTheme } from "./store/action-creators/theme";

function App() {
    const { theme } = useTypedSelector((state) => state);

    const dispatch = useDispatch();

    const changeTheme = () => {
        dispatch(switchTheme());
    };

    return (
        <div id="app">
            <h1>Hello 66</h1>
            <h2>{theme.current}</h2>

            <button onClick={changeTheme}>switch theme</button>
        </div>
    );
}

export default App;
