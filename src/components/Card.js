import React from 'react'


const Card = ({children}) => {
return (
<>
<div 
  className="bg-white mx-4 md:mx-10 mb-10 transform transition duration-500 hover:scale-105 hover:shadow rounded" 
  style={{maxWidth: '500px'}}
>
  <div className="w-full h-full mx-auto px-1">
  {children}
  </div>
</div>       
</>
)
}

export default Card
