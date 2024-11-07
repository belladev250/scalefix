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
          <transition name="slide-up" appear  >
          <p class="font-helvetica font-bold text-md sm:text-lg md:text-xl">WELCOME TO SCALEFIX,</p>
        </transition>
          <div class="flex flex-wrap sm:space-x-2">
            <transition name="fade-slide-up" appear  >

            <p class="text-white font-ataero text-5xl sm:text-6xl lg:text-8xl">Creative</p>
          </transition>
          <transition name="fade-slide-up" appear  >
        <p class="text-violet font-ataero text-5xl sm:text-6xl lg:text-8xl">Strategies,</p>
        </transition>
          </div>
          <div class="flex flex-wrap w-full space-x-2 sm:space-x-10 mt-4 sm:mt-4 ">
            <div class="w-full sm:w-1/2">
              <transition name="fade-slide-left" appear  >
              <p class="font-helvetica text-sm sm:text-base lg:text-lg">
                Empower your brand with custom digital marketing solutions that increase visibility,
                build strong connections with customers, and help your business grow. We use creativity and smart strategies 
                to make sure your brand succeeds online.
              </p>
            </transition>
            </div>
            <div class="flex flex-wrap space-x-2 sm:space-x-4 mt-6 sm:mt-12">
              <transition name="fade-slide-right" appear >
              <p class="text-white font-ataero text-5xl sm:text-6xl lg:text-8xl">Real</p>
            </transition>
            <transition name="fade-slide-right" appear >
              <p class="text-violet font-ataero text-5xl sm:text-6xl lg:text-8xl">Impact</p>
            </transition>
          
            </div>
          </div>
        </div>
      </div>



            <!--second sectionnnnnnnnnnnnnnnnnn-->
            <div class="bg-frame h-auto  relative z-20 " id="about-section" >
              <!-- ABOUT US SECTION -->
            <div ref="observerElement"  >
              <div class="flex items-center justify-center w-full p-4 md:p-24 space-x-4">

                <div class=" space-y-0 md:space-y-4 mt-10 md:mt-0">
                <div class="space-y-6 w-full md:w-[85vh] h-[60vh]"> 
                  <transition name="slide-up" v-if="isVisible" appear>
                  <p class="text-white font-helvetica text-md ">ABOUT SCALEFIX</p>
                </transition>
                  <div class="flex text-3xl md:text-4xl  text-white font-ataero ">
                    <transition name="slide-up"  v-if="isVisible" appear>
                  <p>Your trusted <span class="text-violet"> partner</span> for digital <span class="text-violet">marketing .</span></p>
                </transition>
                </div>
                <transition name="fade-slide-up" v-if="isVisible" appear>
                  <p class="text-white font-helvetica md:text-xl 2xl:text-2xl">
                    We are a dynamic digital marketing agency dedicated to helping businesses grow and thrive in the digital landscape.
                    With a team of experts in SEO, social media, content marketing, and online advertising,
                    we craft customized strategies to increase visibility, engagement, and conversions.
                  </p>
                </transition>

                  <div class="">
                    <transition name="slide-up" v-if="isVisible" appear>

                    <a  href="https://calendly.com/bayinganaalain"  target="_blank" >
                      <button class="bg-violet text-white text-md rounded-sm font-helvetica h-[6vh] px-4 py-2">Book a consultation call </button>
                  </a>
                  </transition>

                  </div>
                </div>
                <div class="">
                  <transition name="fade-slide-left" v-if="isVisible" appear >
                  <img src="../assets/hi5.jpg" class="h-[60vh] object-cover">
                </transition>
                </div>
              </div>

              

              <div class="hidden space-y-0 md:block space-y-6">
                <div class="">
                  <transition name="fade-slide-right" v-if="isVisible" appear >
                  <img src="../assets/woman.jpg" class="h-[60vh] object-cover">
                  </transition>
                </div>
                <div class="">
                  <transition name="fade-slide-right" v-if="isVisible" appear >
                  <img src="../assets/pc.jpg" class="h-[60vh] object-cover">
                  </transition>
                </div>
              </div>


              </div>
            </div>

            <div ref="observerElement1">
                 <div class="space-y-10 md:space-y-0" >
                <div class="space-y-2 mt-12 md:mt-0">
                    
                  <transition name="slide-up" v-if="isVisible1" appear>
                  <p class="text-center text-white font-helvetica Regular text-xl ">Our values</p>
                </transition>
                    
                <transition name="fade-slide-up" v-if="isVisible1" appear>
                  <p class="text-center text-white font-ataero text-3xl" >Why are <span class="text-violet" >brands</span> choosing <span class="text-violet" >us?</span></p>
                </transition>
          
                <transition name="fade-slide-up" v-if="isVisible1" appear>

                  <p class="text-center text-white font-helvetica text-lg">Guided by principles that drive success and build lasting relationships, we focus on innovation, honesty,</p>
                </transition>

                <transition name="fade-slide-up" v-if="isVisible1" appear>
                <p class="text-center text-white font-helvetica text-lg"> and delivering results that matter.</p>
              </transition>

              
              </div>
        
            
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full p-6 md:p-24">
                  <div class="border -2 border-white p-4 h-auto md:h-[42vh] space-y-4 md:space-y-20" v-for="(value, index) in values" :key="index">
                    <div>
                      <transition name="zoom" v-if="isVisible1" appear>
                      <img :src="value.image"  class="h-auto md:h-[8vh]"  >
                      </transition>
                    </div>
                    <div class=" space-y-2 hidden md:block  ">
                      <transition name="fade-slide-up" v-if="isVisible1" appear>
                      <p class="text-violet font-ataero text-lg md:text-2xl font-bold">{{ value.id }}</p>
                      </transition>

                      <transition name="fade-slide-right" v-if="isVisible1" appear>
                      <p class="text-white font-ataero text-lg md:text-2xl">{{ value.title1 }}</p>
                      </transition>

                      <transition name="fade-slide-right" v-if="isVisible1" appear>
                      <p class="text-white font-ataero text-lg md:text-2xl">{{ value.title2 }}</p>
                    </transition>
                    </div>

                    <div class="space-y-2 block md:hidden">
                      <p class="text-violet font-ataero text-lg md:text-xl font-bold">{{ value.id }}</p>
                      <p class="text-white font-ataero text-lg md:text-xl">{{ value.title1 }} {{ value.title2 }}</p>
                    </div>

                  </div>
                </div>
              </div>

            </div>


                <div class="" ref="observerElement2" >
                <div class="w-full relative">
                  <div class="absolute inset-0 bg-black opacity-70"></div>
                  <img src="../assets/wokers.jpeg" class="h-[65vh] w-full object-cover">

                  <div class="absolute inset-0  space-y-2 flex flex-col items-center justify-center text-center text-white px-4" >
                  
                       <transition name="slide-up" v-if="isVisible2" appear >
                      <p class="text-4xl font-ataero"> <span class="text-violet">ScaleFix</span> is a one-click step to an</p>
                    </transition>
                    <transition name="slide-up" v-if="isVisible2" appear >
                  <p class="text-4xl font-ataero">excellent digital <span class="text-violet">marketing</span> </p>
                   </transition>
                   <transition name="slide-up" v-if="isVisible2" appear >
                      <p class="text-lg font-helvetica" >Let's Grow Together  Discover How We Can Help Your Business Thrive.</p>
                      </transition>

                      <transition name="fade-slide-up" v-if="isVisible2" appear  >
                      <a  href="https://calendly.com/bayinganaalain"  target="_blank" >
                        <button class="bg-violet text-white text-md rounded-sm font-helvetica h-[6vh] px-4 " >Book a consultation call </button>
                      </a>    
                      </transition>           
                  </div>
                </div>
              </div>


             

                <!-- Our service section -->
                 <div ref="observerElement3"> 
                <div class="flex flex-col items-center justify-center space-y-4 mt-20" id="services-section">
                  <div class="w-4/5 md:w-4/5">
                    <transition name="fade-slide-up" v-if="isVisible3" appear >
                    <p class="text-white self-start text-lg font-helvetica Regural">
                      Our services
                    </p>
                  </transition>
                  </div>
                  
                  <div class="flex flex-col md:flex-row justify-between w-4/5 space-y-4 md:space-y-0">
                    <transition name="fade-slide-left" v-if="isVisible3" appear >

                    <p class="text-white font-ataero text-3xl md:text-4xl text-center md:text-left">
                      What is in for <span class="text-violet">you?</span>
                    </p>
                    </transition>
                    
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
                    <transition name="zoom" v-if="isVisible3" appear >
                        <img 
                          :src="card.img" 
                          class="h-full w-full object-cover aspect-square"
                        >
                      </transition>
                      </div>
                      <transition  name="slide-up" v-if="isVisible3" appear >
                      <p 
                        class="text-white font-ataero text-lg md:text-xl text-center md:text-left" 
                        v-html="card.title"
                      ></p>
                    </transition>
                    <transition name="fade-slide-left" v-if="isVisible3" appear >
                      <p 
                        class="text-white font-helvetica text-sm md:text-md text-center md:text-left" 
                      >
                        {{ card.desc }}
                      </p>
                    </transition>
                    </div>
                  </div>
                </div>

              </div>
            

                <!-- testimonials -->
                  <div ref="observerElement5"  >

                    <div class="mt-20 space-y-4"  >
                      <transition name="slide-up" v-if="isVisible5" appear >
                      <p class="text-white font-helvetica text-center text-lg">CLIENT TESTIMONIALS</p>
                    </transition>
                    <transition name="fade-slide-up" v-if="isVisible5" appear >
                      <p class="text-white font-ataero text-center text-4xl" >What Our <span class="text-violet">Clients</span>  Are Saying?</p>
                    </transition>
                    </div>

                    <div class="p-4 mt-12 md:p-24  md:-mt-10 " >
                      <Carousel
                        :items-to-show="isMobile ? 1 : 2"
                        :items-to-scroll="isMobile ? 1 : 2"
                        :mouse-drag="true"
                        :wrap-around="false"
                        v-model:current-slide="testimonialSlide"
                        :pagination-enabled="false"
                        class="space-y-4"
                        :breakpoints="{
                          640: {
                            itemsToShow: 1,
                            itemsToScroll: 1
                          },
                          768: {
                            itemsToShow: 2,
                            itemsToScroll: 2
                          }
                        }"
                      >
                        <Slide
                          v-for="(testimonial, index) in visibleTestimonials" 
                          :key="index"
                          class="mx-2 w-full md:w-[calc(50%_-_1rem)]"  
                        >
                          <div class="bg-[#1b1b38] p-4 md:p-6 rounded-lg flex flex-col justify-between text-white space-y-4 mx-2 md:mx-4" >
                            <transition name="fade-slide-up" v-if="isVisible5" appear  >

                            <p class="text-helvetica text-gray-300 text-base md:text-lg"  >
                              "{{ testimonial.text }}"
                            </p>

                            </transition>
                            
                            <div class="border-t border-gray-600 my-2" ></div>
                            <div class="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4" >
                              <img 
                                :src="testimonial.image" 
                                alt="Author image" 
                                class="w-10 h-10 md:w-12 md:h-12 rounded-full"
                              />
                              <div class="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0"  id="testimonies-section" >
                                <transition name="fade-slide-right" v-if="isVisible5" appear >
                                <strong class="text-white text-ataero text-sm md:text-base">
                                  {{ testimonial.name }}
                                </strong>
                                </transition>

                                <transition name="fade-slide-right" v-if="isVisible5" appear >

                                <span class="text-gray-400 text-sm md:text-base md:ml-2" >
                                  {{ testimonial.title }}
                                </span>
                                </transition>
                              </div>
                            </div>
                          </div>
                        </Slide>
                      </Carousel>
                  
                      <!-- Custom Pagination -->
                      <div class="flex justify-center space-x-1 md:space-x-2 mt-8 md:mt-12"  >
                        <button
                          v-for="n in totalPages"
                          :key="n"
                          @click="currentPage = n - 1"
                          :class="[
                            'w-8 md:w-12 h-2 md:h-3 rounded-lg transition-colors duration-200',
                            currentPage === n - 1 ? 'bg-violet' : 'bg-gray-500'
                          ]"
                          :aria-label="'Go to page ' + n"
                        ></button>
                      </div>
                    </div>

                  </div>

                    <div class="relative" ref="observerElement6">
                      <div class="absolute inset-0 bg-black opacity-70"></div>
                      <img 
                        src="../assets/colab.jpeg" 
                        class="h-[50vh] md:h-[80vh] w-full object-cover"
                      >
                      
                      <div 
                        class="absolute top-12 md:top-8 md:top-32 left-4 md:left-20 space-y-4 flex flex-col  text-white p-6 md:p-12 w-[90%] md:w-[60%] bg-frame"
                      >
                      <transition name="slide-up" v-if="isVisible6" appear >
                        <p class="text-2xl md:text-5xl font-ataero leading-tight">
                          Are you ready to take your 
                          <span class="text-violet">brand</span> to the 
                          <span class="text-violet">next</span> level?
                        </p>

                        </transition>
                        
                        <transition name="fade-slide-up" v-if="isVisible6" appear >

                        <p class="text-base md:text-xl font-helvetica">
                          Take the first step toward digital success.
                          Contact us today for a free consultation, and let's create a plan that works for your business.
                        </p>

                        </transition>
                        
                        <a 
                          href="https://calendly.com/bayinganaalain" 
                          target="_blank" 
                          class="inline-block w-full md:w-auto"
                        >
                        <transition name="fade-slide-up" v-if="isVisible6" appear >

                          <button 
                            class="bg-violet text-white text-base md:text-lg rounded-sm font-helvetica 
                                  h-[6vh] px-4 md:px-6 w-full md:w-auto"
                          >
                            Book a consultation call
                          </button>
                          </transition>
                        </a>
                      </div>
                    </div>

                  
                    
                  <!--contact section -->
                  <div ref="observerElement7">
                  <div 
                  class="flex flex-col md:flex-row items-center justify-center md:space-x-32 space-y-8 md:space-y-0 p-6 md:p-24" 
                  id="contacts-section">
                  <!-- Text Content -->
                  <div class="w-full mt-12 md:mt-0  space-y-4 md:space-y-6">
                    <transition name="slide-up" v-if="isVisible7" appear>
                    <p class="text-white font-ataero text-3xl md:text-5xl text-center md:text-left">
                      Let's <span class="text-violet">Talk</span>
                    </p>
                  </transition>
                  <transition name="fade-slide-right" v-if="isVisible7" appear>

                    <p class="text-white font-helvetica text-lg md:text-2xl text-center md:text-left">
                      We'd love to hear from you! Whether you have a question, need more information, 
                      or are ready to start a project, feel free to reach out.
                    </p>
                    </transition>
                  </div>
              
                  <!-- Form Section -->
                  <div class="flex items-center justify-center w-full px-4">
                    <div class="w-full mx-auto">
                      <form class="space-y-6 md:space-y-10" @submit.prevent="sendEmail">
                        <!-- Name and Email Fields -->
                        <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
                          <!-- Name Field -->
                          <div class="flex-1">
                            <label class="block text-gray-400 text-sm md:text-md font-medium mb-1">
                              Name
                            </label>
                            <input
                              type="text"
                              class="w-full border-b border-gray-500 bg-transparent text-white 
                                    focus:outline-none focus:border-violet py-2"
                              placeholder=" " v-model="name"  name="from_name"
                            />
                          </div>
              
                          <!-- Email Field -->
                          <div class="flex-1">
                            <label class="block text-gray-400 text-sm md:text-lg font-medium mb-1">
                              Email address
                            </label>
                            <input
                              type="email"
                              class="w-full border-b border-gray-500 bg-transparent text-white 
                                    focus:outline-none focus:border-violet py-2"
                              placeholder=" " v-model="email" name="from_email"
                            />
                          </div>
                        </div>
              
                        <!-- Message Field -->
                        <div>
                          <label class="block text-gray-400 text-sm md:text-lg font-medium mb-1">
                            Message
                          </label>
                          <textarea
                            class="w-full border-b border-gray-500 bg-transparent text-white 
                                  focus:outline-none focus:border-violet h-20 md:h-24"
                            placeholder=" " v-model="message"  name="message"
                          ></textarea>
                        </div>
              
                        <!-- Send Button -->
                        <div class="text-center mt-8">
                          <button
                            type="submit"
                            class="bg-violet text-base md:text-lg text-white py-3 md:py-2 px-4 
                                  rounded w-full hover:bg-violet focus:outline-none 
                                  focus:ring-2 focus:ring-purple-600"
                          >
                            Send a message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

                <div class="flex items-center justify-center p-6 md:p-24">
                  <div class="w-full space-y-4 mb-12 mt-10 md:mt-0  md:-mb-20 ">
                    <hr class="border-t-2 border-gray-500">
                    <div class="flex flex-col md:flex-row md:justify-between text-white font-helvetica 
                                text-sm md:text-lg space-y-4 md:space-y-0 text-center md:text-left">
                      <p class=" text-white hover:text-violet transition duration-300" >Follow us on   <i class="fab fa-instagram" aria-hidden="true"></i>
                      </p>
                      <p class="text-gray-300 md:text-white">
                        Copyright @2024 ScaleFix.io All rights reserved
                      </p>
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
      import emailjs from 'emailjs-com';




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
            isVisible:false,
            isVisible1:false,
            isVisible2:false,
            isVisible3:false,
            isVisible4:false,
            isVisible5:false,
            isVisible6:false,
            isVisible7:false,

            name:'',
            email:'',
            message:'',
            testimonials: [
            {
              text: "Working with ScaleFix has been a game-changer for our business. Their team truly understood our vision and crafted a marketing strategy that not only elevated our brand but also delivered real results.",
              name: "Shema Ken",
              title: "Retail Business Owner",
              image: "https://randomuser.me/api/portraits/men/1.jpg"
            },

            {
              text: "ScaleFix's creativity and attention to detail were outstanding. Their strategies quickly boosted our online presence, driving significant increases in traffic and sales!",
              name: "Bella Melissa",
              title: "E-commerce Entrepreneur",
              image: "https://randomuser.me/api/portraits/women/1.jpg"
            },
            {
              text: "Working with ScaleFix has been transformative for our business. Their team understood our vision and created a marketing strategy that not only boosted our brand but also achieved impactful results.",
              name: "John Doe",
              title: "Retail Business Owner",
              image: "https://randomuser.me/api/portraits/men/1.jpg"
            },
            {
              text: "ScaleFix's creativity and attention to detail were outstanding. Their strategies quickly boosted our online presence, driving significant increases in traffic and sales!",
              name: "Jane Williams",
              title: "E-commerce Entrepreneur",
              image: "https://randomuser.me/api/portraits/women/1.jpg"
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

        mounted(){

          this.initiativeAnimations();
          this.missoutAnimations();
          this.blogAnimations();
          this.galleryAnimations();
          this.notableAnimations();
          this.background();
          this.background2();


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
        },

        initiativeAnimations() {

          const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('Element is visible!');
        this.isVisible = true;
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -20% 0px'
  });

  observer.observe(this.$refs.observerElement);
  },

  missoutAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.isVisible1 = true;
      }
    });
  }, {
    threshold: 0.1
  });
  observer.observe(this.$refs.observerElement1);
  },

  blogAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.isVisible2 = true;
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(this.$refs.observerElement2);
  },

  galleryAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.isVisible3 = true;
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(this.$refs.observerElement3);
  },

  iconsAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.isVisible4 = true;
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(this.$refs.observerElement4);
  },

  notableAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.isVisible5 = true;
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(this.$refs.observerElement5);
  },

  background() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.isVisible6 = true;
      }
    });
  }, {
    threshold: 0.1
  });
  observer.observe(this.$refs.observerElement6);

  },

  background2() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.isVisible7 = true;
      }
    });
  }, {
    threshold: 0.1
  });
  observer.observe(this.$refs.observerElement7);

  },

  sendEmail(e) {
  try {
    
    emailjs.sendForm('service_loh6ei9', 'template_ohk17hg', e.target, 'l0zn_DcwDXkCaNI75', {
      from_name: this.name,
      from_email: this.email,
      message: this.message,

    
    }, console.log("user email ",this.email))
    .then((result) => {
      console.log('Email sent successfully!', result.text,result.from_email);
      this.name = '';
      this.email = '';
      this.message = '';
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    alert('Email sending failed. Please try again later.');
  }
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

      .fade-in {
        opacity: 0;
        transition: opacity 1.2s ease-in-out;
      }
      
      .fade-in-visible {
        opacity: 1;
      }
      
      .slide-up-enter-active,
      .slide-left-enter-active,
      .slide-right-enter-active {
        transition: all 0.9s ease-out;
      }
      
      .slide-up-enter-from {
        opacity: 0;
        transform: translateY(25px);
      }
      
      .slide-up-enter-to {
        opacity: 1;
        transform: translateY(0);
        /* Ensure Y-axis is reset to 0 */
      }
      
      .slide-left-enter-from {
        opacity: 0;
        transform: translateX(-50px);
      }
      
      .slide-left-enter-to {
        opacity: 1;
        transform: translateX(0);
        /* Reset X-axis */
      }
      
      .slide-right-enter-from {
        opacity: 0;
        transform: translateX(50px);
      }
      
      .slide-right-enter-to {
        opacity: 1;
        transform: translateX(0);
        /* Reset X-axis */
      }
      
      /* General Fade */
      .fade-enter-active,
      .fade-leave-active {
        transition: opacity 0.6s ease-in-out;
      }
      
      .fade-enter,
      .fade-leave-to
      
      /* .fade-leave-active in <2.1.8 */
        {
        opacity: 0;
      }
      
    /* Fade and Slide Up */
  .fade-slide-up-enter-active {
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .fade-slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }

  .fade-slide-up-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
      
    /* Smooth and Slow Fade and Slide Left */
.fade-slide-left-enter-active {
  transition: all 1.2s cubic-bezier(0.42, 0.0, 0.58, 1);
}

.fade-slide-left-enter-from {
  opacity: 0;
  transform: translateX(-80px);
}

.fade-slide-left-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* Smooth and Slow Fade and Slide Right */
.fade-slide-right-enter-active {
  transition: all 1.2s cubic-bezier(0.42, 0.0, 0.58, 1);
}

.fade-slide-right-enter-from {
  opacity: 0;
  transform: translateX(80px);
}

.fade-slide-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}
      
      /* Zoom In */
      .zoom-enter-active {
        transition: all 0.9s ease;
      }
      
      .zoom-enter-from {
        opacity: 0;
        transform: scale(0.9);
      }
      
      .zoom-enter-to {
        opacity: 1;
        transform: scale(1);
      }
      
      .fade-slide-up-enter-active,
      .fade-slide-up-leave-active {
        transition: opacity 1.2s ease-in-out, transform 1.1s ease-in-out;
      }
      
      .fade-slide-up-enter-from {
        opacity: 0;
        transform: translateY(50px);
      }
      
      .fade-slide-up-enter-to {
        opacity: 1;
        transform: translateY(0);
      }
      
      .fade-slide-up-leave-from {
        opacity: 1;
        transform: translateY(0);
      }
      
      .fade-slide-up-leave-to {
        opacity: 0;
        transform: translateY(80px);
      }

    
      </style>