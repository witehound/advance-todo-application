
const url = "http://localhost:3001/"

import axios from "axios"

export const getAllTodo = async () => {
    const {data}= await  axios.get(`${url}todos`)
    return data 
}

export const adddTodo = async (body : any) => {
    try {
        const { data } = await  axios.post(`${url}todos`, body)
        return data
    } catch (error) {
        
    }
}