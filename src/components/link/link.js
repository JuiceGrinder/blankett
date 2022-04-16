import React from 'react';

export const Link = ({listOfLinks}) => {
    return (
        <>
            {listOfLinks.map(app => {
                return(
                    <div key={app.name}>
                        <a href={app.url}>{app.name}</a>
                    </div>
                )
            })}
        </>
    )
}