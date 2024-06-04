<template>
   <div>
      <button 
         :class="classBtn"
         class="hover:bg-black"
         type="button"
      >
         {{nameBtn}}
      </button>
   </div>
</template>

<script>
   export default {
      name: 'Button',
      props: {
         nameBtn: {
            type: String,
            required: true
         },
         classBtn: {
            type: String,
            required: true
         }
      }
   }
</script>