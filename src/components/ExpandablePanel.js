import React, { useState } from 'react'
import Button from './Button';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

const ExpandablePanel = ({ header, children }) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    }

    return (
        <div className='mb-2 bg-20 rounded'>
            <div className='flex p-2 justify-between items-center'>
                <div className='flex flex-row items-center justify-between'>
                    {header}
                </div>
                <div>
                    <Button onClick={handleToggle} className="border-none" >
                        {expanded ? <GoChevronUp /> : <GoChevronDown />}
                    </Button>
                </div>
            </div>
            <div className={`p-2 ${expanded ? '' : 'hidden'}`}>
                {children}
            </div>
        </div>
    )
}

export default ExpandablePanel