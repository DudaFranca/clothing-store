<template>
   <div class="container">
      <Title :shadowTitle="shadowTitle" :frontTitle="frontTitle" />

      <div class="grid md:grid-cols-2">
         <div class="m-3 p-3 rounded-xl bg-[#FFCB33] text-[#CC7429] text-center overflow-hidden group">
            <div class="transition-transform duration-300 ease-in-out group-hover:scale-110">
               <p class="font-bold mt-8">Discounts are waiting for you!</p>
               <p class="text-xl font-black mt-5">Only Today</p>
               <p class="text-5xl font-black mt-4">20% OFF</p>
               <p class="text-xl font-black mt-4">Dresses & Sweatshirts</p>
               <Button :nameBtn="btnFirst.nameBtn" :classBtn="btnFirst.classBtn" />
            </div>
         </div>
   
         <div v-for="banner in banners" :key="banner.id" class="m-3 rounded-xl overflow-hidden group">
            <div class="bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110" :class="banner.img">
               <div class="py-20 rounded-xl text-white text-center transparentBlack">
                  <p class="text-xl font-black mt-5">{{ banner.first }}</p>
                  <p class="text-5xl font-black mt-10">{{ banner.second }}</p>
                  <Button :nameBtn="btnSecond.nameBtn" :classBtn="btnSecond.classBtn" />
               </div>
            </div>
         </div>
         
         <div class="grid grid-cols-2">
            <div v-for="clothe in clothes" :key="clothe.id" class="m-3 rounded-xl overflow-hidden group">
               <div class="bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110">
                  <img :src="clothe.img">
                  <div 
                     class="
                        rounded-b-lg 
                        text-black text-center 
                        bg-[#EBECF0]
                        p-5
                     "
                  >
                     <p class="text-base font-black">{{ clothe.title }}</p>
                     <p class="text-sm font-black mt-5">R$ {{ clothe.price }}</p>
                  </div>
               </div>
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
               classBtn: "transparentBlack text-white rounded-full py-5 px-7 mt-6 mb-8"
            },
            btnSecond: {
               nameBtn: "Shop Now",
               classBtn: "transparentBlack text-white rounded-full py-5 px-7 mt-10"
            },
            banners: [
               { id: 1, first: "Holiday Atmosphere", second: "Laid-Back style", img: "bg-[url('@/assets/image/banner-one.png')]" },
               { id: 2, first: "Premium Quality", second: "All Case Details", img: "bg-[url('@/assets/image/banner-two.png')]" }
            ],
            clothes: [
               { id: 1, title: "Dress with a Round Neckline & Long Sleeves", price: "120", img: "/clothing-store/src/assets/image/girl-one.jpg" },
               { id: 2, title: "Dress with a Round Neckline & Long Sleeves", price: "120", img: "/clothing-store/src/assets/image/girl-one.jpg" },
               { id: 3, title: "Dress with a Round Neckline & Long Sleeves", price: "120", img: "/clothing-store/src/assets/image/girl-one.jpg" }
            ]
         }
      }
   }
</script>

<style>
   .transparentBlack {
      background-color: rgba(0, 0, 0, 0.5);
   }
   .group:hover .group-hover\:scale-110 {
      transform: scale(1.1);
   }
</style>
