import { type } from '@testing-library/user-event/dist/type';
import React, { Component, useState } from 'react';

function Validation() {

    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [error,setError]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (firstName.length == 0 || lastName.length == 0) {
            setError(true);
        }
    }
    return (  
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={e=>setFirstName(e.target.value)} />
                </div>
                {error && firstName.length<=0?<label>First Name Can't be Empty</label>:"" }
                <br />
                <div>
                    <input onChange={e=>setLastName(e.target.value)} />
                </div>
                {error&& lastName.length<=0?<label>Last Name Can't be Empty</label>:"" }
                <br />  
                <div>
                    <button>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Validation;