"use client"
import { Album, ArrowRight, HeartHandshake, Home, LogIn, PhoneCall, Users } from 'lucide-react'
import React, { useState } from 'react'
import CarouselImage from '@/components/CarouselImage'
import VerticalImage from '@/components/verticalImage'

const page = () => {
        const backgroundImage = "img/CEO.jpg"
        const image1= "img/40626.jpg"
        const image2 ="img/CEO.jpg"
        const [image, setImage] = useState()
        const [email, setEmail] = useState()
        const [amount, setAmount] = useState(0)
  return (
    <main>
      <section className="bg-[#008000] w-full p-5" > 

        <nav className="mx-20 flex justify-between" >
          <div className="flex gap-5">
            <img src="img/40626.jpg" className=" w-10 h-10"/>
            <h1 className="text-4xl font-bold text-white" > African Impecable  </h1>

          </div>



          <div className="flex space-x-10">
            <a href="/" className="flex gap-2 text-white" >
              <Home/>
               Home
            </a>
            <a href="/" className="flex gap-2 text-white" >
              <Users/>
               About
            </a>
            <a href="/" className="flex gap-2 text-white" >
              <Album/>
               Photo Gallary
            </a>
            <a href="/" className="flex gap-2 text-white" >
              <PhoneCall/>
               Contact Us
            </a>
            <a href="/" className="flex gap-2 text-white" >
              Sign
              <LogIn/>/<HeartHandshake/>
               
            </a>


          </div>


        </nav>



      </section>


      <section className="grid grid-cols-1 md:grid-cols-3 gap-20">

        <div className="mx-5 col-span-1 z-50 space-y-10"> 
          <p className="text-green-600"> African Inpecable Leaders - NGO </p>
          <h1 className="text-[90px] font-extrabold"> African <br/> 
          
         <span className="text-green-800"> Inpecable Leaders </span></h1>
          <p> welcome to african Inpecable leaders, an NGO 
          in Nigeria fostering Ethical leadership for a 
          prosporious and inclusive africa. join us in
          the shaping of a brighter futures
           </p>

          
          <button className="flex gap-3 bg-[#008000]  rounded-full py-3 px-3 text-white">Donate <ArrowRight/></button>



          <div className="flex justify-between items-center">
            <p className="flex flex-col"><span className="text-4xl font-bold">1k+</span> Workshop
            </p>
            <p className="flex flex-col"><span className="text-4xl font-bold">500k+</span> Tranining
            </p>
            <p className="flex flex-col"><span className="text-4xl font-bold">250k+</span> Empowerment
            </p>


          </div>

        </div>

        <div className="col-span-2 ml-[60px] relative" >
          <img src= {image? image: backgroundImage}/>

          <div className="absolute flex gap-5 z-40 top-[1150px] left-[150px]">
            <div className="bg-gray-600 rounded-md w-full h-full flex justify-center" >
              <img src={image1} className="w-[150px] h-py px-5" onClick={()=>setImage(image1)} />
               </div>
            <div className="bg-gray-600 rounded-md w-full h-full flex justify-center" >
              <img src="img/CEO.jpg"className="w-[150px] h-py px-5" />
               </div>
            <div className="bg-gray-600 rounded-md w-full h-full flex justify-center" >
              <img src="img/CEO.jpg"className="w-[150px] h-py px-5" />
               </div>
  


          </div>


        </div>

    </section>


    <section className=" pb-10 relative ">
      <br/>  
      <br/>  
      <br/>  
      <br/>  
      <br/>  
      <div className=" px-10 space-y-10  ">
        <h1 className="text-green-700 font-bold text-4xl"> Who we are </h1>
        <p className=" list-item"> . African Impeccable Leaders Initiative (AILI) is a Non-profit Organization Impacting Africa since 2012.</p>
        <p className=" list-item"> . AILI - On a culture/mindset change missin. Getting Africa to unlearn and relearn.
          Building Right Ethics to raising Impeccable African Leaders with strong characters 
          to set the pace for making things right. </p>
        <p className=" list-item"> . African Impeccable: Africa Impeccable Leaders Initiative is a non-governmental, 
            non-political and not-for-profit incorporated trustee establishment to promote, facilitate, 
            and improve community wellbeing. </p>
        <p className=" list-item"> .In line with our core objectives, the organization is driven by a clear vision, a strong mission commitment as well as a definite goal.</p>
        <p className=" list-item"> .The establishment of the organization is inspired by the long term understanding of development outreaches, 
          its challenges, gaps, and intervention opportunities. We believe that well-conceived programs, driven by a 
          clear-cut strategy, implemented by knowledgeable professionals through the judicious and prudent deployment of 
          resources, has the capacity to galvanize high impact sustainable development.</p>
        <p className=" list-item">. AILI Team of professionals with experience in coaching and development strategies; using our 
          multi-disciplinary consulting design to provide pro-active training and development solutions will birth the 
          paradigm shift. It is out heartbeat to restructure mind, build capacity, enhance performance, change negative 
          mindset and culture, to cause the desired transformation.</p>

       <div className="grid  grid-cols-1 md:grid-cols-3 gap-2 pb-10">
          <div className="shadow-2xl rounded-2xl">

              <div className=" py-4 px-4">
              <p className=" text-green-600 text-4xl text-bold "> Our Vision </p> <span> We Envisage The Beautiful Nigeria,
           And In The Long Run An Ebony Africa- 
          Admirably Beautiful In All Ramifications. A Race To Reckon With; A Colour To Gaze. 
          Manifesting And Showcasing Her Strength, Prowess, And Endowment Globally. </span> 
              </div>                  

          </div>



            <div className=" shadow-2xl rounded-2xl">

              <div className="py-4 px-4">
              <p className=" text-green-600 text-4xl text-bold "> Our Mission </p>
        <span> To Execute Leadership Trainings, Full Bouquets And Or Simplified tips, Coaching, Mentoring, 
          Sensitizations, And Supervisory Follow-up Programs. We Also Engage In Partnerships With Institutions, 
          Local Governments, And States. AILI Is Projecting Her First National Outreach In The Near Future.
          One On One Sessions Of Our Team's Socio-phsycologist With All Levels Of Staff, Government Official And
           Individual Clients Is Key And Highly Recommended As The Case May Be.The Young Ones Are A Highlight In 
           Our Heartbeat. </span>
              </div>


            </div>


           <div className=" shadow-2xl rounded-2xl" >

           <div className=" py-4 px-4">
           <p className="text-green-600 text-4xl text-bold"> our strategy</p>
        <span> 
          <p className=" list-item">. Network with institutes of same passion </p>
          <p>. Executive Seminars,
            Training/Mentoring Workshops, Crusades, 
            Symposiums, Empowerment Programs</p>
          <p className=" list-item">Carefully observe Potentials in participants, 
              build on such potentials, empower, 
              and institute supervisory machineries</p>
          <p className=" list-item">Delibrate at stirring up a 
           proactive, self-motivated deposition</p>
        </span>

           </div>

          </div>

       </div>




      </div>



    </section>

    <section className=" px-20"> 
      <p className="text-4xl fnot-bold text-green-600"> Photo Gallary </p>
        <CarouselImage/>


        <div className=" mx-10 px-10 flex items-center justify-center">

          <VerticalImage/>

          
        </div>

    </section>


  
  

    
    

      
      

      





<section className="relative mt-[120px] mx-10 mb-5">

<div className="space-y-3">

  <input type=" email" placeholder="enter email" className="border-2 border-green-600
  py-3 px-5 w-full rounded-md" onChange={(e) => setEmail(e.target.value)} />
  <input type=" number" placeholder="enter amount" className="border-2 border-green-600
  py-3 px-5 w-full rounded-md " onChange={(e) => setAmount(e.target.value) }/>
  {email && amount && (<button className="bg-green-700 text-white py-3 px-3 rounded-md w-full">Donate Now </button>)}
  <p> Email: {email} </p>
  <p> Amount: {} </p>

</div>

</section>

    </main>
  )
}

export default page