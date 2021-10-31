import React from 'react'

function About(props) {
  return (
    <div className="container" style= {{ backgroundColor : props.Mode === 'dark' ? 'grey' : 'white',     color:props.Mode === 'dark' ? 'white' : 'black',} } my-3>
      <h1 >It is simply a set of utility functions to do operations on String objects. In fact, the whole class doesn't have any instance fields or methods. Everything is static.
           Consider it like a container to group functions with a text-based semantic </h1>
    </div>
  )
}

export default About
