<template>
   <div>
      <Title :shadowTitle="shadowTitle" :frontTitle="frontTitle" />

      <div class="m-3 p-3 rounded-xl bg-[#FFCB33] text-[#CC7429] text-center ">
         <p class="font-bold mt-8">Discounts are waiting for you!</p>
         <p class="text-xl font-black mt-5">Only Today</p>
         <p class="text-5xl font-black mt-4">20% OFF</p>
         <p class="text-xl font-black mt-4">Dresses & Sweatshirts</p>
         <Button :nameBtn="btnFirst.nameBtn" :classBtn="btnFirst.classBtn" />
      </div>

      <div v-for="banner in banners" :key="banner.id">
         <div class="m-3 rounded-xl bg-cover" :class="banner.img">
            <div class="py-20 rounded-xl text-white text-center transparentBlack">
               <p class="text-xl font-black mt-5">{{ banner.first }}</p>
               <p class="text-5xl font-black mt-10">{{ banner.second }}</p>
               <Button :nameBtn="btnSecond.nameBtn" :classBtn="btnSecond.classBtn" />
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import Title from '../components/Title.vue';
   import Button from '../components/Button.vue';

   export default {
      name: 'Home',
      components: {
         Title,
         Button
      },
      data() {
         return {
            shadowTitle: "New",
            frontTitle: "Women's Clothing",
            btnFirst: {
               nameBtn: "Shop Now",
               classBtn: "bg-black text-white rounded-full py-5 px-7 mt-6 mb-8"
            },
            btnSecond: {
               nameBtn: "Shop Now",
               classBtn: "transparentBlack text-white rounded-full py-5 px-7 mt-10"
            },
            banners: [
               { id: 1, first: "Holiday Atmosphere", second: "Laid-Back style", img: "bg-[url('@/assets/image/banner-one.png')]" },
               { id: 2, first: "Premium Quality", second: "All Case Details", img: "bg-[url('@/assets/image/banner-two.png')]" }
            ]
         }
      }
   }
</script>

<style>
   .transparentBlack{
      background-color: rgba(0, 0, 0, 0.5);
   }
   .transparentPhoto{
      background-color: rgba(0, 0, 0, 0.2);
   }
</style>
