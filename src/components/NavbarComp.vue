<template>
    <div>
            <div class=" p-8 flex fixed z-50 top-0 left-0 justify-between w-full bg-white/2 backdrop-blur-md border-b border-white/20  shadow-sm text-white p-4  ">
            <div class="ml-12 mt-2 ">
                <img src="../assets/scalefixLogo.svg" class="h-[5vh]" >
            </div>

            <ul class="flex space-x-10 mt-4">
           <li v-for="(items ,index) in navItems" :key="index" @click="scrollToSection(items.id)" 
            class="text-white text-md font-helvetica underline-animation cursor-pointer">{{items.label}}</li>

            </ul>

            <div class="mr-20 ">
                <a  href="https://calendly.com/bayinganaalain"  target="_blank" >
                <button class="bg-violet text-white text-md rounded-sm font-helvetica h-[6vh] px-4 ">Book a consultation call </button>
            </a>
            </div>
        </div>
        
    </div>
</template>

<script>

export default{
    name:"NavbarComp",

    data(){

        return{

            navItems:[
                {label:'About',id:'about-section'},
                {label:'Services',id:'services-section'},
                {label:'Testimonies',id:'testimonies-section'},
                {label:'Contacts',id:'contacts-section'},
            ]
        }
    },

    methods:{

        scrollToSection(sectionId){
            const element = document.getElementById(sectionId);
              if(element){
                element.scrollIntoView({
                    behavior:'smooth',
                    block:'start'
                })
              }
        }

    }

}
</script>

<style>
</style>