import React from "react";
import styles from "./Breadcrumbs.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const BreadCrumbs = () => {
    const { windowWidth, currentEmployee } = useTypedSelector((state) => state);

    return (
        <div className="wrapper">
            <div className={styles.container}>
                {windowWidth.current > 320 ? (
                    <>
                        <div>Главная</div>
                        <div className={styles.chevron} style={{ backgroundImage: `url("/chevron_right.svg")` }}></div>
                    </>
                ) : (
                    <></>
                )}
                <div>Список сотрудников</div>
                {currentEmployee.current.id == null ? (
                    <></>
                ) : (
                    <>
                        <div className={styles.chevron} style={{ backgroundImage: `url("/chevron_right.svg")` }}></div>
                        <div>{currentEmployee.current.name}</div>
                    </>
                )}
            </div>
        </div>
    );
};

export default BreadCrumbs;
