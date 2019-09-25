<template>
  <div id="app">
    <h1>Todoリスト</h1>
    <TodoList :todos="todos"/>
    <TodoInput @add="addTodo"></TodoInput>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoInput from "./components/TodoInput.vue";

const STORAGE_KEY = "todos-vuejs";
const todoStorage = {
  fetch: function () {
    const todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );
    if (todos) {
      todoStorage.uid = todos.reduce(function (a, b) {
        return a.id > b.id ? a.id : b.id
      }, 0)} else {
      todoStorage.uid = 0
    }
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
};

export default {
  name: 'app',
  data() {
    return {
      todos: [],
    }
  },
  components: {
    TodoList,
    TodoInput,
  },
  watch: {
    todos: {
      handler: function (todos) {
        todoStorage.save(todos)
      }
    }
  },
  created() {
    this.todos = todoStorage.fetch()
  },
  methods: {
    addTodo(data) {
      const value = data.newTodo && data.newTodo.trim();
      if (!value) {
        return;
      }
      this.todos.push({
        id: ++todoStorage.uid,
        content: value,
        deadline: data.deadline,
        state: 0
      })
    },
    doChangeState: function (todo) {
      todo.state = todo.state ? 0 : 1
    },
    doRemove: function (todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1)
    },
    doneEditContent: function (event, todo) {
      if (event.key !== "Enter" && event.type !== 'blur') return;
      if (!this.editedContent) return;
      this.editedContent = null;
      todo.content = todo.content.trim();
      if (!todo.content) {
        this.cancelEditContent(todo)
      }
    },
    doneEditDeadline: function (event) {
      if (event.key !== "Enter" && event.type !== 'blur') return;
      if (!this.editedDeadline) return;
      this.editedDeadline = null;
    },
    cancelEditContent: function (todo) {
      this.editedContent = null;
      todo.content = this.beforeEditCache
    },
    cancelEditDeadline: function (todo) {
      this.editedDeadline = null;
      todo.deadline = this.beforeEditCache
    },
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
  max-width: 980px;
  margin: 0 auto;
}
* {
  box-sizing: border-box;
}
</style>
