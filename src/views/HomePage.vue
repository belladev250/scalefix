  <template>
  <div class="h-screen relative w-full overflow-x-hidden">
    <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="particlesOptions"
    class="absolute inset-0"
  />

  <div class="relative h-screen min-h-[400px] max-h-[670px] sm:max-h-[800px] lg:max-h-[900px] xl:max-h-[1000px] overflow-hidden">
    <NavbarComp />
    <div class="absolute inset-0 z-0">
      <img src="../assets/background.jpg" alt="Background" class="h-full w-full object-cover">
    </div>

    <div class="absolute text-white top-1/3 xl:top-1/3 ml-4 sm:ml-8 lg:ml-16 space-y-2 z-10">
      <p class="font-helvetica font-bold text-md sm:text-lg md:text-xl">WELCOME TO SCALEFIX,</p>
      <div class="flex flex-wrap sm:space-x-2">
        <p class="text-white font-ataero text-5xl sm:text-6xl lg:text-8xl">Creative</p>
        <p class="text-violet font-ataero text-5xl sm:text-6xl lg:text-8xl">Strategies,</p>
      </div>
      <div class="flex flex-wrap w-full space-x-2 sm:space-x-10 mt-4 sm:mt-4 ">
        <div class="w-full sm:w-1/2">
          <p class="font-helvetica text-sm sm:text-base lg:text-lg">
            Empower your brand with custom digital marketing solutions that increase visibility,
             build strong connections with customers, and help your business grow. We use creativity and smart strategies 
            to make sure your brand succeeds online.
          </p>
        </div>
        <div class="flex flex-wrap space-x-2 sm:space-x-4 mt-6 sm:mt-12">
          <p class="text-white font-ataero text-5xl sm:text-6xl lg:text-8xl">Real</p>
          <p class="text-violet font-ataero text-5xl sm:text-6xl lg:text-8xl">Impact</p>
        </div>
      </div>
    </div>
  </div>



        <!--second sectionnnnnnnnnnnnnnnnnn-->
        <div class="bg-frame h-auto  relative z-20 " id="about-section" >
          <!-- ABOUT US SECTION -->

          <div class="flex items-center justify-center w-full p-4 md:p-24 space-x-4">

            <div class=" space-y-0 md:space-y-4 mt-10 md:mt-0">
            <div class="space-y-6 w-full md:w-[85vh] h-[60vh]"> 
              <p class="text-white font-helvetica text-md ">ABOUT SCALEFIX</p>
              <div class="flex text-3xl md:text-4xl  text-white font-ataero ">
              <p>Your trusted <span class="text-violet"> partner</span> for digital <span class="text-violet">marketing .</span></p>
            </div>
              <p class="text-white font-helvetica md:text-xl 2xl:text-2xl">
                We are a dynamic digital marketing agency dedicated to helping businesses grow and thrive in the digital landscape.
                With a team of experts in SEO, social media, content marketing, and online advertising,
                we craft customized strategies to increase visibility, engagement, and conversions.
              </p>

              <div class="">
                <a  href="https://calendly.com/bayinganaalain"  target="_blank" >
                  <button class="bg-violet text-white text-md rounded-sm font-helvetica h-[6vh] px-4 py-2">Book a consultation call </button>
              </a>            </div>
            </div>
            <div class="">
              <img src="../assets/hi5.jpg" class="h-[60vh] object-cover  ">
            </div>
          </div>

          

          <div class="hidden space-y-0 md:block space-y-6">
            <div class="">
              <img src="../assets/woman.jpg" class="h-[60vh] object-cover">
            </div>
            <div class="">
              <img src="../assets/pc.jpg" class="h-[60vh] object-cover">
            </div>
          </div>


          </div>

                <div class="space-y-10 md:space-y-0">
            <div class="space-y-2 mt-12 md:mt-0">
          
              <p class="text-center text-white font-helvetica Regular text-xl ">Our values</p>
              <p class="text-center text-white font-ataero text-3xl" >Why are <span class="text-violet" >brands</span> choosing <span class="text-violet" >us?</span></p>
              <p class="text-center text-white font-helvetica text-lg">Guided by principles that drive success and build lasting relationships, we focus on innovation, honesty,</p>
            <p class="text-center text-white font-helvetica text-lg"> and delivering results that matter.</p>
          </div>
    
        
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full p-6 md:p-24">
              <div class="border -2 border-white p-4 h-auto md:h-[42vh] space-y-4 md:space-y-20" v-for="(value, index) in values" :key="index">
                <div>
                  <img :src="value.image"  class="h-[8vh]"  >
                </div>
                <div class=" space-y-2 hidden md:block  ">
                  <p class="text-violet font-ataero text-lg md:text-2xl font-bold">{{ value.id }}</p>
                  <p class="text-white font-ataero text-lg md:text-2xl">{{ value.title1 }}</p>
                  <p class="text-white font-ataero text-lg md:text-2xl">{{ value.title2 }}</p>
                </div>

                <div class="space-y-2 block md:hidden">
                  <p class="text-violet font-ataero text-lg md:text-xl font-bold">{{ value.id }}</p>
                  <p class="text-white font-ataero text-lg md:text-xl">{{ value.title1 }} {{ value.title2 }}</p>
                </div>

              </div>
            </div>
          </div>


             
            <div class="w-full relative">
              <div class="absolute inset-0 bg-black opacity-70"></div>
              <img src="../assets/wokers.jpeg" class="h-[65vh] w-full object-cover">

              <div class="absolute inset-0  space-y-2 flex flex-col items-center justify-center text-center text-white px-4" >
              
                  <p class="text-4xl font-ataero"> <span class="text-violet">ScaleFix</span> is a one-click step to an</p>
                  <p class="text-4xl font-ataero">excellent digital <span class="text-violet">marketing</span> </p>
                  <p class="text-lg font-helvetica" >Let's Grow Together  Discover How We Can Help Your Business Thrive.</p>
                  <a  href="https://calendly.com/bayinganaalain"  target="_blank" >
                    <button class="bg-violet text-white text-md rounded-sm font-helvetica h-[6vh] px-4 " id="services-section">Book a consultation call </button>
                </a>               
              </div>
            </div>




            <!-- Our service section -->
            <div class="flex flex-col items-center justify-center space-y-4 mt-20">
              <div class="w-4/5 md:w-4/5">
                <p class="text-white self-start text-lg font-helvetica Regural">
                  Our services
                </p>
              </div>
              
              <div class="flex flex-col md:flex-row justify-between w-4/5 space-y-4 md:space-y-0">
                <p class="text-white font-ataero text-3xl md:text-4xl text-center md:text-left">
                  What is in for <span class="text-violet">you?</span>
                </p>
                
                <div class="flex space-x-4 justify-center md:justify-end">
                  <!-- Previous Button -->
                  <button 
                    class="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 ring-gray-400 ring-2 text-gray-100 rounded-full hover:bg-gray-500 transition duration-200" 
                    @click="nextSlide"
                  >
                    <ArrowNarrowLeftIcon class="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  
                  <!-- Next Button -->
                  <button 
                    class="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 ring-2 ring-gray-400 text-gray-100 rounded-full hover:bg-gray-500 transition duration-200" 
                    @click="prevSlide"
                  >
                    <ArrowNarrowRightIcon class="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </div>
              </div>
          
              <div 
                class="flex flex-col md:flex-row items-center justify-center w-4/5 md:space-x-8 space-y-8 md:space-y-0" 
                v-for="(slide, index) in currentSlideImages" 
                :key="index"
              >
                <div 
                  v-for="card in slide" 
                  :key="card.img" 
                  class="space-y-4 mt-12 w-full md:w-auto"
                >
                  <div class="h-[30vh] md:h-[50vh] w-full md:w-[50vh] overflow-hidden">
                    <img 
                      :src="card.img" 
                      class="h-full w-full object-cover aspect-square"
                    >
                  </div>
                  <p 
                    class="text-white font-ataero text-lg md:text-xl text-center md:text-left" 
                    v-html="card.title"
                  ></p>
                  <p 
                    class="text-white font-helvetica text-sm md:text-md text-center md:text-left" 
                    id="testimonies-section"
                  >
                    {{ card.desc }}
                  </p>
                </div>
              </div>
            </div>
        

             <!-- testimonials -->
              <div  >

                <div class="mt-20 space-y-4">
                  <p class="text-white font-helvetica text-center text-lg">CLIENT TESTIMONIALS</p>
                  <p class="text-white font-ataero text-center text-4xl" >What Our <span class="text-violet">Clients</span>  Are Saying?</p>
                </div>

                <div class=" p-24 -mt-10">
                  <Carousel
                  :items-to-show="2"
                  :items-to-scroll="2"
                  :mouse-drag="true"
                  :wrap-around="false"
                  v-model:current-slide="testimonialSlide"
                  :pagination-enabled="false"
                  class="space-y-4"
                >
                    <Slide  v-for="(testimonial, index) in visibleTestimonials" 
                    :key="index" class="mx-2 w-[calc(50%_-_1rem)]" >
                      <div class="bg-[#1b1b38] p-6 rounded-lg flex flex-col justify-between text-white space-y-4 mx-4">
                        <p class="text-helvetica text-gray-300 text-lg">
                          "{{ testimonial.text }}"
                        </p>
                        <div class="border-t border-gray-600 my-2"></div>
                        <div class="flex items-center space-x-4">
                          <img :src="testimonial.image" alt="Author image" class="w-12 h-12 rounded-full" />
                          <div>
                            <strong class="text-white  text-ataero">{{ testimonial.name }}</strong>, <span class="text-gray-400">{{ testimonial.title }}</span>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </Carousel>
              
                  <!-- Custom Pagination -->
                  <div class="flex justify-center space-x-2 mt-12">
                    <button
                      v-for="n in totalPages"
                      :key="n"
                      @click="currentPage = n - 1"
                      :class="[
                        'w-12 h-3 rounded-lg transition-colors duration-200',
                        currentPage === n - 1 ? 'bg-violet' : 'bg-gray-500'
                      ]"
                      :aria-label="'Go to page ' + n"
                    ></button>
                  </div>
                </div>

                <div class="relative">
                  <div class="absolute inset-0 bg-black opacity-70"></div>
                  <img src="../assets/colab.jpeg" class="h-[80vh] w-full object-cover">

                  <div class="absolute top-32 left-20 space-y-4 flex flex-col text-white p-12 w-[60%] bg-frame ">
              
                    <p class="text-5xl font-ataero">Are you ready to take your  <span class="text-violet">brand</span> to the <span class="text-violet">next</span> level ?</p>
                    <p class="text-xl font-helvetica" >Take the first step toward digital success.
                       Contact us today for a free consultation, and let's create a plan that works for your business.</p>
                    <a  href="https://calendly.com/bayinganaalain"  target="_blank" >
                      <button class="bg-violet text-white text-lg rounded-sm font-helvetica h-[6vh] px-6 " >Book a consultation call </button>
                  </a>               
                </div>
                </div>
                </div>
                 
              <!--contact section -->
              <div class=" flex items-center justify-center  space-x-32 p-24 " id="contacts-section">
                <div class="w-[45%] space-y-6">
                 <p class="text-white font-ataero text-5xl ">Let's  <span class="text-violet">Talk</span></p>
                 <p class="text-white font-helvetica text-2xl" >We'd love to hear from you! Whether you have a question, need more information, 
                  or are ready to start a project, feel free to reach out.</p>

                </div>

                <div class=" flex items-center justify-center px-4">
                  <div class="w-full  mx-auto">
                    <form class="space-y-10">
                      <div class="flex space-x-10">
                        <!-- Name Field -->
                        <div class="flex-1  ">
                          <label class="block text-gray-400 text-md font-medium mb-1">Name</label>
                          <input
                            type="text"
                            class="w-full border-b  border-gray-500 bg-transparent text-white focus:outline-none focus:border-violet"
                            placeholder=" "
                          />
                        </div>
                        <!-- Email Field -->
                        <div class="flex-1">
                          <label class="block text-gray-400 text-lg font-medium mb-1">Email address</label>
                          <input
                            type="email"
                            class="w-full border-b border-gray-500 bg-transparent text-white focus:outline-none focus:border-violet"
                            placeholder=" "
                          />
                        </div>
                      </div>
                      <!-- Message Field -->
                      <div>
                        <label class="block text-gray-400 text-lg font-medium mb-1">Message</label>
                        <textarea
                          class="w-full border-b border-gray-500 bg-transparent text-white focus:outline-none focus:border-violet h-24"
                          placeholder=" "
                        ></textarea>
                      </div>
                      <!-- Send Button -->
                      <div class="text-center">
                        <button
                          type="submit"
                          class="bg-violet tex-lg text-white py-2 px-4 rounded w-full hover:bg-violet focus:outline-none focus:ring-2 focus:ring-purple-600"
                        >
                          Send a message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div class=" flex items-center justify-center p-24  ">

                <div class="w-full space-y-4 -mb-12">
                  <hr class=" border-t-2 border-gray-500">
                  <div class="justify-between flex text-white font-helvetica text-lg">

                  <p >Follow us </p>
                  <p>Copyright @2024 ScaleFix.io All rights reserved</p>
                </div>
                </div>
              </div>
          
          </div>
      
  </div>
  </template>

  <script>
  import { loadFull } from "tsparticles";
  import NavbarComp from '@/components/NavbarComp.vue';
  import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon} from '@heroicons/vue/outline'
  import { Carousel, Slide } from 'vue3-carousel';



  export default {
    name: 'HomePage',
    components: {
      NavbarComp,
      ArrowNarrowLeftIcon,ArrowNarrowRightIcon,
      Carousel, Slide


    },
    data() {
      return {
        currentPage:0,
        testimonials: [
        {
          text: "Working with ScaleFix has been a game-changer for our business. Their team truly understood our vision and crafted a marketing strategy that not only elevated our brand but also delivered real results.",
          name: "Shema Ken",
          title: "Retail Business Owner",
          image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          text: "The team’s creativity and attention to detail were outstanding. We saw immediate results from their campaigns. Working with ScaleFix transformed our online presence. Their strategies led to a significant increase in traffic and sales!",
          name: "Bella Melissa",
          title: "E-commerce Entrepreneur",
          image: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
          text: "Working with ScaleFix has been a game-changer for our business. Their team truly understood our vision and crafted a marketing strategy that not only elevated our brand but also delivered real results.",
          name: "Jane Doe",
          title: "Retail Business Owner",
          image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          text: "Working with ScaleFix has been a game-changer for our business. Their team truly understood our vision and crafted a marketing strategy that not only elevated our brand but also delivered real results.",
          name: "Joen Doe",
          title: "Retail Business Owner",
          image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
     
        // Add more testimonials as needed
      ],

        cards:[

        {
          img:require('../assets/graph.jpg'),
          title:'Advanced Performance <br> Marketing',
          desc:'With our deep expertise in paid media, PPC, SEO, and multi-location marketing, we provide a competitive edge that sets us apart and help your brand stand out.'
        },
        {
          img:require('../assets/ai.jpg'),
          title:'Tailored AI-Powered <br> Solutions',
          desc:'We understand that one-size-fits-all approach does not  work. Our AI-powered approach creates personalized solutions that address your specific challenges and drive results.'
        },
        {
          img:require('../assets/handshake.jpg'),
          title:'Uncompromising <br> Competitiveness',
          desc:'We always put our clients needs first, carefully listening to their goals and challenges to create strategies that work for them. We build long-term partnerships'
        },
        {
          img:require('../assets/3.jpg'),
          title:'Delivering Measurable <br>  Results ',
          desc:'Your success is our success. We are deeply committed to delivering results by using a data-driven approach that ensures every strategy is effective.'
          
        },
        {
         
          img:require('../assets/2.jpg'),
          title:'Collaboration and <br> Partnership',
          desc:'We are more than just a service provider; we are your strategic partner. Your input is invaluable, and we are committed to a collaborative approach that delivers customized solutions.'

        },
        {
          img:require('../assets/1.jpg'),
          title:'Long-Term Commitment and  <br> Support',
          desc:'Our partnership does not  end with a campaign. We are committed to your long-term success and provide ongoing support, maintenance, and performance tracking to ensure your business continues to grow and evolve.'
        }


        ],

        values:[
          {
            id:'1.',
            image:require('../assets/person.svg'),
            title1:"Prioritizing client's needs",
            title2:"needs"
          },
          {
            id:'2.',
            image:require('../assets/rocket.svg'),
            title1:"Building Strong",
            title2:"relationships"
          },
          {
            id:'3.',
            image:require('../assets/clock.svg'),
            title1:"Delivering on",
            title2:"promises"
          },

          {
            id:'4.',
            image:require('../assets/bulb.svg'),
            title1:"Embracing new ",
            title2:"ideas"
          },
          {
            id:'5.',
            image:require('../assets/bi.svg'),
            title1:"Intergrity and ",
            title2:"transparency"
          },

          {
            id:'6.',
            image:require('../assets/smiley.svg'),
            title1:"Striving for ",
            title2:"perfection"
          },
        ],
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
                value_area: 800
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
        },
        currentSlide:0,
        direction: 'right'

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
      nextSlide() {
        this.direction = 'right'

      if (this.currentSlide < this.groupedImages.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0; 
      }
    },
    prevSlide() {
      this.direction = 'left'

      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.groupedImages.length - 1; 
      }
    },

    handleTestimonialPage(index) {
      this.testimonialSlide = index * 2
    },
    isTestimonialPageActive(index) {
      return Math.floor(this.testimonialSlide / 2) === index
    }
  },
    
    

    computed:{
      groupedImages() {
      return this.cards.reduce((acc, card, index) => {
        const slideIndex = Math.floor(index / 3);
        if (!acc[slideIndex]) acc[slideIndex] = [];
        acc[slideIndex].push(card);
        return acc;
      }, []);
    },
    currentSlideImages() {
      return this.groupedImages.slice(this.currentSlide, this.currentSlide + 1);
    },
    totalPages() {
      return Math.ceil(this.testimonials.length / 2)
    },
    visibleTestimonials() {
      const start = this.currentPage * 2
      return this.testimonials.slice(start, start + 2)
    }

    },

    
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