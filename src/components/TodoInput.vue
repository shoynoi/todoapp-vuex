<template>
  <div>
    <h2>新規Todo</h2>
    <form class="add-form" @submit.prevent="addTodo">
      <input type="text" v-model="newTodo" class="form-content" placeholder="タスクを入力">
      <input type="date" v-model="deadline" class="form-deadline" :min="today()">
      <button type="submit" :disabled="isButtonDisabled()">追加</button>
    </form>
  </div>
</template>

<script>
  import date from "./date";

  export default {
    name: "TodoInput",
    data() {
      return {
        newTodo: '',
        deadline: ''
      }
    },
    methods: {
      isButtonDisabled() {
        return !this.newTodo.trim().length
      },
      addTodo() {
        const content = this.newTodo && this.newTodo.trim();
        if (!content) return;
        this.$store.dispatch('addTodo', { content: content, deadline: this.deadline });
        this.newTodo = ''
      }
    },
    mixins: [date]
  }
</script>

<style scoped>
  .form-content {
    border-radius: 3px 0 0 3px;
    border: 1px solid #ccc;
    flex: 1;
  }

  .form-deadline {
    border: 1px solid #ccc;
    border-radius: 0 3px 3px 0;
    border-left: 0;
  }

  .add-form {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .add-form input {
    padding: .25em .5em;
    height: 38px;
    font-size: 100%;
  }

  .add-form button {
    margin-left: 2em;
    border: none;
    border-radius: 8px;
    line-height: 24px;
    padding: 5px 15px;
    background: #0099e4;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    font-size: .8em;
    height: 36px;
  }

  .add-form button:disabled {
    opacity: .5;
    cursor: default;
  }
</style>

<style>
  input[type="date"]::-webkit-inner-spin-button{
    -webkit-appearance: none;
  }

  input[type="date"]::-webkit-clear-button{
    position: relative;
    z-index: 1;
  }

  input[type="date"] {
    position: relative;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
</style>
