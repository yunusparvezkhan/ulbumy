import React from 'react'

const ErrorScreen = ({ errorMessage }) => {
    return (
        <div className='err-container p-20 flex flex-col items-center '>
            {/* <iframe src="https://embed.lottiefiles.com/animation/3097" className='neterrgif' title='Network Erorr' /> */}
            {/* <iframe src="https://embed.lottiefiles.com/animation/99345" className='neterrgif' title='Network Erorr'></iframe> */}
            {/* <iframe src="https://embed.lottiefiles.com/animation/98284" className='neterrgif' title='Network Erorr'></iframe> */}
            <iframe src="https://embed.lottiefiles.com/animation/90333" className='neterrgif' title='Network Erorr'></iframe>
            <label className='text-4xl font-light' >{errorMessage}</label>
            <label className='text-8xl mt-5' >{`:(`}</label>
        </div >
    )
}

export default ErrorScreen