export default {
    register: user => {
        return fetch('/user/register', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => data);
    },
    login: user => {
        return fetch('/user/login', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.status !== 401)
                    return res.json().then(data => data)
                else
                    return (
                        { isAuthenticated: false, user: "", role: "" },
                        { message: { msgBody: "Incorrect Password or username", msgError: true } }
                    )
            })
    },
    logout: () => {
        return fetch('/user/logout')
            .then(res => res.json())
            .then(data => data)
    },
    isAuthenticated: () => {
        return fetch('/user/authenticated')
            .then(res => {
                if (res.status !== 401)
                    return res.json().then(data => data)
                else
                    return { isAuthenticated: false, user: "", role: "" }
            })
    }
}