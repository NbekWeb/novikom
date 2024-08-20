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
  <div class="" >
    <div class="py-4 bg-main">
      <div class="flex flex-col items-center">
        <h2 class="text-3xl font-semibold">Aвиабилеты</h2>
        <p class="text-lg font-medium text-bold-blue">Путешествия</p>
      </div>
    </div>
    <div class="container mx-auto max-xl:px-[15px]  xl:px-0">
      <div
        class="flex items-center w-full gap-2 my-3 text-sm font-medium text-light-dark "
      >
        <span>Главная</span>
        <div class="flex items-center gap-2">
          <span class="rotate-90 text-min"><icon-chevron-up /></span>
          <span class="text-bold-dark"> Путешествия</span>
        </div>
      </div>
      <div class="px-[10px] py-4 text-sm rounded-lg bg-main">
        <div class="flex gap-3 text-bold-dark max-sm:justify-center">
          <span>Туда</span>
          <span class="underline underline-offset-4 text-light-dark"
            >Туда-Обратно</span
          >
        </div>
        <div class="flex items-center justify-between mt-4">
          <div
            class="flex w-full my-3 bg-white rounded lg:h-10 max-lg:flex-wrap border-bor max-lg:bg-transparent max-sm:border-none max-w-max"
          >
            <div
              class="relative flex flex-wrap max-sm:px-1 max-lg:w-max gap-y-2 max-sm:w-full "
            >
              <input
                type="text"
                placeholder="Станция отправления"
                class="h-10 px-4 border rounded-l-lg outline-none border-bor max-sm:w-full max-sm:rounded-xl max-sm:px-2 max-lg:border lg:w-70 max-lg:w-64"
              />
              <input
                type="text"
                placeholder="Станция прибытия"
                class="h-10 pl-5 border outline-none border-bor max-lg:rounded-r-lg max-lg:w-64 max-sm:w-full max-sm:rounded-xl max-sm:px-2 max-lg:border lg:w-70"
              /> 
              <span
                class="absolute flex items-center justify-center w-8 h-8 -ml-4 text-lg bg-white border rounded-full text-bold-blue left-1/2 top-1 border-bor max-sm:top-5 max-sm:mt-2"
              >
                <icon-two-arrow />
              </span>
            </div>
            <div
              class="flex flex-wrap h-10 max-lg:mt-4 max-lg:w-full max-lg:gap-4 max-sm:gap-2 max-sm:mt-2"
            >
              <span
                class="flex items-center justify-between  gap-2 px-4 max-sm:px-2 max-sm:mx-1 max-sm:rounded-xl h-10 border-x max-lg:bg-white border max-lg:rounded-lg max-lg:w-62 max-sm:w-full lg:w-[180px] border-bor"
              >
                <!-- <input
                  type="text"
                  placeholder="Когда"
                  class="h-full outline-none"
                /> -->
                <span class="text-light-dark"> Когда </span>
                <icon-kalendar class="text-lg text-bold-blue" />
              </span>
              <span
                class="flex items-center border-bor h-10 px-4 border lg:w-[180px] max-lg:w-62 max-sm:px-2 max-sm:mx-1 max-sm:rounded-xl max-lg:bg-white max-lg:border max-lg:rounded-lg justify-between max-sm:w-full lg:rounded-r-lg"
              >
                <!-- <input
                  type="text"
                  placeholder="1 пассажир"
                  class="h-full outline-none"
                /> -->
                <span class="text-light-dark"> 1 пассажир </span>
                <icon-user class="text-lg text-bold-blue" />
              </span>
            </div>
          </div>
          <div class="max-xl:hidden max-lg:flex max-md:hidden">
            <button
              class="flex h-10 text-white rounded-lg bg-bold-blue w-50 max-lg:w-40 "
            >
              <span class="flex items-center justify-center w-full h-full gap-2 gap-y-2">
                <icon-search />
                <span>Найти  </span>
              </span>
            </button>
          </div>
        </div>
        <div class="px-1 sm:hidden max-sm:flex max-sm:w-full max-sm:mt-12 ">
          <!-- max-sm:mt-44 -->
          <button class="w-full h-[43px] mb-4 text-white rounded-lg bg-bold-blue ">
            <span class="flex items-center justify-center gap-2 ">
              <icon-search />
              <span>Найти </span>
            </span>
          </button>
        </div>
        <div
          class="flex px-2 max-xl:justify-between max-sm:flex-col gap-y-2 max-lg:px-0 "
        >
          <span
            class="flex items-center h-10 gap-2 px-4 text-sm bg-white border rounded-lg max-sm:w-full max-lg:justify-center text-light-dark border-bor"
          >
            <icon-locs class="text-lg" />
            <!-- <input
              type="text"
              placeholder="Составить сложный маршрут"
              class="w-48 h-full outline-none"
            /> -->
            <span> Составить сложный маршрут </span>
          </span>
          <div class="max-xl:flex xl:hidden max-lg:hidden max-md:flex max-sm:hidden">
            <button class="h-full text-white rounded-lg bg-bold-blue w-50">
              <span class="flex items-center gap-2 px-16 ">
                <icon-search />
                <span>Найти  </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container flex flex-col max-xl:px-[15px] pb-10 mx-auto mt-4 xl:gap-y-6 max-xl:gap-y-4 xl:px-0">
      <ticket-card />
      <ticket-card />
      <ticket-card />
      <ticket-card />
    </div>
  </div>
</template>
<style lang=""></style>
