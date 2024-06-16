import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react';

const User = () => {
    const [isClickComment, setClickComment]=useState(false);
    return (
        <div>
        <Navbar/>
        <body class="ml-auto mr-auto w-1/2">
            <div class="w-full items-center justify-between">
                
                <div class='gap-4'>
                    <div class="shadow-lg mt-5">
                        <p>Use shadow-none to remove an existing box shadow from an element. This is most commonly used to remove a shadow that was applied at a smaller breakpoint.</p>
                        <div class="text-red-200 border-zinc-50">
                            <button class=" hover:text-green-500" >Like</button>
                            <button class="pl-2  hover:text-green-500" onClick={()=>setClickComment(true)}>Comment</button>
                            <button class="pl-2  hover:text-green-500">Share</button>
                            <button class="pl-2  hover:text-green-500">Message</button>
                        </div>
                        {
                            isClickComment===true?
                            <p>Comments</p>:<></>
                        }
                      </div>

                    </div>
                </div>
    
        </body>
        </div>

    )
}

export default User
