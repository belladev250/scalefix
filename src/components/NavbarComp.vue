<template>
    <div class="overflow-x-hidden">
      <!-- Desktop and Mobile Navbar Container -->
      <div class="fixed z-50 top-0 left-0 w-full bg-white/2 backdrop-blur-md border-b border-white/20 shadow-sm text-white">
        <!-- Desktop Navbar -->
        <div class="hidden md:flex justify-between items-center p-8 px-8">
          <div class="ml-12 mt-2">
            <img src="../assets/scalefixLogo.svg" class="h-[5vh]" alt="Scalefix Logo">
          </div>
          
          <ul class="flex space-x-10 mt-4">
            <li 
              v-for="(item, index) in navItems" 
              :key="index"
              @click="scrollToSection(item.id)"
              class="text-white text-md font-helvetica cursor-pointer relative hover:text-white transition-colors duration-300 group"
            >
              {{ item.label }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
          
          <div class="mr-20">
            <a href="https://calendly.com/bayinganaalain" target="_blank">
              <button class="bg-violet text-white text-md rounded-sm font-helvetica h-[6vh] px-4 hover:bg-violet/90 transition-colors duration-300">
                Book a consultation call
              </button>
            </a>
          </div>
        </div>
  
        <!-- Mobile Navbar -->
        <div class="overflow-x-hidden md:hidden">
          <div class="flex justify-between items-center p-4">
            <div class="ml-4">
              <img src="../assets/scalefixLogo.svg" class="h-[3vh]" alt="Scalefix Logo">
            </div>
            
            <!-- Hamburger Button -->
         
                <button 
                  @click="toggleMobileMenu"
                  class="relative w-8 h-8 focus:outline-none"
                  aria-label="Toggle Menu"
                >
                  <span
                    :class="`absolute left-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 transition-all duration-300 ${
                      isMobileMenuOpen 
                        ? 'top-1/2 -translate-y-1/2 rotate-45' 
                        : 'top-2'
                    }`"
                  ></span>
                  <span
                    :class="`absolute top-1/2 left-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`"
                  ></span>
                  <span
                    :class="`absolute left-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 transition-all duration-300 ${
                      isMobileMenuOpen 
                        ? 'top-1/2 -translate-y-1/2 -rotate-45' 
                        : 'top-6'
                    }`"
                  ></span>
                </button>
           
          </div>
  
          <!-- Mobile Menu -->
          <div 
            class="absolute w-full bg-violet transition-all duration-300 overflow-hidden"
            :class="{ 'max-h-96': isMobileMenuOpen, 'max-h-0': !isMobileMenuOpen }"
          >
            <ul class="p-4 space-y-4">
              <li 
                v-for="(item, index) in navItems" 
                :key="index"
                @click="scrollToSectionMobile(item.id)"
                class="text-white text-md font-helvetica cursor-pointer hover:text-white transition-colors duration-300"
              >
                {{ item.label }}
              </li>
            </ul>
            <div class="p-4">
              <a href="https://calendly.com/bayinganaalain" target="_blank" class="block">
                <button class="w-full bg-white text-violet text-md rounded-sm font-helvetica py-3 hover:bg-violet/90 transition-colors duration-300">
                  Book a consultation call
                </button>
              </a>
            </div>
          </div>
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
            ],
            isMobileMenuOpen: false,

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
        },

        toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },

    scrollToSectionMobile(id) {
      this.toggleMobileMenu()
      setTimeout(() => {
        this.scrollToSection(id)
      }, 300)
    }

    }

}
</script>

<style scoped>

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>