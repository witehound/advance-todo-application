
const url = "http://localhost:3001/"

import axios from "axios"

export const getAllTodo = async () => {
    const {data}= await  axios.get(`${url}todos`)
    return data 
}

export const adddTodo = async (body : any) => {
    try {
        const response = await axios.post(`${url}todos`, body)
        return response
    } catch (error) {
        
    }
}

export const deleteTodo = async ( id : Number) => {
    try {
        const { data } = await  axios.delete(`${url}todos/${id}`)
        return data
    } catch (error) {
        
    }
}