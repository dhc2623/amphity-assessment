<template>
  <div>
    <Menu
      as="div"
      class="relative inline-block text-left"
    >
      <div>
        <MenuButton
          class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Select Task Status
          <ChevronDownIcon
            class="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <transition
        enterActiveClass="transition ease-out duration-100"
        enterFromClass="transform opacity-0 scale-95"
        enterToClass="transform opacity-100 scale-100"
        leaveActiveClass="transition ease-in duration-75"
        leaveFromClass="transform opacity-100 scale-100"
        leaveToClass="transform opacity-0 scale-95"
      >
        <MenuItems
          class="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="py-1">
            <MenuItem
              v-for="item in menuItems"
              :key="item.id"
              v-slot="{ active }"
            >
              <a
                :href="item.link"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                ]"
                @click="handleMenuClick(item)"
              >
                {{ item.label }}
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const emit = defineEmits(["updateModelValue"]);

const props = defineProps({
  menuItems: {
    type: Array,
    default: () => [],
  },
});

const handleMenuClick = (item) => {
  console.log("Clicked item:", item);
  emit("updateModelValue", false);
  //   emit('updateModelValue')
  // Perform any other actions you need on menu item click
};
</script>
