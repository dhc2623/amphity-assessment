<!-- MDatePicker.vue -->
<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps<{
  name?: string;
  placeholder?: string;
}>();

const emits = defineEmits();

const selectedDate = ref("");

const handleChange = () => {
  emits("change", selectedDate.value);
};
</script>

<template>
  <div class="relative max-w-sm">
    <!-- <div
      class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5"
    >
      <svg
        class="h-4 w-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
        />
      </svg>
    </div> -->
    <div class="relative max-w-sm">
      <div
        class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"
      >
        <svg
          class="h-4 w-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
          />
        </svg>
      </div>
      <input
        datepicker
        datepicker-autohide
        type="text"
        class="focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        placeholder="Select date"
      />
    </div>
    <!-- <input
      v-model="selectedDate"
      :name="props.name"
      datepicker
      type="text"
      :placeholder="props.placeholder || 'Select date'"
      class="focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
      @change="props.handleChange"
    /> -->
  </div>
</template>
