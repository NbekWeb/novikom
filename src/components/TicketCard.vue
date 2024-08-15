<script setup>
import IconCircle from "./icons/IconCircle.vue";
import IconDots from "./icons/IconDots.vue";
import IconTrain from "./icons/IconTrain.vue";
import IconEmail from "./icons/IconEmail.vue";

import { ref } from "vue";

const show = ref(false);

const toggleShow = () => {
  show.value = !show.value;
};

const columns = [
  { title: "Вагон", dataIndex: "vagon" },
  {
    title: "Тип вагона",
    dataIndex: "type",
  },
  {
    title: " Класс обслуживания",
    dataIndex: "class",
  },
  {
    title: " Количество мест ",
    dataIndex: "numPlace",
  },
  {
    title: "  Стоимость ",
    dataIndex: "price",
  },
  {
    title: " ",
    dataIndex: "action",
  },
];

const dataSource = [
  {
    vagon: "07",
    type: "Купе",
    class: [
      "Вагон открытого типа (плацкартный). ",
      "Кондиционер, биотуалет в вагоне. ",
      "Вагон с услугой перевозки животных",
    ],
    numPlace: ["24 места:", " 5 нижних,", "19 верхних"],
    price: "от 6370,00 баллов",
  },
  {
    vagon: "07",
    type: "Купе",
    class: [
      "Вагон открытого типа (плацкартный). ",
      "Кондиционер, биотуалет в вагоне. ",
      "Вагон с услугой перевозки животных",
    ],
    numPlace: ["24 места:", " 5 нижних,", "19 верхних"],
    price: "от 6370,00 баллов",
  },
  {
    vagon: "07",
    type: "Купе",
    class: [
      "Вагон открытого типа (плацкартный). ",
      "Кондиционер, биотуалет в вагоне. ",
      "Вагон с услугой перевозки животных",
    ],
    numPlace: ["24 места:", " 5 нижних,", "19 верхних"],
    price: "от 6370,00 баллов",
  },
  {
    vagon: "07",
    type: "Купе",
    class: [
      "Вагон открытого типа (плацкартный). ",
      "Кондиционер, биотуалет в вагоне. ",
      "Вагон с услугой перевозки животных",
    ],
    numPlace: ["24 места:", " 5 нижних,", "19 верхних"],
    price: "от 6370,00 баллов",
  },
];
</script>
<template>
  <div class="border rounded-lg p-4">
    <div class="flex items-center justify-between">
      <div class="flex-grow">
        <p class="text-light-dark text-xl font-semibold">
          804Ч Ласточка-премиум
        </p>
        <div class="flex justify-between mt-4">
          <div class="flex flex-col gap-0 text-light-dark text-sm">
            <span class="text-2xl font-medium text-bold-dark mb-2">
              06:32
            </span>
            <span> Санкт-Петербург Ладож. </span>
            <span> 18 мая, сб </span>
          </div>
          <div class="gap-2 text-light-dark text-sm flex items-center">
            <icon-circle />
            <icon-dots />
            <span>14ч20м</span>
            <icon-dots />
            <icon-train />
          </div>
          <div class="flex flex-col items-end text-light-dark text-sm gap-0">
            <span class="text-bold-dark text-2xl mb-2 font-medium">11:57 </span>
            <span>Петрозаводск-Пасс</span>
            <span>18 мая, сб</span>
          </div>
          <div
            class="flex flex-col items-end text-light-dark text-sm justify-between"
          >
            <span class="text-bold-dark text-2xl mb-2 font-medium"
              >8д 14ч 20м
            </span>
            <span class="flex gap-1 items-center">
              <icon-email />
              Электронная регистрация</span
            >
          </div>
        </div>
      </div>
      <div class="pl-6 border-l ml-4">
        <div class="flex flex-col text-xs text-light-dark gap-0">
          <span class="text-lg text-bold-dark font-semibold">
            от 113 796,00
          </span>
          <span class="-mt-2"> за всех пассажиров </span>
        </div>
        <button
          class="rounded py-2 px-10 mt-5"
          :class="show ? 'bg-main text-bold-dark' : 'text-white bg-bold-blue'"
          @click="toggleShow"
        >
          <span v-if="show">Скрыть</span>
          <span v-else>Купить</span>
        </button>
      </div>
    </div>
    <div class="pl-2 mt-6" v-if="show">
      <a-table :data-source="dataSource" :columns="columns" :pagination="false">
        <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'vagon'">
            <span class="text-bold-dark font-bold">{{ text }}</span>
          </template>
          <template v-if="column.dataIndex === 'type'">
            <span class="text-light-dark">{{ text }}</span>
          </template>
          <template v-if="column.dataIndex === 'class'">
            <p class="text-light-dark mb-0" v-for="(val, i) of text" :key="i">
              {{ val }}
            </p>
          </template>
          <template v-if="column.dataIndex === 'numPlace'">
            <p class="text-light-dark mb-0" v-for="(val, i) of text" :key="i">
              {{ val }}
            </p>
          </template>
          <template v-if="column.dataIndex === 'price'">
            <span class="text-bold-dark font-bold">{{ text }}</span>
          </template>
          <template v-if="column.dataIndex === 'action'">
            <a-button
              class="border-bold-blue/80 text-bold-blue/80 hover:!border-bold-blue hover:!text-bold-blue font-semibold"
              >Выбрать места</a-button
            >
          </template>
        </template>
      </a-table>
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
</style>
