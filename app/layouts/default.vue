<template>
  <div class="grid grid-rows-[auto_1fr] sm:grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1 h-screen">
    <div class="overflow-y-auto bg-white 
                order-1 md:order-2
                h-[70vh] sm:h-[40vh] md:h-full">
      <About />
    </div>
    <div class="overflow-y-auto bg-gray-500 
                order-2 md:order-1
                h-[30vh] sm:h-[60vh] md:h-full">
      <slot />
    </div>
  </div>
</template>