import React from 'react'

const Button = () => {
  return (
    
        // <button className="bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)] text-[--color-text] px-6 py-2 rounded-md hover:shadow-md hover:brightness-90 transition">
        //     Apply Now
        // </button>

        <button class="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
<span class="w-56 h-48 rounded bg-[var(--color-accent-from)] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-[var(--color-accent-from)] transition-colors duration-300 ease-in-out group-hover:text-white">Apply Now</span>
</button>
    
  )
}

export default Button