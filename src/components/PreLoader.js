import React from 'react'
import BarLoader from "react-spinners/BarLoader";


const PreLoader = () => {
    return (
     <div className="bg-black" style={{height: '100vh'}}>
      <BarLoader color='#080808' loading={true} size={200} />
     </div>
    )
}

export default PreLoader
