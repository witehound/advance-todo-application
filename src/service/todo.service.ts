const url = "http://localhost:3001/";


import axios from "axios";

export class todoServices {
  getAllTodo = async () => {
    const { data } = await axios.get(`${url}todos`);
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
}
