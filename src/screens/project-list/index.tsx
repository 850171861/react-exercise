import React from 'react';
import { useEffect, useState } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { cleanObject, useMount, useDebounce } from 'utils';
import * as qs from 'qs'
import { useHttp } from 'utils/http';

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {

    const [users, setUsers] = useState([])

    const [param, setParam] = useState({
        name: '',
        personId: ''
    })

    const [list, setList] = useState([])
    const client = useHttp()

    const debouncedParam = useDebounce(param, 200)

    useEffect(() => {
        client('projects', { data: cleanObject(debouncedParam) }).then(setList)

    }, [debouncedParam])

    useMount(() => {
        client('users').then(setUsers)
    })

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam} />
        <List users={users} list={list} />
    </div>
}