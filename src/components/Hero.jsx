import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
        <p>IT'S TIME TO GET</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Monumentally<span className='text-gray-800'>massive</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>I hearby acknowledge that I may become <span className='text-gray-800 font-medium'>monumnetally massive</span> and accept all risks of becoming the local <span className='text-gray-800 font-medium'>mass monstrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
      <Button func={() => {
        window.location.href = '#generate'
      }} text={"Accept & Begin"}></Button>
    </div>
  )
}
