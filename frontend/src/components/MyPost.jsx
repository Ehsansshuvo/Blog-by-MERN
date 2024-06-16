import React from 'react'

const MyPost = () => {
  return (
    <div class="shadow-lg mt-10">
      <p>Use shadow-none to remove an existing box shadow from an element. This is most commonly used to remove a shadow that was applied at a smaller breakpoint.</p>
      <div class="text-red-200 border-zinc-50">
        <button class=" hover:text-green-500" >Like</button>
        <button class="pl-2  hover:text-green-500">Comment</button>
        <button class="pl-2  hover:text-green-500">Share</button>
        <button class="pl-2  hover:text-green-500">Message</button>
      </div>
    </div>
  )
}

export default MyPost
