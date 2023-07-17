"use state"
import React from 'react'
import ServicePoint from './Product/servicePoint';


const Modals = ({
        closeFn = () => null,
        modal = ''
      }) => {
        return (
                <>
                        <ServicePoint closeFn={closeModal} modal={} />
                </>
        )
}

export default Modals