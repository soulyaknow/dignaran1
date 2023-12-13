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
                        <a href="#home" class="block py-2 px-3 text-white  rounded hover:bg-gray-100 hover:text-gray-500 md:hover:bg-transparent md:hover:text-blue-300 md:p-0 md:dark:hover:text-blue-500">Home</a>
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
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 w-full h-full" id="home">
                <div class="bg-slate-600 h-full text-white md:block hidden">
                    <div class="flex flex-col items-center mx-auto mt-10 pt-20">
                        <h1 class="text-center mb-4 font-bold text-[50px]">Ma. Digna Dignaran</h1>
                        <div class="text-left ml-24 mb-4" id="about">
                            <p>Hello, I'm M.a Digna Dignaran, a passionate fourth-year student pursuing a Bachelor's degree in Information Technology at Cordova Public College. As a dedicated learner in the realm of technology,I have immersed myself in the dynamic world of programming.<br>
                            My journey in the field of IT has equipped me with a solid foundation in various programming languages, problem-solving skills, and a love for creating efficient and innovative solutions.
                            From tackling algorithmic challenges to developing practical applications, I find joy in turning ideas into functional code.
                            </p>
                        </div>
                        <button class="rounded-full h-10 w-32 text-white bg-blue-500 hover:text-white hover:bg-slate-400">About Me</button>
                    </div>  
                </div>
                <div class="bg-slate-600 h-full md:block hidden">
                    <div class="h-full w-full m-auto bg-slate-600">
                        <img src="../assets/p12.png" alt="image" class="mx-auto h-[500px] w-96">                        
                    </div>
                </div>
                <div class="bg-slate-600 h-full md:hidden block">
                    <div class="h-full w-full m-auto bg-slate-600 relative flex items-center justify-center">
                        <div class="absolute top-20">
                            <h1 class="text-center mb-4 font-bold text-[50px] text-white z-10">Ma. Digna Dignaran</h1>
                        </div>
                        <div class="relative">
                            <img src="../assets/p12.png" alt="image" class="mx-auto h-[500px] w-96 z-50">                        
                        </div>  
                        <div class="absolute top-60">
                            <button class="rounded-full h-10 w-32 text-white bg-blue-500 hover:text-white hover:bg-slate-400 z-60">About Me</button>
                        </div>                                             
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 w-full h-full gap-4" id="about">
                <div class="h-full w-full flex flex-col items-center mx-auto md:pl-20 md:ml-10">
                    <div class="bg-slate-700 rounded-2xl h-80 w-full my-auto md:mb-0 mb-2">
                        <img src="../assets/html.png" alt="image" class="h-20 w-30 pt-4 pl-4">
                        <h4 class="text-white pt-14 pl-4 text-[20px]">HTML</h4>
                        <p class="pl-4 pt-2 pb-4 text-slate-400 md:pb-4 md:pt-4 md:text-base">HTML is the standard markup language used to create and structure the content on the web. It consists of a set of elements that define the structure of a webpage.</p>
                    </div>
                </div>
                <div class="h-full w-full flex flex-col items-center mx-auto md:px-10">
                    <div class="bg-slate-700 rounded-2xl h-80 w-full my-auto md:mb-0 mb-2">
                        <img src="../assets/css.png" alt="image" class="h-20 w-30 pt-4 pl-4">
                        <h4 class="text-white md:pt-14 pt-4 pl-4 text-[20px]">CSS</h4>
                        <p class="pl-4 pt-2 pb-4 text-slate-400 md:pb-4 md:pt-4 md:text-base">CSS is a style sheet language that controls the presentation and layout of HTML documents. It enables the separation of content from presentation, allowing developers to define styles, such as colors, fonts, spacing, and positioning, for HTML elements.</p>
                    </div>
                </div>
                <div class="h-full w-full flex flex-col items-center mx-auto md:pr-20">
                    <div class="bg-slate-700 rounded-2xl h-80 w-full my-auto md:mr-20">
                        <img src="../assets/js.png" alt="image" class="h-20 w-30 pt-4 pl-4">
                        <h4 class="text-white pt-14 pl-4 text-[20px]">Javascript</h4>
                        <p class="pl-4 pt-2 pb-4 text-slate-400 md:pb-4 md:pt-4 md:text-base">JavaScript is a versatile scripting language that allows developers to add interactivity, manipulate the DOM (Document Object Model), and control the behavior of web pages.</p>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 w-full h-full mt-4" id="portfolio">
                <div class="h-full w-full flex flex-col items-center mx-auto">
                    <div class="h-full w-full my-auto md:mb-0">
                        <h1 class="text-center text-white pt-10">Todo App</h1>
                        <router-link to="/todoapp" class="h-full w-full m-auto bg-slate-600">
                            <img src="../assets/todo.png" alt="image" class="mx-auto h-[500px] w-96"> 
                        </router-link>                                 
                    </div>
                </div>
                <div class="h-full w-full flex flex-col items-center mx-auto">
                    <div class="h-full w-full my-auto md:mb-0">
                        <h1 class="text-center text-white pt-10">Timer App</h1>
                        <router-link to="/timerapp" class="h-full w-full m-auto bg-slate-600">
                            <img src="../assets/timer.png" alt="image" class="mx-auto h-[500px] w-96 py-16"> 
                        </router-link>                                               
                    </div>
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

const navStore = useNavarStore();
</script>
<style scoped>
.visible {
  display: block !important;
}
</style>