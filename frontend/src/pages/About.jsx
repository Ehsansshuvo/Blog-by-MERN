import React from 'react'
import Navbar from '../components/Navbar'
import userPic from '../components/assets/user1.jpeg'
const About = () => {
  return (
    <div>
      <Navbar/>
      <div class="mt-5">
        <div>
            <div class="flex flex-grow shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] ">
                <img src={userPic} class="h-40 w-40 content-start"/>
                <p class="flex flex-grow justify-between">When using arbitrary 
                one thing to note, make sure there are zero spaces. my setup wasn't working and I realized i had spaces between the commas. once i got rid of them it worked perfectly
                values in brackets, Tailwind converts the arbitrary value directly to a CSS property, replacing underscores with spaces. So, to define an arbitrary inset box shadow, we can simply use:</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About