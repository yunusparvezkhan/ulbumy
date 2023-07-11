import React from 'react'

const ErrorScreen = ({ errorMessage, gifw, gifh, msgs, exps, customStyle }) => {
    return (
        <div className={`p-20 flex flex-col items-center ${customStyle}`}>
            {/* <iframe src="https://embed.lottiefiles.com/animation/3097" width={gifw} height={gifh} title='Network Erorr' /> */}
            {/* <iframe src="https://embed.lottiefiles.com/animation/99345" width={gifw} height={gifh} title='Network Erorr'></iframe> */}
            {/* <iframe src="https://embed.lottiefiles.com/animation/98284" width={gifw} height={gifh} title='Network Erorr'></iframe> */}
            <iframe src="https://embed.lottiefiles.com/animation/90333" width={gifw} height={gifh} title='Network Erorr'></iframe>
            <label className={`${msgs} font-light`} >{errorMessage}</label>
            <label className={`${exps} mt-5`} >{`:(`}</label>
        </div >
    )
}

export default ErrorScreen