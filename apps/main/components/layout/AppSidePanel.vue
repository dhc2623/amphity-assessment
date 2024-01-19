<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  computed,
  ref,
  onMounted,
  onBeforeUnmount,
} from "vue";
import { useRoute } from "vue-router";
import { menuItems as initialMenuItems } from "../../constants/side-menu";
import { useAuthStore } from "../../store/auth";

interface MenuItem {
  id: number;
  label: string;
  route: string;
  active: boolean;
  color: string;
  activeColor: string;
}

const route = useRoute();
const authStore = useAuthStore();
const user = ref("");

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const { modelValue } = defineProps<{
  modelValue: boolean;
}>();

const menuItems: MenuItem[] = initialMenuItems.map((item) => ({
  ...item,
  active: item.route === `${route.path}`, // Initially set Dashboard as active
  color: "black",
  activeColor: "blue",
}));

const value = computed({
  get: () => modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

const isMobile = ref<boolean>(false);

const handleResize = () => {
  isMobile.value = window.innerWidth < 768; // Adjust the breakpoint as needed
};

onMounted(() => {
  localStorage.setItem("owner-name", authStore.user?.name || "");
  if (localStorage.getItem("owner-name")) {
    user.value = localStorage.getItem("owner-name");
  }

  handleResize();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const handleItemClick = (clickedItem: MenuItem) => {
  // Close the drawer by setting modelValue to false
  if (
    localStorage.getItem("owner-name") !==
    localStorage.getItem("clicked-owner-name")
  ) {
    localStorage.removeItem("clicked-owner-name");
  }

  emit("update:modelValue", false);

  // Update the active state of menu items
  menuItems.forEach((menuItem) => {
    menuItem.active = menuItem === clickedItem;
  });
};
</script>

<template>
  <!-- <div v-if="authStore.isLoggedIn"> -->
  <div>
    <!-- Desktop Navigation Bar -->
    <div
      v-if="!isMobile"
      class="desktop-navbar"
    >
      <div class="navbar-content">
        <ul className="from-primary-700 d-flex rounded-md bg-gradient-to-r">
          <li
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            :class="{
              active: menuItem.active,
              'cursor-pointer items-center justify-center px-6 py-2 text-xl font-bold text-white hover:text-white': true,
            }"
          >
            <!-- Close the drawer when a menu item is clicked -->
            <router-link
              :to="menuItem.route"
              :style="{
                color: menuItem.active ? menuItem.activeColor : menuItem.color,
              }"
              @click="handleItemClick(menuItem)"
              >{{ menuItem.label }}</router-link
            >
          </li>
        </ul>
      </div>

      <div class="logout-btn">
        <strong>{{ user }}</strong>
        <MBtn
          variant="text"
          color="error"
          @click="authStore.logout"
        >
          Logout
        </MBtn>
      </div>
    </div>

    <!-- Mobile Side Panel -->
    <MSidePanel
      v-model="value"
      mobileOnly
    >
      <template #sidepanel>
        <ul>
          <li
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            :class="{
              active: menuItem.active,
              'cursor-pointer items-center justify-center rounded-md bg-gradient-to-r from-primary-700 px-6 py-2 text-xl font-bold text-white hover:text-white': true,
            }"
          >
            <!-- Close the drawer when a menu item is clicked -->
            <router-link
              :to="menuItem.route"
              :style="{
                color: menuItem.active ? menuItem.activeColor : menuItem.color,
              }"
              @click="handleItemClick(menuItem)"
              >{{ menuItem.label }}</router-link
            >
          </li>
        </ul>
        <div class="logout-btn">
          <MBtn
            variant="text"
            color="error"
            @click="authStore.logout"
          >
            Logout
          </MBtn>
        </div>
      </template>
      <slot></slot>
    </MSidePanel>
  </div>
  <!-- <div v-else><router-link :to="{ name: 'index' }"></router-link></div> -->
</template>

<style scoped>
.active {
  background-color: #f0f0f0;
}
.d-flex {
  display: flex;
  float: right;
}
.desktop-navbar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
}
.navbar-content {
  margin-right: 1rem;
}
.logout-btn {
  margin-top: 1rem;
}
</style>
