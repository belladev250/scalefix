<template>
<div class="h-screen relative w-full">
  <Particles
  id="tsparticles"
  :particlesInit="particlesInit"
  :particlesLoaded="particlesLoaded"
  :options="particlesOptions"
  class="absolute inset-0"
/>

    <div class="relative h-screen min-h-[400px] max-h-[670px] sm:max-h-[800px] lg:max-h-[900px] xl:max-h-[1000px] ">

        <NavbarComp/>
         <div class="absolute inset-0 z-0">
        <img src="../assets/background.jpg" alt="Background" class="h-full w-full object-cover">
      </div>
      
        <div class=" absolute  text-white   top-1/3   xl:1/3 ml-16 space-y-2  z-10" >
           <p class="font-helvetica font-bold white-text  text-md ml-2">WELCOME TO SCALEFIX,</p>
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


      <!--second sectionnnnnnnnnnnnnnnnnn-->
      <div class="bg-frame h-auto  relative z-20">
         <!-- ABOUT US SECTION -->

         <div class="flex items-center justify-center w-full p-24 space-x-4">

          <div class="space-y-4 ">
          <div class="space-y-6 w-[85vh] h-[60vh] "> 
             <p class="text-white font-helvetica text-md ">ABOUT SCALEFIX</p>
             <div class="flex text-4xl  text-white font-ataero ">
            <p>Your trusted <span class="text-violet"> partner</span> for digital  <span class="text-violet">marketing .</span></p>
           </div>
            <p class="text-white font-helvetica md:text-xl 2xl:text-2xl">
              We are a dynamic digital marketing agency dedicated to helping businesses grow and thrive in the digital landscape.
              With a team of experts in SEO, social media, content marketing, and online advertising,
              we craft customized strategies to increase visibility, engagement, and conversions.
            </p>

            <div class="">
              <button class="bg-violet text-white text-md rounded-sm font-helvetica h-[6vh] px-4 ">Book a consultation call </button>
          </div>
          </div>
          <div class="">
            <img src="../assets/hi5.jpg" class="h-[60vh] object-cover ">
          </div>
         </div>

        

        <div class="space-y-6">
          <div class="">
            <img src="../assets/woman.jpg" class="h-[60vh] object-cover">
          </div>
          <div class="">
            <img src="../assets/pc.jpg" class="h-[60vh] object-cover">
          </div>
        </div>


         </div>


      </div>
</div>
</template>

<script>
import { loadFull } from "tsparticles";
import NavbarComp from '@/components/NavbarComp.vue';

export default {
  name: 'HomePage',
  components: {
    NavbarComp,
  },
  data() {
    return {
      particlesOptions: {
        fullScreen: { enable: false },
        background: {
          color: {
            value: "transparent"  
          }
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 500
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0.3,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce"
            }
          }
        },
        interactivity: {
          detectsOn: "window", 
          events: {
          
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            }
          }
        },
        detectRetina: true
      }
    }
  },
  methods: {
    async particlesInit(engine) {
      try {
        await loadFull(engine);
      } catch (err) {
        console.error("", err);
      }
    },
   
  }
}
</script>

<style>
/* Updated styles for particles */
#tsparticles {
  position: fixed !important; 
  width: 100%;
  height: 100%;
  z-index: 5 !important; 
  pointer-events: none; 
}

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