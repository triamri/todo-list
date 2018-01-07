<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' @click="openForm" v-show="!isCreating">
      <i class='plus icon'></i>
    </button>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input v-model="titleText" type='text' ref='title' defaultValue="">
          </div>
          <div class='field'>
            <label>Desc</label>
            <input v-model="descText" type='text' ref='desc' defaultValue="">
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
      titleText: '',
      descText: '',
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
      if (this.titleText.length > 0){
        const title = this.titleText;
        const desc = this.descText;
        this.$emit('create-todo', {
          title,
          desc
        });
        this.titleText = '';
        this.descText = '';
      }
      this.isCreating = false;
    }
  }
};
</script>

<style>

</style>
