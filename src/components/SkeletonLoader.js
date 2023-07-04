import classNames from 'classnames'
import React from 'react'

const SkeletonLoader = ({ times, heightNwidth }) => {

    const outerClassNames = classNames(
        'relative', 'overflow-hidden', 'bg-gray-900', 'rounded', 'mb-2.5', heightNwidth
    );
    const innerClassNames = classNames(
        'animate-shimmer', 'absolute', 'inset-0', '-translate-x-full', 'bg-gradient-to-r', 'from-gray-900', 'via-gray-800', 'to-gray-900'
    );

    const boxes = Array(times).fill(0).map((_, i) => {
        return <div key={i} className={outerClassNames}>
            <div className={innerClassNames} />
        </div>
    })

    return boxes;
}

export default SkeletonLoader;