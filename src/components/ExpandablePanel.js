import React, { useState } from 'react'
import Button from './Button';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

const ExpandablePanel = ({ header, bgcolor, children }) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    }

    return (
        <div className={`my-2 ${bgcolor} rounded`}>
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
            {expanded && <div className='p-2'>{children}</div>}
        </div>
    )
}

export default ExpandablePanel