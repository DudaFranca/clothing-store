<template>
    <div>
        <div class="flex shadow justify-between items-center font-bold p-5">
            <div class="flex items-center cursor-pointer text-xl md:mr-2">
                <!-- <span class="material-symbols-outlined">
                    menu
                </span> -->
                <h1 class="ml-5">Eletronic Store</h1>
            </div>
            <ul class="flex items-center">
                <li class="hidden lg:block">
                    <a href="">Today's Deals</a>
                </li>
                <li class="hidden mx-4 lg:block">
                    <a href="">Best Sellers</a>
                </li>
                <li class="hidden mx-4 lg:block">
                    <a href="">New Releases</a>
                </li>
            </ul>
            <ul v-if="!showInput" class="flex items-center">
                <li class="mx-4 flex justify-between items-center hover:text-primary">
                    <form action="" class="relative w-max mx-auto">
                        <input 
                            type="text" name="search" id="search" 
                            class="relative peer z-10 bg-transparent w-12 h-12 rounded-full border outline-none cursor-pointer 
                                    pl-12
                                    focus:w-full focus:border-primary focus:cursor-text focus:pl-5 focus:pr-4
                            "
                        >
                        <span class="material-symbols-outlined absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                            search
                        </span>
                    </form>
                </li>
                <li  
                    v-for="(nav, index) in navs" 
                    :key="index" 
                    class="mx-4 flex justify-between items-center"
                >
                    <a 
                        :href="nav.link" 
                        class="text-sm hover:text-secondary flex items-center cursor-pointer"
                    >
                        <span class="text-3xl material-symbols-outlined">
                            {{ nav.span }}
                        </span>
                        <span class="ml-3 hidden md:block">
                            {{ nav.name }}
                        </span>    
                    </a>
                </li>
            </ul>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navs: [
                    { name: "Accont", link: "#", span: "person" },
                    { name: "Bag", link: "#", span: "shopping_cart" }
                ],
                showInput: false,
                searchQuery: ""
            }
        },

        methods: {
            
        }
    }
</script>