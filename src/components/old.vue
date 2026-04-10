<template>
  <div @click="add">{{ count }}</div>
</template>

<script>
export default {
  data() {
    return {
      count: 10,
    };
  },
  methods: {
    add() {
      this.$emit("add", "传递一句话");
    },
  },
};
</script>

<style lang="scss" scoped></style>
