<template>
  <div id="app">
    <h1>Todoリスト</h1>
    <TodoList/>
    <TodoInput></TodoInput>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoInput from "./components/TodoInput.vue";

export default {
  name: 'app',
  components: {
    TodoList,
    TodoInput,
  },
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    max-width: 980px;
    margin: 0 auto;
  }
  * {
    box-sizing: border-box;
  }
  h1, h2 {
    text-align: center;
  }
</style>
