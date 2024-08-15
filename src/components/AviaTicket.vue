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
        <h2 class="font-semibold text-3xl">Aвиабилеты</h2>
        <p class="text-lg text-bold-blue">Путешествия</p>
      </div>
    </div>
    <div class="container mx-auto px-5">
      <div
        class="flex gap-2 text-sm text-light-dark font-medium items-center my-3"
      >
        <span>Главная</span>
        <div class="flex gap-2 items-center">
          <span class="rotate-90 text-min"><icon-chevron-up /></span>
          <span class="text-bold-dark"> Путешествия</span>
        </div>
      </div>
      <div class="bg-main p-3 rounded-lg text-sm">
        <div class="text-bold-dark flex gap-3">
          <span>Туда</span>
          <span class="underline-offset-4 text-light-dark underline"
            >Туда-Обратно</span
          >
        </div>
        <div class="flex h-10 items-center mt-4 justify-between">
          <div
            class="my-3 border rounded border-light-dark/40 h-full bg-white flex"
          >
            <div class="h-full px-1 relative flex">
              <input
                type="text"
                placeholder="Станция отправления"
                class="h-full px-5 outline-none border-r"
              />
              <input
                type="text"
                placeholder="Станция прибытия"
                class="h-full px-5 outline-none border-l"
              />
              <span
                class="text-lg text-bold-blue absolute left-1/2 top-1 w-8 h-8 rounded-full border border-light-dark/40 flex items-center justify-center -ml-4 bg-white"
              >
                <icon-two-arrow />
              </span>
            </div>
            <span class="flex border-x px-2 items-center gap-2">
              <input
                type="text"
                placeholder="Когда"
                class="h-full outline-none"
              />
              <icon-kalendar class="text-bold-blue text-sm" />
            </span>
            <span class="flex border-l px-2 items-center gap-2">
              <input
                type="text"
                placeholder="1 пассажир"
                class="h-full outline-none"
              />
              <icon-user class="text-bold-blue text-sm" />
            </span>
          </div>
          <div>
            <button class="bg-bold-blue text-white h-full rounded">
              <span class="flex items-center py-2 px-16 gap-2">
                <icon-search />
                <span>Найти</span>
              </span>
            </button>
          </div>
        </div>
        <div class="flex mt-4">
          <span
            class="flex border px-2 items-center gap-2 h-10 bg-white rounded-lg text-sm"
          >
            <icon-locs class="text-light-dark text-lg" />
            <input
              type="text"
              placeholder="Составить сложный маршрут"
              class="h-full outline-none w-48"
            />
          </span>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-5 mt-4 pb-10 flex flex-col gap-y-4">
      <ticket-card  />
      <ticket-card  />
      <ticket-card  />
      <ticket-card  />
    </div>
  </div>
</template>
<style lang=""></style>
