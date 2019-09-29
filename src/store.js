import Vue from 'vue'
import Vuex from 'vuex'
import moment from "moment"

Vue.use(Vuex);

const STORAGE_KEY = "todos-vuejs";
const localStoragePlugin = store => {
  store.subscribe((mutation, { todos }) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
};

export default new Vuex.Store({
  strict: true,
  state: {
    todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo)
    },
    removeTodo(state, todo) {
      const index = state.todos.indexOf(todo);
      state.todos.splice(index, 1)
    },
    editTodo(state, { todo, content = todo.content, deadline = todo.deadline, status = todo.status }) {
      todo.content = content;
      todo.deadline = deadline;
      todo.status = status
    },
    sortTodos(state, sortOrder) {
      if (sortOrder === 1) {
        return state.todos.sort((a, b) => a.id - b.id)
      } else if (sortOrder === 2) {
        return state.todos.sort(function (a, b) {
          if (a.deadline === '') return 1;
          if (b.deadline === '') return -1;
          if (a.deadline === b.deadline) return 0;
          return moment(a.deadline).diff(moment(b.deadline))
        })
      }
    }
  },
  actions: {
    addTodo({ commit, getters }, { content, deadline }) {
      commit('addTodo', {
        id: getters.maxId + 1,
        content: content,
        deadline: deadline,
        status: 0
      })
    },
    removeTodo( { commit }, todo) {
      commit('removeTodo', todo)
    },
    editContent( { commit }, { todo, content }) {
      commit('editTodo', { todo, content: content })
    },
    editDeadline( { commit }, { todo, deadline }) {
      commit('editTodo', { todo, deadline: deadline })
    },
    changeStatus( { commit }, todo) {
      const status = todo.status ? 0 : 1;
      commit('editTodo', { todo, status: status})
    },
    sortTodos( { commit }, sortOrder) {
      commit('sortTodos', sortOrder)
    }
  },
  getters: {
    maxId(state) {
      if (state.todos) {
        return state.todos.reduce((a, b) => {
          return a.id > b.id ? a.id : b.id
        }, 0)
      } else {
        return 0
      }
    }
  },
  plugins: [localStoragePlugin]
})
