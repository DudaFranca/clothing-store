<template>
   <div>
      <Title :shadowTitle="shadowTitle" :frontTitle="frontTitle" />

      <div class="m-3 p-3 rounded-xl bg-[#FFCB33] text-[#CC7429] text-center ">
         <p class="font-bold">Discounts are waiting for you!</p>
         <p class="text-xl font-black ">Only Today</p>
      </div>
   </div>
</template>


<script>
   import Title from '../components/Title.vue';

   export default {
      name: 'Home',
      components: {
         Title
      },
      data() {
         return {
            shadowTitle: "New",
            frontTitle: "Women's Clothing"
         }
      }
   }
</script>