const url = "http://localhost:3001/";


import axios from "axios";
import { Todo } from "../models/todo";

export class todoServices {
  getAllTodo = async ( query ?: string) => {
    const { data } = await axios.get(`${url}todos?${query && `isDone=${query}`}`, {});
    return data;
  };

  getSingleTodo = async (id : number) => {
    const { data } = await axios.get(`${url}todos/${id}`);
    return data;
  }


  adddTodo = async (body: any) => {
    try {
      const response = await axios.post(`${url}todos`, body);
      return response;
    } catch (error) {}
  };

  deleteTodo = async (id: Number) => {
    try {
      const { data } = await axios.delete(`${url}todos/${id}`);
      return data;
    } catch (error) {}
  };

  updateTodo = async (id : number, body : Partial<Todo>) => {
    try {
      const { data } = await axios.patch(`${url}todos/${id}`, body);
      return data;
    } catch (error) {}
  }
}
