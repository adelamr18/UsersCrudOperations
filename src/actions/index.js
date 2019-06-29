import axios from 'axios';
const URL_ROOT = 'http://localhost:3005';


export function getUsers(email, password, history) {
    var filteredusers;
    const request = axios.get(`${URL_ROOT}/Users`)
        .then(res => {
            const users = res.data;
            filteredusers = users.find(function (item) {
                return (item['email'] === email.toString() && item['password'] === password.toString())
            })
            if (filteredusers) {
                history.push("/home");
            }
        })
    return {
        type: 'GET_USERS',
        payload: request
    }
}

export function deleteDashboardUsers(userid) {
    const request = fetch(`${URL_ROOT}/Dashboardusers/${userid}`, { method: 'DELETE' })
        .then(response => response.json());
    getDashboardUsers();
    return {
        type: 'DELETE_DASHBOARD_USERS',
        payload: request
    }
}
export function updateDashboardUsers(user, username) {
    const request = fetch(`${URL_ROOT}/Dashboardusers/${user.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: username,
            age: user.age,
            id: user.id
        })
    })
        .then(response => response.json());
    getDashboardUsers();
    return {
        type: 'UPDATE_DASHBOARD_USERS',
        payload: request
    }
}
export function getDashboardUsers() {
    const request = fetch(`${URL_ROOT}/Dashboardusers`, { method: 'GET' })
        .then(response => response.json());
    return {
        type: 'GET_DASHBOARD_USERS',
        payload: request
    }
}
export function addDashboardUsers(addedUsername, addedUserAge, id) {
    const request = fetch(`${URL_ROOT}/Dashboardusers/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: addedUsername,
            age: addedUserAge,
            id: id++
        })
    }).then(response => response);
     getDashboardUsers();
    return {
        type: 'ADD_DASHBOARD_USERS',
        payload: request
    }
}


