import { Dispatch } from "redux";
import { EmployeeListAction, EmployeeListActionTypes } from "../../types/employeeList";
import axios from "axios";

//prettier-ignore
const filtersAssociations = {
    position: {
        "Backend-разработчик": "Backend",
        "Frontend-разработчик": "Frontend",
        "Аналитик": "Analyst",
        "Менеджер": "Manager",
        "Дизайнер": "Designer",
    },
    sex: {
        "Женщина": "Female",
        "Мужчина": "Male",
    },
    stack: {
        "Csharp": "Csharp",
        "React": "React",
        "Java": "Java",
        "PHP": "PHP",
        "Figma": "Figma",
        "Word": "Word",
    }
}

export const setEmployeeList = (payload) => {
    const filters = payload;
    let queryLink = "https://frontend-test-api.stk8s.66bit.ru/api/Employee?";

    Object.keys(filters.positionOptions).map((key, index) => {
        if (filters.positionOptions[key] === true) {
            if (key === "Fullstack") return; // На swagger нету такой опции
            queryLink += `Position=${filtersAssociations.position[key]}&`;
        }
    });

    Object.keys(filters.sexOptions).map((key, index) => {
        if (filters.sexOptions[key] === true) {
            queryLink += `Gender=${filtersAssociations.sex[key]}&`;
        }
    });

    Object.keys(filters.stackOptions).map((key, index) => {
        if (filters.stackOptions[key] === true) {
            queryLink += `Stack=${filtersAssociations.stack[key]}&`;
        }
    });

    if (filters.searchInput) queryLink += `Name=${encodeURI(filters.searchInput)}&`;

    queryLink += "Count=999";

    const fetchedData = { data: [], status: 0, isFetching: true };

    return async (dispatch: Dispatch<EmployeeListAction>) => {
        try {
            dispatch({ type: EmployeeListActionTypes.SET_IS_EMPLOYEES_FETCHING, payload: true });
            const response = await axios.get(queryLink);
            fetchedData.data = response.data;
            fetchedData.status = response.status;
            fetchedData.isFetching = false;
            dispatch({ type: EmployeeListActionTypes.SET_EMPLOYEE_LIST, payload: fetchedData });
        } catch (error) {
            console.log(error);
        }
    };
};
