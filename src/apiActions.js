const THIS_ENDPOINT = "https://64ade178b470006a5ec67770.mockapi.io/Tasks"

export const todoServerAPI = {
    getTasks: async () => {
        const data = await fetch(THIS_ENDPOINT)
        return data.json();
},
    postTask: async (body) => {
        let response = await fetch(THIS_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "same-origin"
        })
        return response.json();
},
    deleteTask: async (id) => {
        let response = await fetch(THIS_ENDPOINT, id, {
            method: 'DELETE',
        })
        return response.json();
},
    putTask: async (id, body) => {
        await fetch(THIS_ENDPOINT, id, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "same-origin"
        })
    }
}

export const postTask = async (header, isCompleted = false, description = "") => {
    const body = {isCompleted: isCompleted, title: header, description: description}
    return await todoServerAPI.postTask(body)
}

export const putTask = async (id, header, isCompleted, description) => {
    const body = {id: id, isCompleted: isCompleted, title: header, description: description}
    return await todoServerAPI.putTask(id, body)
}