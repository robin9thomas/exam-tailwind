import React from 'react';


function ToggleViewWrapper({children}){
    return(
        <div className="w-1/12 flex rounded-sm">
            {children}
        </div>
    )
}

export default ToggleViewWrapper;