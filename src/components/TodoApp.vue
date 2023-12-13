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
        <div class="md:mt-0 mt-10 flex-grow w-full max-h-full flex flex-col items-center justify-between mx-auto">
            <div class="my-auto mx-auto md:h-80 h-full md:w-[500px] w-full md:mt-20 p-4">
                <div class="flex items-center space-x-2 mb-4">
                    <input type="text" class="border border-gray-300 p-2 rounded-md w-full" v-model="task" placeholder="Add a new task" />
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-md" @click="addTask">Add</button>
                </div>
                <input type="text" class="border border-gray-300 p-2 rounded-md w-full mb-4" placeholder="Search tasks" v-model="searchQuery"/>
                <div class="max:w-80 w-full max-h-80 overflow-y-scroll text-center">
                    <table class="table-auto w-full">
                        <thead>
                            <tr class="text-white">
                                <th class="border border-gray-300 p-2">Task</th>
                                <th class="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-gray-300" v-for="todo in filteredTodos" :key="todo.id">
                                <td class="border border-gray-300 p-2 whitespace-normal max-w-32" :class="{ check: todo.status }">{{ capitalizeFirstLetter(todo.details) }}</td>
                                <td class="border border-gray-300 p-2">
                                    <button class="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md mr-2" @click="updateData(todo.id, todo.status)">Done</button>
                                    <button class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md" @click="removeTask(todo.id)">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex mt-4 bg-white md:w-80 items-center justify-center md:ml-20">
                        <button class="header w-full h-10 text-slate-600 text-center hover:text-white hover:bg-slate-400" v-if="hasTasks" @click="clearAllTasks">
                            Clear Task
                        </button>
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
import { db } from '../firebase';
import { ref, onMounted, computed } from 'vue';
import { collection, addDoc, serverTimestamp, onSnapshot, orderBy, query, doc, deleteDoc, updateDoc, getDocs } from 'firebase/firestore';

const navStore = useNavarStore();
const task = ref('');
const todos = ref([]);
const searchQuery = ref('');
const status = ref(false);

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const addTask = async (e) => {
      e.preventDefault();
      try {
        await addDoc(collection(db, 'todo'), {
          details: task.value,
          status: status.value,
          date_created: serverTimestamp(),
        });
        task.value = '';
      } catch (e) {
        console.error('Error adding document: ', e);
      }
};

const getData = () => {
      const fsquery = query(collection(db, "todo"), orderBy('date_created','asc'));
      onSnapshot(fsquery,(querySnapshot) => {
        const newTasks = [];
        querySnapshot.forEach((doc) => {
          const datas = {
              id:doc.id,
              details:doc.data().details,
              status:doc.data().status,
            }
            newTasks.unshift(datas);
        });
        todos.value=newTasks;
      })
};

const updateData = (id, currentStatus) => {
      const fsquery = doc(db, 'todo', id);
      const newData = {
        status: !currentStatus,
      }
      updateDoc(fsquery, newData)
      .then(() => {
        console.log('Document successfully updated.');
      })
      .catch((error) => {
        console.error('Error updating document:', error);
      });
};

const removeTask = async (id) => {
      try{
        await deleteDoc(doc(db,'todo',id))
      }catch(e){
        console.log(e);
      }
};

const hasTasks = computed(()=> {
      return todos.value.length > 0;
});

const clearAllTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'todo'));
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });
        todos.value = [];
      } catch (e) {
        console.log(e);
      }
};
const filteredTodos = computed(()=> {
      return todos.value.filter(todo => {
        return todo.details.toLowerCase().includes(searchQuery.value.toLowerCase());
      });
});

onMounted(()=> {
      getData()
})
</script>
<style scoped>
.visible {
  display: block !important;
}
.overflow-y-scroll::-webkit-scrollbar {
    display: none;
    width: 0px;
  }
  .overflow-y-scroll:hover::-webkit-scrollbar {
    display: block;
  }
  .overflow-y-scroll::-webkit-scrollbar-track {
    background-color: transparent;
  }
  .overflow-y-scroll::-webkit-scrollbar-thumb {
    background-color: rgb(8, 47, 73, 1);
    border-radius: 8px;
    width: 4px;
  } 
  .check {
    text-decoration: line-through;
    color: rgb(151, 151, 151);
  }
</style>