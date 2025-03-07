import styles from "./Header.module.scss";
import { useDispatch } from "react-redux";
import { switchTheme } from "../../store/action-creators/theme";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Header = () => {
    const theme = useTypedSelector((state) => state.theme.current);

    const dispatch = useDispatch();

    const changeTheme = () => {
        dispatch(switchTheme());
    };
    return (
        <div className="wrapper" style={{ boxShadow: "0px 1px 10px var(--primary-outline-color)" }}>
            <div className={styles.container}>
                <div className={styles.logo} style={{ backgroundImage: `url("/66bit_logo.svg")` }}></div>
                <div className={styles.menu}>
                    <div className={styles.info}>
                        <p>+7 343 290 84 76</p>
                        <p>info@66bit.ru</p>
                    </div>
                    <div className={styles.switch} style={{ backgroundImage: `url("/switch_${theme}.svg")` }} onClick={changeTheme}></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
