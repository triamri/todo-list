<template>
  <div>
    <div class='ui centered card'>
      <div class='content'>
        <div class='ui form'>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' @click="getLogout()">
              LogOut
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    getLogout() {
        this.$emit('logout');
    }
  }
}
</script>

<style>

</style>
