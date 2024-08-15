<script setup>
import IconChevronUp from "@/components/icons/IconChevronUp.vue";
import IconTwoArrow from "@/components/icons/IconTwoArrow.vue";
import IconKalendar from "./icons/IconKalendar.vue";
import IconUser from "./icons/IconUser.vue";
import IconSearch from "./icons/IconSearch.vue";
import IconLocs from "./icons/IconLocs.vue";

import TicketCard from "./TicketCard.vue";
</script>
<template>
  <div>
    <div class="py-4 bg-main">
      <div class="flex flex-col items-center">
        <h2 class="text-3xl font-semibold">Aвиабилеты</h2>
        <p class="text-lg text-bold-blue">Путешествия</p>
      </div>
    </div>
    <div class="container px-5 mx-auto max-sm:px-4">
      <div
        class="flex items-center gap-2 my-3 text-sm font-medium text-light-dark"
      >
        <span>Главная</span>
        <div class="flex items-center gap-2">
          <span class="rotate-90 text-min"><icon-chevron-up /></span>
          <span class="text-bold-dark"> Путешествия</span>
        </div>
      </div>
      <div class="p-3 text-sm rounded-lg bg-main">
        <div class="flex gap-3 text-bold-dark max-sm:justify-center">
          <span>Туда</span>
          <span class="underline underline-offset-4 text-light-dark"
            >Туда-Обратно</span
          >
        </div>
        <div class="flex items-center justify-between h-10 mt-4">
          <div
            class="flex w-full h-full my-3 bg-white border rounded max-lg:flex-wrap border-light-dark/40 gap-y-2 max-sm:bg-transparent max-sm:border-none"
          >
            <div
              class="relative flex flex-wrap h-full max-sm:px-1 max-lg:w-full gap-y-2"
            >
              <input
                type="text"
                placeholder="Станция отправления"
                class="h-full px-5 border-r outline-none max-lg:w-1/2 max-sm:w-full max-sm:rounded-xl max-sm:px-2 max-lg:border"
              />
              <input
                type="text"
                placeholder="Станция прибытия"
                class="h-full px-5 border-l outline-none max-lg:w-1/2 max-sm:w-full max-sm:rounded-xl max-sm:px-2 max-lg:border"
              />
              <span
                class="absolute flex items-center justify-center w-8 h-8 -ml-4 text-lg bg-white border rounded-full text-bold-blue left-1/2 top-1 border-light-dark/40 max-sm:top-1/2 max-sm:mt-2"
              >
                <icon-two-arrow />
              </span>
            </div>
            <div
              class="flex flex-wrap h-full max-lg:w-full max-lg:mt-4 max-lg:justify-between max-sm:mt-14 gap-y-2"
            >
              <span
                class="flex items-center gap-2 px-5 max-sm:px-2 max-sm:mx-1 max-sm:rounded-xl max-sm:h-10 border-x max-lg:bg-white max-lg:border max-lg:rounded max-lg:w-half max-lg:justify-between max-sm:w-full"
              >
                <input
                  type="text"
                  placeholder="Когда"
                  class="h-full outline-none"
                />
                <icon-kalendar class="text-lg text-bold-blue" />
              </span>
              <span
                class="flex items-center gap-2 px-5 border-l max-sm:px-2 max-sm:mx-1 max-sm:h-10 max-sm:rounded-xl max-lg:bg-white max-lg:border max-lg:rounded max-lg:w-half max-lg:justify-between max-sm:w-full"
              >
                <input
                  type="text"
                  placeholder="1 пассажир"
                  class="h-full outline-none"
                />
                <icon-user class="text-lg text-bold-blue" />
              </span>
            </div>
          </div>
          <div class=" max-xl:hidden xl:ml-4">
            <button class="h-full text-white rounded bg-bold-blue">
              <span class="flex items-center gap-2 px-16 py-2 xl:px-10 ">
                <icon-search />
                <span>Найти</span>
              </span>
            </button>
          </div>
        </div>
        <div
          class="mt-20 lg:hidden max-lg:flex max-lg:w-full max-sm:mt-44 max-sm:mx-1"
        >
          <button class="h-full text-white rounded bg-bold-blue max-lg:w-full">
            <span
              class="flex items-center gap-2 px-16 py-2 max-lg:justify-center"
            >
              <icon-search />
              <span>Найти </span>
            </span>
          </button>
        </div>
        <div class="flex justify-between mt-4 max-lg:flex-col gap-y-2">
          <span
            class="flex items-center h-10 gap-2 px-2 text-sm bg-white border rounded-lg max-lg:w-full max-lg:justify-center"
          >
            <icon-locs class="text-lg text-light-dark" />
            <input
              type="text"
              placeholder="Составить сложный маршрут"
              class="w-48 h-full outline-none"
            />
          </span>
          <div class="max-xl:flex xl:hidden max-lg:hidden">
            <button class="h-full text-white rounded bg-bold-blue">
              <span class="flex items-center gap-2 px-16 py-2">
                <icon-search />
                <span>Найти</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container flex flex-col px-5 pb-10 mx-auto mt-4 gap-y-4">
      <ticket-card />
      <ticket-card />
      <ticket-card />
      <ticket-card />
    </div>
  </div>
</template>
<style lang=""></style>
