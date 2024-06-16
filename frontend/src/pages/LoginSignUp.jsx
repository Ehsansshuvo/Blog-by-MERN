import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'

const LoginSignUp = () => {
    const [state, stateSet]= useState('Sign In');
  
    return (
      
      <div class="w-full max-w-xs m-auto h-screen">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
            <p class="text-center text-blue-500 font-bold text-2xl">{state}</p>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
        </div>
        {
          state==='Sign Up'?
          <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="country">
            Country
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country" type="text" placeholder="Country"/>
        </div>:<></>
        }
        
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            {state}
          </button>
          {state==="Sign In"?
              <a onClick={()=>stateSet("Sign Up")} class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                   Create Account?</a>
            : <a onClick={()=>stateSet("Sign In")} class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Have Account?</a>
          }
        </div>
        <div class="text-center justify-between">
          {
            state==="Sign In"?
             <Link to='/forgetPassword'><p class=" align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                    Forget Password?
              </p></Link>: <></>
            }
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2024 Ahosan. All rights reserved.
      </p>
    </div>
      
    );
}

export default LoginSignUp
