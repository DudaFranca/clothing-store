<template>
   <div class="w-full pt-28 flex text-center justify-center">
      <div class="container">
         <div class="font-black text-9xl text-slate-100 uppercase relative">
            <h1>{{ shadowTitle }}</h1>
         </div>
         <div class="font-bold text-4xl text-primary title-all">
            <h1>{{ frontTitle }}</h1>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'Title',
      props: {
         shadowTitle: {
            type: String,
            required: true
         },
         frontTitle: {
            type: String,
            required: true
         }
      }
   }
</script>