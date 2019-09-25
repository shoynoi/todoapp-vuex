<template>
  <div class="list">
    <div class="search">
      <TodoFilter :options="options" name="filters" v-model.number="current">
        {{ computedTodos.length}}件を表示中
      </TodoFilter>
      <TodoSort @sort="sortTodos"></TodoSort>
    </div>
    <TodoItem :computedTodos="computedTodos"/>
  </div>
</template>

<script>
  import moment from "moment"
  import TodoItem from "./TodoItem";
  import TodoFilter from "./TodoFilter";
  import TodoSort from "./TodoSort";

  export default {
    name: 'TodoList',
    props: {
      todos: Array
    },
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
    computed: {
      computedTodos() {
        return this.todos.filter(function (todo) {
          return this.current < 0 ? true : this.current === todo.state
        }, this);
      },
    },
    components: {
      TodoItem,
      TodoFilter,
      TodoSort
    },
    methods: {
      // TODO TodoSort.vueにあるべき?
      sortTodos(sortOrder) {
        if (sortOrder === 1) {
          return this.todos.sort((a, b) => a.id - b.id)
        } else if (sortOrder === 2) {
          return this.todos.sort(function (a, b) {
            if (a.deadline === '') return 1;
            if (b.deadline === '') return -1;
            if (a.deadline === b.deadline) return 0;
            return moment(a.deadline).diff(moment(b.deadline))
          })
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search {
    display: flex;
    justify-content: space-between;
  }
</style>
