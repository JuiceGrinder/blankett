import React, {useState, useEffect} from 'react';
import { Link } from './link';

export const LinkGroup = ({linkGroups}) => {    
    return (
        <>
            {linkGroups.map(group => {
                return(
                    <div key={group.id}>
                        <h1>{group.header}</h1>
                        <Link listOfLinks={group.links}/>
                    </div>
                )
            })}
        </>
    )
}