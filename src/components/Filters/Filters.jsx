import { useEffect, useState, useRef } from "react";
import styles from "./Filters.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setEmployeeList } from "../../store/action-creators/employeeList";

const Filters = () => {
    const dispatch = useDispatch();

    const positionDropdownRef = useRef();
    const sexDropdownRef = useRef();
    const stackDropdownRef = useRef();

    useEffect(() => {
        const outsideClickHandler = (e) => {
            if (isPositionDropdownActive && !positionDropdownRef.current.contains(e.target)) {
                setIsPositionDropdownActive(false);
            }
            if (isSexDropdownActive && !sexDropdownRef.current.contains(e.target)) {
                setIsSexDropdownActive(false);
            }
            if (isStackDropdownActive && !stackDropdownRef.current.contains(e.target)) {
                setIsStackDropdownActive(false);
            }
        };
        document.addEventListener("mousedown", outsideClickHandler);

        return () => {
            document.removeEventListener("mousedown", outsideClickHandler);
        };
    });

    const theme = useTypedSelector((state) => state.theme.current);
    const windowWidth = useTypedSelector((state) => state.windowWidth.current);

    const [isPositionDropdownActive, setIsPositionDropdownActive] = useState(false);
    const [isSexDropdownActive, setIsSexDropdownActive] = useState(false);
    const [isStackDropdownActive, setIsStackDropdownActive] = useState(false);

    //prettier-ignore
    const [positionOptions, setPositionOptions] = useState({
        "Backend-разработчик": false,
        "Frontend-разработчик": false,
        "Аналитик": false,
        "Менеджер": false,
        "Дизайнер": false,
        "Fullstack": false,
    });

    //prettier-ignore
    const [sexOptions, setSexOptions] = useState({
        "Женщина": false,
        "Мужчина": false,
    });

    //prettier-ignore
    const [stackOptions, setStackOptions] = useState({
        "Csharp": false,
        "React": false,
        "Java": false,
        "PHP": false,
        "Figma": false,
        "Word": false,
    });

    const [searchInputValue, setSearchInputValue] = useState("");

    const fetchEmployeeList = () => {
        dispatch(
            setEmployeeList({
                positionOptions: { ...positionOptions },
                sexOptions: { ...sexOptions },
                stackOptions: { ...stackOptions },
                searchInput: searchInputValue,
            })
        );
    };

    return (
        <>
            <div className="wrapper">
                <div className={styles.container}>
                    <div className={styles.top}>
                        <h1>Список сотрудников</h1>
                        {windowWidth <= 320 && (
                            <input
                                type="text"
                                className={styles.search}
                                placeholder="Поиск"
                                onChange={(e) => {
                                    setSearchInputValue(e.target.value);
                                }}
                                value={searchInputValue}
                            />
                        )}
                        <div className={styles.filterDropdowns}>
                            <div className={styles.dropdownBtn} ref={positionDropdownRef} style={{ flexDirection: windowWidth <= 320 ? "row" : "" }}>
                                {windowWidth > 320 && <div className={styles.chevron} style={{ backgroundImage: isPositionDropdownActive ? `url("/chevron_blue_up.svg")` : `url("/chevron_blue_down.svg")` }}></div>}
                                <div
                                    style={{ color: isPositionDropdownActive ? "var(--primary-accent-color)" : "", userSelect: "none" }}
                                    onClick={() => {
                                        if (isPositionDropdownActive) return setIsPositionDropdownActive(false);
                                        setIsSexDropdownActive(false);
                                        setIsStackDropdownActive(false);
                                        return setIsPositionDropdownActive(true);
                                    }}
                                >
                                    Должность
                                </div>
                                {windowWidth <= 320 && <div className={styles.chevron} style={{ backgroundImage: isPositionDropdownActive ? `url("/chevron_blue_up.svg")` : `url("/chevron_blue_down.svg")` }}></div>}
                                <div className={styles.dropdown} style={{ display: isPositionDropdownActive ? "flex" : "none", width: windowWidth <= 320 ? "auto" : "" }}>
                                    {Object.keys(positionOptions).map((key, index) => {
                                        return (
                                            <div
                                                className={styles.option}
                                                key={index}
                                                onClick={() => {
                                                    setPositionOptions({ ...positionOptions, [key]: !positionOptions[key] });
                                                }}
                                                style={{ gap: windowWidth <= 320 ? "8px" : "" }}
                                            >
                                                <div>{key}</div>
                                                <div className={styles.checkbox} style={{ backgroundImage: `url("/checkbox_${positionOptions[key]}.png")` }}></div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className={styles.dropdownBtn} ref={sexDropdownRef}>
                                <div className={styles.chevron} style={{ backgroundImage: isSexDropdownActive ? `url("/chevron_blue_up.svg")` : `url("/chevron_blue_down.svg")` }}></div>
                                <div
                                    style={{ color: isSexDropdownActive ? "var(--primary-accent-color)" : "", userSelect: "none" }}
                                    onClick={() => {
                                        if (isSexDropdownActive) return setIsSexDropdownActive(false);
                                        setIsPositionDropdownActive(false);
                                        setIsStackDropdownActive(false);
                                        return setIsSexDropdownActive(true);
                                    }}
                                >
                                    Пол
                                </div>
                                <div className={styles.dropdown} style={{ display: isSexDropdownActive ? "flex" : "none", width: windowWidth <= 320 ? "auto" : "" }}>
                                    {Object.keys(sexOptions).map((key, index) => {
                                        return (
                                            <div
                                                className={styles.option}
                                                key={index}
                                                onClick={() => {
                                                    setSexOptions({ ...sexOptions, [key]: !sexOptions[key] });
                                                }}
                                                style={{ gap: windowWidth <= 320 ? "8px" : "" }}
                                            >
                                                <div>{key}</div>
                                                <div className={styles.checkbox} style={{ backgroundImage: `url("/checkbox_${sexOptions[key]}.png")` }}></div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className={styles.dropdownBtn} ref={stackDropdownRef}>
                                <div className={styles.chevron} style={{ backgroundImage: isStackDropdownActive ? `url("/chevron_blue_up.svg")` : `url("/chevron_blue_down.svg")` }}></div>
                                <div
                                    style={{ color: isStackDropdownActive ? "var(--primary-accent-color)" : "", userSelect: "none" }}
                                    onClick={() => {
                                        if (isStackDropdownActive) return setIsStackDropdownActive(false);
                                        setIsPositionDropdownActive(false);
                                        setIsSexDropdownActive(false);
                                        return setIsStackDropdownActive(true);
                                    }}
                                >
                                    Стек технологий
                                </div>
                                <div className={styles.dropdown} style={{ display: isStackDropdownActive ? "flex" : "none", width: windowWidth <= 320 ? "auto" : "" }}>
                                    {Object.keys(stackOptions).map((key, index) => {
                                        return (
                                            <div
                                                className={styles.option}
                                                key={index}
                                                onClick={() => {
                                                    setStackOptions({ ...stackOptions, [key]: !stackOptions[key] });
                                                }}
                                                style={{ gap: windowWidth <= 320 ? "8px" : "" }}
                                            >
                                                <div>{key}</div>
                                                <div className={styles.checkbox} style={{ backgroundImage: `url("/checkbox_${stackOptions[key]}.png")` }}></div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    {windowWidth > 320 && (
                        <input
                            type="text"
                            className={styles.search}
                            placeholder="Поиск"
                            onChange={(e) => {
                                setSearchInputValue(e.target.value);
                            }}
                            value={searchInputValue}
                        />
                    )}
                </div>
            </div>
            <div className="wrapper" style={{ backgroundColor: "var(--secondary-background-color)" }}>
                <div className={styles.container}>
                    <div className={styles.bottom}>
                        <div className={styles.activeFilters}>
                            Выбранные фильтры:
                            <div className={styles.activeFilterList}>
                                {Object.keys(positionOptions).map((key, index) => {
                                    if (positionOptions[key] === true) {
                                        return (
                                            <div
                                                className={styles.filter}
                                                key={`position_${index}`}
                                                onClick={() => {
                                                    setPositionOptions({ ...positionOptions, [key]: !positionOptions[key] });
                                                }}
                                            >
                                                <div className={styles.cancel} style={{ backgroundImage: `url("/cancel_${theme}.svg")` }}></div>
                                                {key.toLowerCase()}
                                            </div>
                                        );
                                    }
                                })}
                                {Object.keys(sexOptions).map((key, index) => {
                                    if (sexOptions[key] === true) {
                                        return (
                                            <div
                                                className={styles.filter}
                                                key={`sex_${index}`}
                                                onClick={() => {
                                                    setSexOptions({ ...sexOptions, [key]: !sexOptions[key] });
                                                }}
                                            >
                                                <div className={styles.cancel} style={{ backgroundImage: `url("/cancel_${theme}.svg")` }}></div>
                                                {key.toLowerCase()}
                                            </div>
                                        );
                                    }
                                })}
                                {Object.keys(stackOptions).map((key, index) => {
                                    if (stackOptions[key] === true) {
                                        return (
                                            <div
                                                className={styles.filter}
                                                key={`stack_${index}`}
                                                onClick={() => {
                                                    setStackOptions({ ...stackOptions, [key]: !stackOptions[key] });
                                                }}
                                            >
                                                <div className={styles.cancel} style={{ backgroundImage: `url("/cancel_${theme}.svg")` }}></div>
                                                {key.toLowerCase()}
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                        <div
                            className={styles.searchBtn}
                            onClick={() => {
                                fetchEmployeeList();
                            }}
                        >
                            Найти
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filters;
