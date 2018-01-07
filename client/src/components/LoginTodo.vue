<template>
  <div>
    <div class='ui centered card'>
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Email</label>
            <input v-model="email" type='text' ref='title' defaultValue="">
          </div>
          <div class='field'>
            <label>Password</label>
            <input v-model="password" type='text' ref='title' defaultValue="">
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' @click="getLogin()">
              Login
            </button>
            <button class='ui basic red button' @click="cancelForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data () {
    return {
      email:'',
      password:''
    }
  },
  methods: {
    cancelForm() {
      this.email = '';
      this.password = '';
    },
    getLogin() {
        this.$emit('login', {
          email: this.email,
          password: this.password 
        });
        cancelForm()
    }
  }
}
</script>

<style>

</style>
