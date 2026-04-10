<template>
  <div>
    <select :value="color" @change="onChange">
      <option value="red">红</option>
      <option value="blue">蓝</option>
    </select>
    <slot name="xxx" :list="items"></slot>
  </div>
</template>

<script>
export default {
  props: ["color"],
  data() {
    return {
      items: [
        { name: "3mz", id: 1 },
        { name: "pite", id: 2 },
        { name: "noname", id: 3 },
      ],
    };
  },
  methods: {
    onChange(e) {
      this.$emit("xxx", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
