import React from 'react'

const SkeletonLoader = ({ times }) => {
    const boxes = Array(times).fill(0).map((_, i) => {
        return <div key={i}>Box</div>
    })

    return boxes;
}

export default SkeletonLoader;