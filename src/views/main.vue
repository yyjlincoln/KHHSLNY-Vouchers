<template>
  <div>
    <printable-el
      class="flex flex-col justify-between bg-no-repeat bg-cover"
      :style="{
        'background-image': 'url(' + require('@/assets/background.png') + ')',
      }"
    >
      <div class="mx-auto text-center flex flex-col">
        <img
          :src="require('@/assets/' + $lny.zodiac[zindex].image)"
          width="250"
          height="250"
          class="mx-auto"
        />
        <div class="text-6xl mx-auto mt-10 cursive">You made it!</div>
        <div class="text-3xl mx-auto mt-10 whitespace-pre-line font-bold">
          {{ message }}
        </div>
      </div>
      <div class="w-full rounded-md">
        <div class="mb-5 flex flex-col">
          <span class="font-extrabold text-xl"> Did you know? </span>
          <span class="font-bold text-xl whitespace-pre-line">
            The zodiac on this ticket is {{ $lny.zodiac[zindex].name }} ({{
              $lny.zodiac[zindex].chn
            }}). This is the {{ zindex + 1
            }}{{
              zindex + 1 == 1
                ? "st"
                : zindex + 1 == 2
                ? "nd"
                : zindex + 1 == 3
                ? "rd"
                : "th"
            }}
            animal in the chinese zodiac system.
            {{ funfact }}
          </span>
        </div>
        <div class="flex flex-row justify-between">
          <div>
            <img
              src="@/assets/logo.png"
              width="300"
              height="300"
              class="object-fit"
            />
            <p class="text-xl font-bold text-gray-600">
              Brought to you by your KHHS Prefects
            </p>
            <p class="text-xl font-bold text-gray-600">
              Wash you hands. Be COVID safe.
            </p>
          </div>
          <div class="mx-10">
            <img :src="qr" width="70" height="70" />
            <p>ID: {{ questionID }}</p>
          </div>
        </div>
      </div>
    </printable-el>
  </div>
</template>

<script>
import printableEl from "../components/printable-el.vue";

export default {
  components: { printableEl },
  data: () => ({
    zindex: Math.round(Math.random() * 11),
    message:
      "Ms Nguyen from the science staffroom might have something for you",
    funfact: "",
    questionID: "test",
    qr: "",
  }),
  mounted() {
    this.qr =
      "https://apis.mcsrv.icu/qr?urlEncoded=" +
      btoa("https://lny.mcsrv.icu/?questionID=");
  },
};
</script>
    

<style>
</style>

<style scoped>
</style>