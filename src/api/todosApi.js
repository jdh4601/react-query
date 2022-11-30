import axios from 'axios';
// axios를 이용해서 custom 속성을 지닌 인스턴스 생성
const todosApi = axios.create({
  baseURL: 'http://localhost:3500',
});
// Get : todosApi 정보 조회 및 요청
export const getTodos = async () => {
  const res = await todosApi.get('/todos');
  return res.data;
};
// Post : 일반적으로 데이터를 Message Body에 포함시켜 보낸다.
export const addTodo = async todo => {
  return await todosApi.post('/todos', todo);
};

export const updateTodo = async todo => {
  return await todosApi.patch(`/todos/${todo.id}`, todo);
};
// Delete : 데이터베이스에 저장되어 있는 내용을 삭제하는 목적
export const deleteTodo = async id => {
  return await todosApi.delete(`todos/${id}`, id);
};

export default todosApi;
