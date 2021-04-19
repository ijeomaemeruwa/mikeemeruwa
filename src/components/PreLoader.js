import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
import HashLoader from 'react-spinners/HashLoader'

const PreLoader = ({active, children}) => {
    return (
    <LoadingOverlay
      active={active}
      spinner={<HashLoader />}
    >
      {children}
    </LoadingOverlay>  
    )
}

export default PreLoader
