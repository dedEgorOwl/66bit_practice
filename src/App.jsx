import Header from "./components/Header/Header";
import { useTypedSelector } from "./hooks/useTypedSelector";
import "./App.scss";

function App() {
    const { theme } = useTypedSelector((state) => state);

    return (
        <div className="app" id={`theme-${theme.current}`}>
            <Header />
        </div>
    );
}

export default App;
