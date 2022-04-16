import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGroupListAsync } from '../redux/linkSlice'
import { LinkGroup } from '../components/link/linkGroup';

export const Dashboard = () => {

    const groupList = useSelector((state) => state.links);
    const dispatch = useDispatch();

    // Dispatch Application List Async Call
    useEffect(() => {
        dispatch(fetchGroupListAsync())
    }, [dispatch])
    
    return (
        <>
            <LinkGroup linkGroups={groupList}/>
        </>
    )
}