import React from 'react'

function Leaders(props) {
    return (
        <div>
            <h1>API Data below</h1>
            {props.leaders.map((leader) => {
                return (
                    <div key={leader.id}>
                        <h3>{leader.name}</h3>
                        <h3>{leader.style}</h3>
                    </div>
                );
            })}
        </div>
    );
}

export default Leaders
