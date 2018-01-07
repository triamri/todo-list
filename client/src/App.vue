<template>
  <div>
    <h1 class="ui dividing centered header">Vue.js Todo App</h1>
    <login-todo v-on:login="getLogin" v-if="logIn == false"></login-todo>
    <log-out v-on:logout="getLogout" v-if="logIn"></log-out>
    <todo-list v-bind:todos="todos" v-if="logIn"></todo-list>
    <CreateTodo v-on:create-todo="addTodo" v-if="logIn"></CreateTodo>
    <sign-out v-on:signout="signOut" v-if="logIn == false"></sign-out>
  </div>
</template>

<script>

import axios from 'axios';
import LoginTodo from './components/LoginTodo';
import LogOut from './components/LogOut';
import TodoList from './components/TodoList';
import CreateTodo from './components/Create';
import SignOut from './components/SignOut';

export default {
  name: 'app',
  components: {
    LoginTodo,
    TodoList,
    CreateTodo,
    SignOut,
    LogOut
  },
  data () {
    return {
      todos: [],
      logIn: false
    } 
  },
  created() {
    if(localStorage.getItem('token')){
      this.logIn = true;
      axios.get(`http://localhost:3000/api/todos/${localStorage.getItem('token')}`)
      .then((respone)=>{
        console.log(respone.data.data);
        this.todos = respone.data.data;
      })
      .cacth((error)=>{
        console.log(error);
      })
    }
  },
  methods: {
    addTodo(newTodo) {
      axios.post(`http://localhost:3000/api/todos/${localStorage.getItem('token')}`,newTodo)
      .then((respone)=>{
        // console.log(respone.data.data);
        this.todos.push(respone.data.data);
      })
      .cacth((error)=>{
        console.log(error);
      })
    },
    signOut(newTodo) {
      axios.post(`http://localhost:3000/api/signup`,newTodo)
      .then((respone)=>{
        console.log(respone.data);
      })
      .cacth((error)=>{
        console.log(error);
      })
    },
    getLogin(login) {
      axios.post('http://localhost:3000/api/signin',login)
      .then((respone)=>{
        console.log(respone.data.key_token);
        // this.todos = respone.data.data;
        localStorage.setItem('token',respone.data.key_token);
        this.logIn = true;
        axios.get(`http://localhost:3000/api/todos/${localStorage.getItem('token')}`)
        .then((respone)=>{
          console.log(respone.data.data);
          this.todos = respone.data.data;
        })
      })
      .cacth((error)=>{
        console.log(error);
      })
    },
    getLogout() {
      localStorage.removeItem('token');
      this.logIn = false;
      this.todos = [];
    },
    getData() {
      axios.get(`http://localhost:3000/api/todos/${localStorage.getItem('token')}`)
      .then((respone)=>{
        console.log(respone.data.data);
        this.todos = respone.data.data;
      })
      .cacth((error)=>{
        console.log(error);
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
