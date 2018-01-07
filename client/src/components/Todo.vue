<template>
  <div class='ui centered card'>
      <div class='content' v-show="!isEditing">
        <div class='header'>
          {{ todo.title }}
        </div>
        <div class='meta'>
          {{ todo.desc }}
        </div>  
        <div class='extra content'>
          <span class='right floated edit icon' @click="showForm">
            <i class='edit icon'></i>
          </span>
          <span class='right floated trash icon' @click="deleteTodo(todo)">
            <i class='trash icon'></i>
          </span>
        </div>
      </div>
      <div class="content" v-show="isEditing">
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input type='text' v-model="todo.title" >
          </div>
          <div class='field'>
            <label>Desc</label>
            <input type='text' v-model="todo.desc" >
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="editTodo(todo)">
              Edit
            </button>
            <button class='ui basic blue button' v-on:click="hideForm">
              Close X
            </button>
          </div>
        </div>
      </div>
    <div class='ui bottom attached green basic button' v-show="!isEditing && (todo.action === 'completed')" disabled>
        Completed
    </div>
    <div class='ui bottom attached red basic button' @click="completeTodo(todo)" v-show="!isEditing && (todo.action==='uncompleted')">
        Pending
    </div>
    </div>
</template>

<script>
export default {
  props: ['todo'],
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    editTodo(todo) {
      this.$emit('edit-todo', todo)
    },
    deleteTodo(todo){
      this.$emit('delete-todo', todo)
    },
    completeTodo(todo) {
      this.$emit('complate-todo', todo)
    }
  }
};
</script>

<style>

</style>