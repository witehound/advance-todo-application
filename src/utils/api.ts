
const url = "http://localhost:3001/"

import axios from "axios"

export const getAllTodo = async () => {
    const {data}= await  axios.get(`${url}todos`)
    return data 
}