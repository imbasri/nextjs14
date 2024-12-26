import React from 'react'
import Link from 'next/link'
const HomePage = () => {
  
  return (
    <div>
      <Link className="btn btn-accent" href="/about" >About</Link>
      <Link className="btn btn-accent mx-2" href="/category" >Category</Link>
    </div>
  )
}

export default HomePage