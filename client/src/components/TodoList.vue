<template>
  <div>
      <Todo @delete-todo="deleteTodo" @complate-todo="complateTodo" @edit-todo="editTodo" v-for="todo in todos" :key="todo" :todo="todo"></Todo>
  </div>
</template>

<script>
import axios from 'axios';
import Todo from './Todo';

export default {
  props: ['todos'],
  components: {
    Todo
  },
  methods: {
    deleteTodo(todo) {
      axios.delete(`http://localhost:3000/api/todos/remove/${localStorage.getItem('token')}/${todo._id}`)
      .then((respone)=>{
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
      })
      .catch((error)=>{
        console.log(error);
      })
    },
    complateTodo(todo) {
      axios.put(`http://localhost:3000/api/todos/mark/${localStorage.getItem('token')}/${todo._id}`)
      .then((respone)=>{
        const todoIndex = this.todos.indexOf(todo);
        this.todos[todoIndex].action = 'completed';
      })
      .catch((error)=>{
        console.log(error);
      })
    },
    editTodo(todo) {
      axios.put(`http://localhost:3000/api/todos/update/${localStorage.getItem('token')}/${todo._id}`,{
        title: todo.title,
        desc: todo.desc
      })
      .then((respone)=>{
        const todoIndex = this.todos.indexOf(todo);
        this.todos[todoIndex].title = todo.title;
        this.todos[todoIndex].desc = todo.desc;
        console.log(todoIndex)
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }
};
</script>

<style>

</style>
