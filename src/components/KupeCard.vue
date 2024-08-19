<script setup>
import IconCop from "./icons/IconCop.vue";
import IconAngle from "./icons/IconAngle.vue";

import { ref } from "vue";

const selected = ref(0);
const women = ref(false);
const men = ref(false);
const even = ref(false);
const all = ref(true);

const handleSelect = (i) => {
  selected.value = i;
};
</script>

<template>
  <div class="my-4">
    <div class="relative pb-2 overflow-y-auto">
      <img src="@/assets/img/kupe.svg" class="h-[149px] w-auto min-w-[900px]" />
      <div class="absolute top-0 flex border-t-2 left-12 border-light-grey">
        <div
          class="flex items-center justify-center w-10 h-20 border-l-4 border-r-2 text-light-grey border-light-grey"
        >
          <span>WS</span>
        </div>
        <div
          class="flex items-center justify-center w-10 h-20 text-xl text-light-grey border-x-2 border-light-grey"
        >
          <icon-cop class="text-light-blue" />
        </div>

        <div
          v-for="i of 9"
          :key="i"
          class="w-[76px] h-20 text-light-grey border-x-2 border-light-grey flex gap-1 items-center bg-white px-1 justify-center"
        >
          <div
            class="flex flex-col items-center justify-between px-1 py-2 text-sm rounded min-w-7 group text-light-blue hover:bg-bold-blue hover:text-white"
            :class="selected == 2 * i - 1 ? 'bg-bold-blue' : 'bg-main'"
            @click="handleSelect(2 * i - 1)"
          >
            <icon-angle
              class="group-hover:opacity-0"
              :class="selected == 2 * i - 1 ? 'opacity-0' : ''"
            />
            <span
              class="text-lg group-hover:text-white"
              :class="selected == 2 * i - 1 ? 'text-white' : 'text-light-dark'"
              >{{ 2 * i - 1 }}</span
            >
            <icon-angle
              class="rotate-180 group-hover:opacity-0"
              :class="selected == 2 * i - 1 ? 'opacity-0' : ''"
            />
          </div>
          <div
            class="flex flex-col items-center justify-between px-1 py-2 text-sm rounded min-w-7 text-light-blue hover:bg-bold-blue hover:text-white group"
            :class="selected == 2 * i ? 'bg-bold-blue' : 'bg-main'"
            @click="handleSelect(2 * i)"
          >
            <icon-angle
              class="group-hover:opacity-0"
              :class="selected == 2 * i ? 'opacity-0' : ''"
            />
            <span
              class="text-lg group-hover:text-white"
              :class="selected == 2 * i ? 'text-white' : 'text-light-dark'"
              >{{ 2 * i }}</span
            >
            <icon-angle
              class="rotate-180 group-hover:opacity-0"
              :class="selected == 2 * i ? 'opacity-0' : ''"
            />
          </div>
        </div>
        <div
          class="flex items-center justify-center w-10 h-20 border-l-2 border-r-4 text-light-grey border-light-grey"
        >
          <span>WS</span>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <div class="flex flex-wrap gap-4 mb-2 max-sm:justify-center">
        <span class="women">
          <a-checkbox v-model:checked="women">Женское купе</a-checkbox>
        </span>
        <span class="men">
          <a-checkbox v-model:checked="men">Мужское купе</a-checkbox>
        </span>
        <span class="even">
          <a-checkbox v-model:checked="even">Смешаное купе</a-checkbox>
        </span>
      </div>
      <div class="mt-4">
        <span class="all">
          <a-checkbox v-model:checked="all">
            С бельём, включено в стоимость билета
          </a-checkbox>
        </span>
      </div>
    </div>
  </div>
</template>
<style>
.women .ant-checkbox-checked .ant-checkbox-inner,
.women
  .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
  .ant-checkbox-checked:not(.ant-checkbox-disabled)
  .ant-checkbox-inner,
.women
  .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
  .ant-checkbox-inner,
.women
  :where(.css-dev-only-do-not-override-19iuou).ant-checkbox:not(
    .ant-checkbox-disabled
  ):hover
  .ant-checkbox-inner,
.women .ant-checkbox-checked .ant-checkbox-inner,
.women .ant-checkbox .ant-checkbox-inner {
  background-color: #faa1cc;
  border-color: #faa1cc;
}
.men .ant-checkbox-checked .ant-checkbox-inner,
.men
  .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
  .ant-checkbox-checked:not(.ant-checkbox-disabled)
  .ant-checkbox-inner,
.men
  .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
  .ant-checkbox-inner,
.men
  :where(.css-dev-only-do-not-override-19iuou).ant-checkbox:not(
    .ant-checkbox-disabled
  ):hover
  .ant-checkbox-inner,
.men .ant-checkbox-checked .ant-checkbox-inner,
.men .ant-checkbox .ant-checkbox-inner {
  background-color: #d8dff3;
  border-color: #d8dff3;
}
.even .ant-checkbox-checked .ant-checkbox-inner,
.even
  .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
  .ant-checkbox-checked:not(.ant-checkbox-disabled)
  .ant-checkbox-inner,
.even
  .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
  .ant-checkbox-inner,
.even
  :where(.css-dev-only-do-not-override-19iuou).ant-checkbox:not(
    .ant-checkbox-disabled
  ):hover
  .ant-checkbox-inner,
.even .ant-checkbox-checked .ant-checkbox-inner,
.even .ant-checkbox .ant-checkbox-inner {
  background-color: #b1fbb4;
  border-color: #b1fbb4;
}

.all .ant-checkbox-checked .ant-checkbox-inner,
.all
  .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
  .ant-checkbox-checked:not(.ant-checkbox-disabled)
  .ant-checkbox-inner,
.all
  .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
  .ant-checkbox-inner,
.all
  :where(.css-dev-only-do-not-override-19iuou).ant-checkbox:not(
    .ant-checkbox-disabled
  ):hover
  .ant-checkbox-inner,
.all .ant-checkbox-checked .ant-checkbox-inner,
.all .ant-checkbox .ant-checkbox-inner {
  background-color: #55246a;
  border-color: #55246a;
}

.all .ant-checkbox {
  transform: scale(1.5);
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: #d8dff3;
}

::-webkit-scrollbar-thumb {
  background: #55246a;
}

::-webkit-scrollbar-thumb:hover {
  background: #55246a;
}
</style>
