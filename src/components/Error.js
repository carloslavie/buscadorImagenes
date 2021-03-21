import React from 'react';

const Error = ({mensaje}) => {
    return ( 
        <p className="py-3 m-4 text-center alert alert-primary">{mensaje}</p>
     );
}
 
export default Error;