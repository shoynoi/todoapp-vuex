<template>
  <div class="sort">
    <select id="sort" v-model.number="sortOrder" @change="$emit('sort', sortOrder)">
      <option value='0' disabled selected>並び替え</option>
      <option v-for="option in sortOptions" :value="option.value" :key="option.id">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: "TodoSort",
    data() {
      return {
        sortOrder: 0,
        sortOptions: [
          { id: 1, value: 1, label: "標準"},
          { id: 2, value: 2, label: "期限"}
        ]
      }
    },
  }
</script>

<style scoped>
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
