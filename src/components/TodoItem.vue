<template>
  <table>
    <thead>
    <tr>
      <th class="id">ID</th>
      <th class="todo">TODO</th>
      <th class="deadline">期日</th>
      <th class="state">状態</th>
      <th class="button">-</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="todo in computedTodos" :key="todo.id" :class="{ done: todo.state }">
      <th>{{ todo.id }}</th>
      <td class="td-content" :class="{ editingContent: todo === editedContent }">
        <div class="view">
          <label @click="editTodo(todo)">{{ todo.content }}</label>
        </div>
        <input type="text" class="edit"
               @blur="doneEditContent($event, todo)"
               @keydown.enter="doneEditContent($event, todo)"
               @keyup.esc="cancelEditContent(todo)"
               v-model="todo.content"
               v-todo-focus="todo === editedContent">
      </td>
      <td class="deadline" v-bind:class="{ editingDeadline: todo === editedDeadline }">
        <div class="view">
          <label @click="editDeadline(todo)">{{ todo.deadline | formatDeadline }}</label>
        </div>
        <input type="date" class="edit"
               @blur="doneEditDeadline($event)"
               @keydown.enter="doneEditDeadline($event)"
               @keyup.esc="cancelEditDeadline(todo)"
               v-model="todo.deadline"
               v-todo-focus="todo === editedDeadline">
      </td>
      <td class="state">
        <button @click="doChangeState(todo)">{{ labels[todo.state] }}</button>
      </td>
      <td class="button">
        <button @click="doRemove(todo)">削除</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import moment from "moment"

  export default {
    name: "TodoItem",
    props: {
      computedTodos: Array
    },
    data() {
      return {
        editedContent: '',
        editedDeadline: '',
      }
    },
    methods: {
      editTodo: function (todo) {
        if (todo.state === 1) return;
        this.beforeEditCache = todo.content;
        this.editedContent = todo
      },
      editDeadline: function (todo) {
        if (todo.state === 1) return;
        this.beforeEditCache = todo.deadline;
        this.editedDeadline = todo;
      },
    },
    computed: {
      labels: function () {
        return this.options.reduce(function (a, b) {
          return Object.assign(a, { [ b.value ]: b.label })
        }, {})
      }
    },
    filters: {
      formatDeadline: function (val) {
        const date = moment(val);
        if (val === '') {
          return 'なし'
        } else if (date.year() === moment().year()) {
          return date.format('M月D日')
        } else {
          return date.format('YYYY年M月D日')
        }
      }
    },
    directives: {
      'todo-focus': function (el, binding) {
        if (binding.value) {
          el.focus()
        }
      }
    }
  }
</script>

<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead th {
    border-bottom: 2px solid #0099e4; /*#d31c4a */
    color: #0099e4;
  }

  th, th {
    padding: 0 8px;
    line-height: 40px;
  }

  thead th.id {
    width: 50px;
  }

  thead th.state {
    width: 100px;
  }

  thead th.button {
    width: 60px;
  }

  tbody td.button, tbody td.state {
    text-align: center;
  }

  tbody tr td,
  tbody tr th {
    border-bottom: 1px solid #ccc;
    transition: all 0.4s;
  }

  tbody tr.done td,
  tbody tr.done th {
    background: #f8f8f8;
    color: #bbb;
  }

  tbody tr:hover td,
  tbody tr:hover th {
    background: #f4fbff;
  }

  tbody tr td.deadline {
    text-align: center;
    width: 10em;
  }

  tbody button {
    border: none;
    border-radius: 20px;
    line-height: 24px;
    padding: 0 8px;
    background: #0099e4;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
  }

  .editingContent .view , .editingDeadline .view {
    display: none;
  }

  .view label, .editingContent .edit, .editingDeadline .edit {
    padding: 2px 5px;
    letter-spacing: 0.05em;
  }

  .deadline .view label {
    font-size: .85em;
  }

  .editingContent .edit, .editingDeadline .edit{
    display: block;
    line-height: 1.5;
    font-size: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
  }

  .td-content label:hover, .deadline label:hover{
    outline: 1px solid #d0d3d6;
  }

  tr td .edit {
    display: none;
  }

  .view label {
    display: block;
  }

  .view label:empty {
    display: block;
  }

</style>
