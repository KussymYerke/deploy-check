import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'
import Dombyra from '@/public/images/dombyra.jpg'
import Domb from '@/public/images/domb.webp'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10 md:pt-10">
            <h2 className="h2 mb-2">Catalogue💅</h2>
            <p className="text-xl text-gray-400">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 rounded" data-aos="fade-up" data-aos-delay="100">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image alt='Dombyra3' src={Domb} className={"rounded h-auto"}/>
                </div>
              </div>
              <h1 className={"text-2xl mb-2"}>Dombyra#1</h1>
              <blockquote className="text-base text-gray-400 grow">Open PRO lets me quickly get the insights I care about so that I can focus on my productive work.</blockquote> <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 flex justify-between align-middle">
                <a className="text-purple-600 text-2xl hover:text-gray-200 transition duration-150 ease-in-out" href="#0">99,999₸</a>
                <a href="https://wa.me/77777064477">
                  <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Satyp Aly</button>
                </a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 rounded" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image alt='Dombyra3' src={Domb} className={"rounded h-auto"}/>
                </div>
              </div>
              <h1 className={"text-2xl mb-2"}>Dombyra#2</h1>
              <blockquote className="text-base text-gray-400 grow">Open PRO lets me quickly get the insights I care about so that I can focus on my productive work.</blockquote> <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 flex justify-between align-middle">
                <a className="text-purple-600 text-2xl hover:text-gray-200 transition duration-150 ease-in-out" href="#0">99,999₸</a>
                <a href="https://wa.me/77777064477">
                  <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Satyp Aly</button>
                </a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 rounded" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image alt='Dombyra3' src={Domb} className={"rounded h-auto"}/>
                  {/*<Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />*/}
                  {/*<svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">*/}
                  {/*  <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />*/}
                  {/*</svg>*/}
                </div>
              </div>
                <h1 className={"text-2xl mb-2"}>Dombyra#3</h1>
              <blockquote className="text-base text-gray-400 grow">Open PRO lets me quickly get the insights I care about so that I can focus on my productive work.</blockquote><div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 flex justify-between align-middle">
                  <a className="text-purple-600 text-2xl hover:text-gray-200 transition duration-150 ease-in-out" href="#0">99,999₸</a>
                  <a href="https://wa.me/77777064477">
                    <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Satyp Aly</button>
                  </a>
                </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 rounded" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image alt='Dombyra3' src={Domb} className={"rounded h-auto"}/>
                  {/*<Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />*/}
                  {/*<svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">*/}
                  {/*  <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />*/}
                  {/*</svg>*/}
                </div>
              </div>
              <h1 className={"text-2xl mb-2"}>Dombyra#3</h1>
              <blockquote className="text-base text-gray-400 grow">Open PRO lets me quickly get the insights I care about so that I can focus on my productive work.</blockquote><div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 flex justify-between align-middle">
              <a className="text-purple-600 text-2xl hover:text-gray-200 transition duration-150 ease-in-out" href="#0">99,999₸</a>
              <a href="https://wa.me/77777064477">
                <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Satyp Aly</button>
              </a>
            </div>
            </div>

            {/* 3rd testimonial */}
            {/*<div className="flex flex-col h-full p-6 bg-gray-800 rounded" data-aos="fade-up" data-aos-delay="400">*/}
            {/*  <div>*/}
            {/*    <div className="relative inline-flex flex-col mb-4">*/}
            {/*      <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />*/}
            {/*      <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">*/}
            {/*        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />*/}
            {/*      </svg>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>*/}
            {/*  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">*/}
            {/*    <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>*/}
            {/*  </div>*/}
            {/*</div>*/}

          </div>

        </div>
      </div>
    </section>
  )
}
