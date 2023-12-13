<template>
    <div class="min-h-screen w-screen flex flex-col bg-slate-600">
        <nav>
            <div class="max-w-full flex flex-wrap items-center justify-between mx-auto md:p-4 md:pr-0 md:pl-0 pr-4 pl-2 md:h-full h-full bg-slate-600">
                <div class="flex items-center space-x-3 rtl:space-x-reverse md:pl-4">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-slate-50">Dignaran</span>
                </div>
                <div class="flex md:order-2">
                    <button type="button"  data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-white dark:text-gray-400 hover:bg-gray-500 rounded-lg text-sm p-2.5 me-1">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                    <div class="relative hidden md:block">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span class="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" class="block md:w-[90%] w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 pr-2" placeholder="Search...">
                    </div>
                    <button @click="navStore.showNavar" data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-500" aria-controls="navbar-search" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 z-80 h-full" id="navbar-search"
                :class="{ visible: navStore.navarState }">
                    <div class="relative mt-3 md:hidden">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        </div>
                        <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
                    </div>
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg transparent md:space-x-20 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                        <router-link to="/" class="block py-2 px-3 text-white  rounded hover:bg-gray-100 hover:text-gray-500 md:hover:bg-transparent md:hover:text-blue-300 md:p-0 md:dark:hover:text-blue-500">Home</router-link>
                        </li>
                        <li>
                        <a href="#about" class="block py-2 px-3 text-white rounded hover:bg-gray-100 hover:text-gray-500 md:hover:bg-transparent md:hover:text-blue-300 md:p-0 md:dark:hover:text-blue-500">About</a>
                        </li>
                        <li>
                        <a href="#portfolio" class="block py-2 px-3 text-white rounded hover:bg-gray-100 hover:text-gray-500 md:hover:bg-transparent md:hover:text-blue-300 md:p-0  md:dark:hover:text-blue-500">Portfolio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="flex-grow w-full max-h-full flex flex-col items-center justify-between mx-auto">
            <div class="my-auto mx-auto md:h-[80%] h-full md:w-[500px] w-full md:mt-20 p-4 bg-slate-200 rounded-3xl">
                <div id="timer" class="flex items-center justify-center rounded-full mx-auto text-[30px] bg-slate-600 text-white w-[200px] h-[200px] border-2 border-slate-200 text-center overflow-hidden">
                    {{ formattedTime }}
                </div>
                <div class="border-2 border-slate-600 rounded-t-full w-full h-0"></div>
                <div class="text-slate-400 mt-10 flex flex-col md:flex-row items-center justify-center">
                    <label for="duration" class="md:mr-4">Set Timer (seconds):</label>
                    <input type="number" id="duration" v-model="state.userInput" min="1" class="text-center rounded-full w-80 h-10 md:w-auto" />
                </div>
                <div class="flex flex-row items-center justify-between md:mt-10 mt-4">
                    <button @click="resetTimer" class="md:mr-2 bg-blue-500 text-white w-40 h-10 rounded-full">
                        Reset
                    </button>
                    <button @click="startTimer" class="md:mr-2 bg-green-500 text-white w-40 h-10 rounded-full">
                        Start
                    </button>
                    <button @click="stopTimer" class="md:ml-2 bg-red-500 text-white w-40 h-10 rounded-full">
                        Stop
                    </button>
                </div>            
            </div>
        </div>
        <footer class="text-center lg:text-left border-t-2 border-gray-500 text-white">
            <div class="p-4 text-center">
                2023-2014 : 
                <a href="#">BSIT 4A</a>
            </div>
        </footer>
    </div>
</template>
<script setup>
import { useNavarStore } from '../stores/navStore';
import { ref, reactive, computed, watchEffect } from 'vue';

const navStore = useNavarStore();
const state = reactive({
  duration: ref(0),
  timerId: ref(null),
  userInput: ref(0),
  initialRun: true
});

const formattedTime = computed(() => {
  const minutes = Math.floor(state.duration / 60);
  const seconds = state.duration % 60;
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

const timerExpired = () => {
  alert('Timer Expired!');
  state.userInput = '0';
};

watchEffect(() => {
  if (state.duration === 0) {
    clearInterval(state.timerId);
    timerExpired();
  }
});

const startTimer = () => {
  state.duration = parseInt(state.userInput, 10);

  if (isNaN(state.duration) || state.duration <= 0) {
    alert('Please enter a valid positive number.');
    return;
  }

  state.timerId = setInterval(() => {
    if (state.duration > 0) {
      state.duration--;
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(state.timerId);
};

const resetTimer = () => {
    state.duration = 0;
    clearInterval(state.timerId);
};
</script>
<style scoped>
.visible {
  display: block !important;
}
</style>