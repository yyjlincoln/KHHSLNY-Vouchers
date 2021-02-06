<template>
  <div>
    <div v-for="x in 12" :key="x">
      <quiz
        message="You might want to go to science staffroom and find Ms Nguyen."
        questionID="sample"
        :zindex="x - 1"
      ></quiz>
    </div>
  </div>
</template>

<script>
import Quiz from "../components/quiz.vue";
export default {
  components: { Quiz },
};
</script>

<style>
</style>