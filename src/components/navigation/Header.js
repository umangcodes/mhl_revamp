import React from 'react'

function Header() {
  return (
    <div className='sticky top-0 flex justify-around align-baseline py-5 bg-primaryDark'>
      <div className='text-2xl'>MHL</div>
      <div className="flex w-48 justify-around">
        <div>Home</div>
        <div>About</div>
      </div>

    </div>
  )
}

export default Header