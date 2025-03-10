import { useEffect, useState } from "react";
import styles from "./EmployeeList.module.scss";

const EmployeeList = () => {
    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = (e) => {
        console.log("scroll");
    };

    return <div></div>;
};

export default EmployeeList;
