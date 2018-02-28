
    const TODO_KEY ='todos_key'
export default {
  readTodos(){
    return JSON.parse(window.localStorage.getItem (TODO_KEY) || '[]')
  },
  saveTodos(todos){
    window.localStorage.setItem(TODO_KEY,JSON.stringify(todos))
  }
}
