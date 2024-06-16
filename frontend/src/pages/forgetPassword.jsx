import React from 'react'
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';


const ForgetPassword = () => {
    const navigate= useNavigate( );
    return (
      
        <div class="w-full max-w-xs m-auto h-screen">
            <button onClick={() => navigate(-1)} class="mt-10 text-left inline-grid bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Go Back
          </button>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
          </div>

        </form>
      </div>
        
      );
}

export default ForgetPassword;
