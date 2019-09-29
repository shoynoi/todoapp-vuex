<template>
    <tr :class="{ done: todo.status }">
      <th>{{ todo.id }}</th>
      <td class="td-content" :class="{ editingContent: todo === editedContent }">
        <div class="view">
          <label @click="editTodo">{{ todo.content }}</label>
        </div>
        <input type="text" class="edit"
               @blur="doneEditContent"
               @keydown.enter="doneEditContent"
               @keyup.esc="cancelEditContent"
               @compositionstart="composing = true"
               @compositionend="composing = false"
               :value="todo.content"
               v-todo-focus="todo === editedContent">
      </td>
      <td class="deadline" :class="{ editingDeadline: todo === editedDeadline }">
        <div class="view">
          <label @click="editDeadline">{{ todo.deadline | formatDeadline }}</label>
        </div>
        <input type="date" class="edit"
               @blur="doneEditDeadline"
               @keydown.enter="doneEditDeadline"
               @keyup.esc="cancelEditDeadline"
               :value="todo.deadline"
               :min="today()"
               v-todo-focus="todo === editedDeadline">
      </td>
      <td class="status">
        <button @click="changeStatus(todo)"><slot></slot></button>
      </td>
      <td class="button">
        <button @click="removeTodo(todo)">削除</button>
      </td>
    </tr>
</template>

<script>
  import { mapActions } from 'vuex'
  import date from "./date";

  export default {
    name: "TodoItem",
    props: {
      todo: Object,
    },
    data() {
      return {
        editedContent: '',
        editedDeadline: '',
        composing: false
      }
    },
    methods: {
      ...mapActions(['changeStatus', 'removeTodo']),
      editTodo() {
        if (this.todo.status === 1) return;
        this.beforeEditCache = this.todo.content;
        this.editedContent = this.todo
      },
      editDeadline() {
        if (this.todo.status === 1) return;
        this.beforeEditCache = this.todo.deadline;
        this.editedDeadline = this.todo;
      },
      doneEditContent(event) {
        if (!this.composing) {
            this.editedContent = null;
            const content = event.target.value.trim();
            this.$store.dispatch('editContent', { todo: this.todo, content: content });
            if (!content) {
              this.cancelEditContent()
            }
        }
      },
      cancelEditContent() {
        this.editedContent = null;
        this.todo.content = this.beforeEditCache
      },
      doneEditDeadline(event) {
        if (event.key !== "Enter" && event.type !== 'blur') return;
        if (!this.editedDeadline) return;
        this.editedDeadline = null;
        const deadline = event.target.value;
        this.$store.dispatch('editDeadline', { todo: this.todo, deadline: deadline })
      },
      cancelEditDeadline() {
        this.editedDeadline = null;
        this.todo.deadline = this.beforeEditCache
      },
    },
    directives: {
      'todo-focus': function (el, binding) {
        if (binding.value) {
          el.focus()
        }
      }
    },
    mixins: [date]
  }
</script>

<style scoped>
  th, th {
    padding: 0 8px;
    line-height: 40px;
  }

  td.button, td.status {
    text-align: center;
  }

  tr td, tr th {
    border-bottom: 1px solid #ccc;
    transition: all 0.4s;
  }

  tr.done td, tr.done th {
    background: #f8f8f8;
    color: #bbb;
  }

  tr:hover td, tr:hover th {
    background: #f4fbff;
  }

  tr td.deadline {
    text-align: center;
    width: 10em;
  }

   button {
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
