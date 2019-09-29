<template>
  <div class="list">
    <div class="search">
      <TodoFilter :options="options" name="filters" v-model.number="current">
        {{ computedTodos.length}}件を表示中
      </TodoFilter>
      <TodoSort @sort="sortTodos"></TodoSort>
    </div>
    <table>
      <thead>
      <tr>
        <th class="id">ID</th>
        <th class="todo">TODO</th>
        <th class="deadline">期日</th>
        <th class="status">状態</th>
        <th class="button">-</th>
      </tr>
      </thead>
      <tbody>
      <TodoItem v-for="todo in computedTodos" :key="todo.id" :todo="todo">{{ labels[todo.status] }}</TodoItem>
      </tbody>
    </table>
  </div>
</template>

<script>
  import TodoItem from "./TodoItem";
  import TodoFilter from "./TodoFilter";
  import TodoSort from "./TodoSort";

  export default {
    name: 'TodoList',
    data() {
      return {
        options: [
          { id: 1, value: -1, label: "すべて"},
          { id: 2, value: 0, label: "作業中"},
          { id: 3, value: 1, label: "完了"}
        ],
        current: -1,
      }
    },
    methods: {
      sortTodos(sortOrder) {
        this.$store.dispatch('sortTodos', sortOrder)
      }
    },
    computed: {
      computedTodos() {
        return this.$store.state.todos.filter(function (todo) {
          return this.current < 0 ? true : this.current === todo.status
        }, this);
      },
      labels() {
        return this.options.reduce(function (a, b) {
          return Object.assign(a, { [ b.value ]: b.label })
        }, {})
      }
    },
    components: {
      TodoItem,
      TodoFilter,
      TodoSort
    },
  }
</script>

<style scoped>
  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2em;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead th {
    border-bottom: 2px solid #0099e4; /*#d31c4a */
    color: #0099e4;
  }

  thead th.id {
    width: 50px;
  }

  thead th.status {
    width: 100px;
  }

  thead th.button {
    width: 60px;
  }
</style>
