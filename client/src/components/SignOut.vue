<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' @click="openForm" v-show="!isCreating">
      <i class='plus icon'></i>
    </button>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>First Name</label>
            <input v-model="firstText" type='text' ref='first name' defaultValue="">
          </div>
          <div class='field'>
            <label>Last Name</label>
            <input v-model="lastText" type='text' ref='last name' defaultValue="">
          </div>
          <div class='field'>
            <label>Email</label>
            <input v-model="emailText" type='text' ref='email' defaultValue="">
          </div>
          <div class='field'>
            <label>Passwors</label>
            <input v-model="passwordText" type='text' ref='password' defaultValue="">
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' @click="sendForm()">
              Create
            </button>
            <button class='ui basic red button' @click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      firstText: '',
      lastText: '',
      emailText: '',
      passwordText: '',
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.emailText.length > 0){
        const first = this.firstText;
        const last = this.lastText;
        const email = this.emailText;
        const password = this.passwordText;
        this.$emit('signout', {
          first,
          last,
          email,
          password
        });
        this.firstText = '';
        this.lastText = '';
        this.emailText = '';
        this.passwordText = '';
      }
      this.isCreating = false;
    }
  }
};
</script>

<style>

</style>
