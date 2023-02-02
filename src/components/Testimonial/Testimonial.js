import React from 'react'
import profile from '../../img/kham.png'
import taken from '../../img/Tonkean.png'
import bigspring from '../../img/BigSpring.png'
import clearbit from '../../img/Clearbit.png'
import mine from '../../img/Mine.png'
import snake from '../../img/Shake.png'

function Testimonial() {
  return (
    <div>
        <section className='mx-auto max-w-5xl items-center  mt-60 '>
            <h3 className='text-center text-3xl'>"What i love about Qubly is the easy way we can collaborate even if there 
                a lot of people involved in the process"</h3>

            <div className='max-auto text-center mt-12'>
                <img src={profile} class="mx-auto rounded-full max-h-36" alt="profile"/>
                <div className='mt-6 font-bold text-violet-700'>
                    <p>KHAMSY HERSEARCHENG</p>
                    <p className='mt-1'>khamsyher@gmail.com</p>
                </div>
            </div>
            <div className="border-b-2 border-violet-200 mt-6"></div>
            <div className='mx-auto flex justify-between mt-6 h-9'>
                <img src={taken} class="" alt="brandlogo"/>
                <img src={bigspring} class="" alt="brandlogo"/>
                <img src={clearbit} class="" alt="brandlogo"/>
                <img src={mine} class="" alt="brandlogo"/>
                <img src={snake} class="" alt="brandlogo"/>
            </div>

      </section>
    </div>
  )
}

export default Testimonial
