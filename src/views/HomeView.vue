<template>
    <div id="home">
      <section>
        <div class="py-8">
          <div class="mx-auto px-2 max-w-6xl text-gray-500">
            <div class="relative">
              <div class="relative z-10 grid gap-5 grid-cols-10">
                <div class="col-span-full lg:col-span-5 overflow-hidden flex relative p-8 rounded-xl bg-transparent border border-white dark:border-white dark:bg-gray-900 hover:border-dottedn">
                  <div class="size-fit m-auto relative">
                    <div class="relative flex items-center">
                      <router-link to="/todos">
                        <img src="../assets/image/todos.png" class="h-full w-full">
                      </router-link>
                    </div>
                    <h2 class="mt-6 text-center font-bold text-gray-950 dark:text-white text-xl">To Do List</h2>
                  </div>
                </div>
                <div class="col-span-full sm:col-span-3 lg:col-span-5 overflow-hidden relative p-2 rounded-xl bg-transparent border border-gray-200 dark:border-white dark:bg-gray-900 hover:border-dotted">
                  <div>
                    <router-link to="/posts">
                      <img src="../assets/image/posts.png" class="h-full w-full">
                    </router-link>
                    <div class="mt-6 text-center relative z-10 space-y-2">
                      <h2 class="text-lg font-bold text-gray-800 transition group-hover:text-purple-950 dark:text-white">Posts API</h2>
                    </div>
                  </div>
                </div>
                <div class="col-span-full sm:col-span-2 lg:col-span-6 overflow-hidden relative p-2 rounded-xl bg-transparent border border-gray-200 dark:border-white dark:bg-gray-900 hover:border-dotted">
                  <div>
                    <div class="pt-6 lg:px-6">
                      <router-link to="/albums">
                        <img src="../assets/image/albums.png" class="h-full w-full">
                      </router-link>
                    </div>
                    <div class="mt-14 text-center relative z-10 space-y-2">
                      <h2 class="text-lg font-bold text-gray-800 transition group-hover:text-purple-950 dark:text-white">Albums API</h2>
                    </div>
                  </div>
                </div>
                <div class="col-span-full lg:col-span-4 overflow-hidden relative p-10 rounded-xl bg-transparent border border-gray-200 dark:border-white dark:bg-gray-900 hover:border-dotted">
                  <div class="h-full grid sm:grid-cols-1">
                    <div class="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-4">
                      <a href="https://github.com/AzidMuhammad">
                        <img src="../assets/image/github.png" class="h-46 w-full">
                      </a>
                    </div>
                    <div class="mt-6 relative sm:-mr-[--card-padding] sm:-my-8 before:absolute before:w-px before:inset-0 before:mx-auto before:bg-gray-200 dark:before:bg-white">
                      <div class="relative space-y-6 py-6 flex flex-col justify-center h-full">
                      </div>
                    </div>
                  </div>
                  <div class="space-y-2 flex justify-start">
                    <h2 class="text-lg font-bold text-white transition group-hover:text-purple-950 dark:text-gray-600">@azidmuhammad</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  