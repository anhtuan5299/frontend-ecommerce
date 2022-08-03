import { API } from "../../backend";
import { cartEmpty } from "../../core/helper/cartHelper";


export const signup = (user) => {
    return fetch(`${API}user/`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const signin = (user) => {
    const formData = new FormData();
    for (const name in user) {
        console.log(user[name]);
        formData.append(name, user[name]);
    }

    for(var key of formData.keys()){
        console.log("MyKey: ", key);
    }

    return fetch(`${API}user/login/`, {
        method: "POST",
        body: formData
    })
        .then((response) => {
            console.log("success", response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const authentication = (data, next) => {
    if (typeof window !== undefined) {
        localStorage.setItem("nat", JSON.stringify(data));
        next();
    }
};

export const isAuthenticated = () => {
    if (typeof window == undefined) {
        return false;
    }
    if (localStorage.getItem("nat") !== null) {
        return JSON.parse(localStorage.getItem("nat"));
    } else {
        return false;
    }
};

export const signout = (next) => {
    const userId = isAuthenticated() && isAuthenticated().user.id;

    if (typeof window !== undefined) {
        localStorage.removeItem("nat");
        cartEmpty(() => { });
        next();

        return fetch(`${API}user/logout/${userId}`, {
            method: "GET"
        })
            .then(response => {
                console.log("Signout success");
                next();
            })
            .catch(err => console.log(err));
    }
};