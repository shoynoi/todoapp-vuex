<template>
  <header>
    <h1>Todoリスト</h1>
    <div class="search">
      <div class="condition">
        <label v-for="label in options" :key="label.id">
          <input type="radio" v-model.number="current" :value="label.value" @change="$emit('currentChanged', current)" >{{ label.label }}
        </label>
        ({{ computedTodos.length }}件を表示中)
      </div>
      <div class="sort">
        <select id="sort" v-model.number="sortOrder" @change="$emit('sort', sortOrder)">
          <option value='0' disabled selected>並び替え</option>
          <option v-for="option in sortOptions" :value="option.value" :key="option.id">
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "TodoHeader",
    props: {
      computedTodos: Array,
    },
    data() {
      return {
        options: [
          { id: 1, value: -1, label: "すべて"},
          { id: 2, value: 0, label: "作業中"},
          { id: 3, value: 1, label: "完了"}
        ],
        current: -1,
        sortOrder: 0,
        sortOptions: [
          { id: 1, value: 1, label: "標準"},
          { id: 2, value: 2, label: "期限"}
        ]
      }
    },
    computed: {
      labels: function () {
        return this.options.reduce(function (a, b) {
          return Object.assign(a, { [ b.value ]: b.label })
        }, {})
      }
    }
  }
</script>

<style scoped>
  .search {
    display: flex;
    justify-content: space-between;
  }

  .sort {
    position: relative;
  }

  .sort select{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 14px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 40px 0 10px;
    height: 35px;
  }

  .sort::before {
    content: '';
    width: 6px;
    height: 6px;
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -5px;
    border-bottom: solid 2px #b4b3b3;
    border-right: solid 2px #b4b3b3;
    transform: rotate(45deg);
  }
</style>
