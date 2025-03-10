import styles from "./Breadcrumbs.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const BreadCrumbs = () => {
    const windowWidth = useTypedSelector((state) => state.windowWidth.current);
    const currentEmployee = useTypedSelector((state) => state.currentEmployee);

    return (
        <div className="wrapper">
            <div className={styles.container}>
                {currentEmployee.id !== null && windowWidth <= 320 ? (
                    <></>
                ) : (
                    <>
                        <div>Главная</div>
                        <div className={styles.chevron} style={{ backgroundImage: `url("/chevron_right.svg")` }}></div>
                    </>
                )}
                <div>Список сотрудников</div>
                {currentEmployee.id !== null ? (
                    <>
                        <div className={styles.chevron} style={{ backgroundImage: `url("/chevron_right.svg")` }}></div>
                        <div>{currentEmployee.name}</div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default BreadCrumbs;
