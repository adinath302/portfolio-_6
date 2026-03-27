import React from 'react'

const Navbar = () => {
  return (
    <section className='fixed top-0 left-0 w-full z-50 flex py-6 px-6 items-center bg-black/50 backdrop-blur-md'>

      <div className='max-w-173 w-full mx-auto flex py-6 px-6 items-center justify-between'>

        <span className='font-mono text-sm q1 text-gray-300'>
          <span className=''>
            ~/
          </span>
          adinath.codes
        </span>

        <ul className='q1 flex gap-6 items-center text-[12px]  md:text-[14px] font-mono mr-2.75 text-white'>
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar;
