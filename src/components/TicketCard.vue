<script setup>
import IconCircle from "./icons/IconCircle.vue";
import IconDots from "./icons/IconDots.vue";
import IconTrain from "./icons/IconTrain.vue";
import IconEmail from "./icons/IconEmail.vue";

import KupeCard from "./KupeCard.vue";

import { ref } from "vue";

const show = ref(false);
const selectPlace = ref(-1);

const toggleShow = () => {
  show.value = !show.value;
};

const toggleSelectPlace = (i) => {
  if (selectPlace.value == i) {
    selectPlace.value = -1;
  } else {
    selectPlace.value = i;
  }
};

const column = {
  vagon: "Вагон",
  type: "Тип вагона",
  class: " Класс обслуживания",
  numPlace: " Количество мест",
  price: "Стоимость",
  action: "",
};

const dataSource = [
  {
    vagon: "07",
    type: "Купе",
    class:
      "Вагон открытого типа (плацкартный). Кондиционер, биотуалет в вагоне.Вагон с услугой перевозки животных ",
    numPlace: "24 места : 5 нижних , 19 верхних",
    price: "от 6370,00 баллов",
  },
  {
    vagon: "07",
    type: "Купе",
    class:
      "Вагон открытого типа (плацкартный). Кондиционер, биотуалет в вагоне.Вагон с услугой перевозки животных ",
    numPlace: "24 места : 5 нижних , 19 верхних",
    price: "от 6370,00 баллов",
  },
  {
    vagon: "07",
    type: "Купе",
    class:
      "Вагон открытого типа (плацкартный). Кондиционер, биотуалет в вагоне.Вагон с услугой перевозки животных ",
    numPlace: "24 места : 5 нижних , 19 верхних",
    price: "от 6370,00 баллов",
  },
  {
    vagon: "07",
    type: "Купе",
    class:
      "Вагон открытого типа (плацкартный). Кондиционер, биотуалет в вагоне.Вагон с услугой перевозки животных ",
    numPlace: "24 места : 5 нижних , 19 верхних",
    price: "от 6370,00 баллов",
  },
];
</script>
<template>
  <div class="p-6 border rounded-lg border-bor max-xl:p-4">
    <div class="flex items-center justify-between max-xl:hidden">
      <div class="flex-grow">
        <p class="font-bold sm:text-sm text-light-dark max-sm:text-base">
          804Ч <span class="max-sm:text-bold-dark"> асточка-премиум</span>
        </p>
        <div class="flex mt-4">
          <div class="flex flex-col gap-0 text-sm text-light-dark pr-[45px]">
            <span class="mb-2 text-xl font-medium text-bold-dark"> 06:32 </span>
            <span> Санкт-Петербург Ладож. </span>
            <span> 18 мая, сб </span>
          </div>
          <div
            class="flex items-center gap-2 text-sm text-light-dark pr-[100px]"
          >
            <icon-circle />
            <icon-dots />
            <span>14ч20м</span>
            <icon-dots />
            <icon-train />
          </div>
          <div
            class="flex flex-col items-end gap-0 text-sm text-light-dark pr-[60px]"
          >
            <span class="mb-2 text-xl font-medium text-bold-dark">11:57 </span>
            <span>Петрозаводск-Пасс</span>
            <span>18 мая, сб</span>
          </div>
          <div
            class="flex flex-col items-end justify-between text-sm text-light-dark"
          >
            <span class="mb-2 text-xl font-medium text-bold-dark"
              >8д 14ч 20м
            </span>
            <a-popover placement="bottom" class="">
              <template #content>
                <p class="mb-0 max-w-[230px] text-xs">
                  Доступна электронная регистрация. С ней для посадки в поезд
                  понадобится только
                </p>
              </template>
              <span
                class="flex items-center gap-1 text-xs underline-offset-1 underline"
              >
                <icon-email />
                Электронная регистрация</span
              >
            </a-popover>
          </div>
        </div>
      </div>
      <div class="pl-[34px] ml-[10px] border-l">
        <div class="flex flex-col gap-0 text-xs text-light-dark">
          <span class="text-2xl font-semibold text-bold-dark">
            от 113 796,00
          </span>
          <span class="-mt-1 text-xs"> за всех пассажиров </span>
        </div>
        <button
          class="w-[169px] py-2 mt-5 text-base border rounded-lg border-bold-blue"
          :class="show ? 'bg-main text-bold-dark' : 'text-white bg-bold-blue'"
          @click="toggleShow"
        >
          <span v-if="show">Скрыть</span>
          <span v-else>Купить</span>
        </button>
      </div>
    </div>
    <div class="xl:hidden">
      <button
        class="px-10 py-2 mb-4 text-base border rounded max-sm:w-full border-bold-blue"
        :class="show ? 'text-white bg-bold-blue ' : ' hidden'"
        @click="toggleShow"
      >
        <span>от 113 796,00 </span>
      </button>
      <div class="flex items-center justify-between">
        <p class="mb-0 text-xl font-semibold text-light-dark max-sm:text-base">
          804Ч <span class="text-bold-dark"> асточка-премиум</span>
        </p>
        <a-popover placement="bottomRight" class="">
          <template #content>
            <p class="mb-0 max-w-[200px] text-xs">
              Доступна электронная регистрация. С ней для посадки в поезд
              понадобится только
            </p>
          </template>
          <span class="flex items-center gap-1 text-base">
            <icon-email class="max-sm:text-xl" />
            <span class="max-sm:hidden"> Электронная регистрация </span>
            <span class="sm:hidden"> Эл.рег. </span>
          </span>
        </a-popover>
      </div>
      <div
        class="flex justify-between mt-2 text-base font-semibold max-sm:gap-1 text-bold-dark sm:gap-4"
      >
        <span>06:32</span>
        <span
          class="flex items-center flex-grow gap-1 text-xs font-normal text-light-dark"
        >
          <span class="min-w-16 h-[1px] bg-light-dark/60 flex-grow"></span>
          <span>14ч20м</span>
          <span class="min-w-16 h-[1px] bg-light-dark/60 flex-grow"></span>
        </span>
        <span>09:32</span>
      </div>
      <div
        class="flex justify-between gap-3 mt-2 text-xs text-light-dark max-sm:gap-2"
      >
        <p>Санкт-Петербург, Санкт-Петербург Ладож.</p>
        <p>Санкт-Петербург, Санкт-Петербург Ладож.</p>
      </div>
      <button
        class="px-10 py-2 mt-5 text-base border rounded max-sm:w-full border-bold-blue"
        :class="show ? 'hidden' : 'text-white bg-bold-blue '"
        @click="toggleShow"
      >
        <span>от 113 796,00 </span>
      </button>
    </div>
    <div class="flex flex-col pl-2 mt-[70px] gap-y-0 max-lg:hidden" v-if="show">
      <a-row
        class="flex justify-between px-4 py-2 text-sm rounded-lg bg-main text-light-dark"
      >
        <a-col class="w-[76px]">
          {{ column.vagon }}
        </a-col>
        <a-col class="w-[100px]">
          {{ column.type }}
        </a-col>
        <a-col class="w-[255px] pr-5">
          {{ column.class }}
        </a-col>
        <a-col class="w-[155px] pr-9">
          {{ column.numPlace }}
        </a-col>
        <a-col class="w-[130px] pr-5">
          {{ column.price }}
        </a-col>
        <a-col class="w-[162px]">
          {{ column.action }}
        </a-col>
      </a-row>

      <div class="">
        <div v-for="(row, i) of dataSource" :key="i">
          <a-row
            class="flex justify-between px-4 pb-4 text-sm bg-white text-light-dark"
            :class="i == 0 ? 'pt-[23px]' : 'border-t pt-4'"
          >
            <a-col class="font-bold text-bold-dark w-[76px]">
              {{ row.vagon }}
            </a-col>
            <a-col class="text-bold-dark w-[100px]">
              {{ row.type }}
            </a-col>
            <a-col class="w-[255px] pr-5">
              {{ row.class }}
            </a-col>
            <a-col class="w-[155px] pr-9">
              <p class="h-full mb-0">
                {{ row.numPlace }}
              </p>
            </a-col>
            <a-col class="w-[130px] pr-5">
              <p>
                {{ row.price }}
              </p>
            </a-col>
            <a-col class="w-[162px]">
              <a-button
                class="border-bold-blue/80 text-bold-blue/80 hover:!border-bold-blue hover:!text-bold-blue font-semibold"
                @click="toggleSelectPlace(i)"
                >Выбрать места</a-button
              >
            </a-col>
          </a-row>

          <kupe-card v-if="selectPlace == i" />
        </div>
      </div>
    </div>
    <div class="flex flex-col mt-4 text-sm lg:hidden gap-y-2" v-if="show">
      <div
        v-for="(col, i) of dataSource"
        :key="i"
        class="p-4 px-4 border rounded-lg"
      >
        <div class="flex justify-between text-sm font-semibold text-bold-dark">
          <span class="flex gap-1">
            <span class="">{{ col.vagon }}</span>
            <span class="font-medium text-light-dark">{{ col.type }}</span>
          </span>
          <p clas="mb-0 ">{{ col.price }}</p>
        </div>
        <p class="mb-2 text-sm text-light-dark">
          {{ col.class }} {{ col.numPlace }}
        </p>
        <a-button
          class="border-bold-blue/80 text-bold-blue/80 hover:!border-bold-blue hover:!text-bold-blue font-semibold max-sm:w-full mt-2"
          @click="toggleSelectPlace(i)"
          >Выбрать места</a-button
        >
        <kupe-card v-if="selectPlace == i" />
      </div>
    </div>
  </div>
</template>
<style>
.ant-table-wrapper .ant-table-thead > tr > th,
:where(.css-dev-only-do-not-override-19iuou).ant-table-wrapper
  .ant-table-thead
  > tr
  > td {
  font-weight: 400;
  background: #f4f7ff;
}
.ant-table-wrapper .ant-table-thead > tr > th {
  padding: 8px 16px;
}
.ant-popover .ant-popover-inner {
  background: #f4f7ff;
}
.ant-popover .ant-popover-arrow:before {
  background: #f4f7ff;
}
</style>
