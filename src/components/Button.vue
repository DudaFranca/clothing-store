<template>
   <div>
      <button 
         :class="classBtn"
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