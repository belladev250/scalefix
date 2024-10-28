<template>
<div class="">
    <div class="relative h-screen min-h-[400px] max-h-[670px] sm:max-h-[800px] lg:max-h-[900px] xl:max-h-[1000px]">
        <NavbarComp/>

        <img src="../assets/background.jpg" alt="Background" class="h-full w-full object-cover">
        
      
        <div class=" absolute  text-white   top-1/3   xl:1/3 ml-16 space-y-2  " >
           <p class="font-helvetica regural white-text text-md ml-2">WELCOME TO SCALEFIX,</p>
           <div class="flex space-x-2">
            <p class="text-white font-ataero Regular text-8xl ">Creative </p>
            <p class="text-violet font-ataero Regular text-8xl">Strategies,</p>
           </div>
           <div class=" flex w-full space-x-10">
            <div class="w-1/2">
            <p class="font-helvetica mt-2 text-md">Empower your brand with custom digital marketing solutions that increase visibility,
                 build strong connections with customers, and help your business grow. We use creativity and smart strategies to 
                 make sure your brand succeeds online.</p>
          </div>

            <div class="space-x-2 flex mt-12 ">
                <p class="text-white font-ataero Regular text-8xl ">Real</p>
                <p class="text-violet font-ataero Regular text-8xl ">Impact</p>
            </div>
           </div>
           
        </div>

       

  
  
      </div>
</div>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
export default{
    name:'HomePage',
    components:{
        NavbarComp
    }
}
</script>

<style>
.underline-animation {
    position: relative;
  }
  
  .underline-animation::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s ease-in-out;
  }
  
  .underline-animation:hover::after {
    width: 100%;
  }

</style>