"use client"

import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'

const Dashboard = () => {

    const { setTheme } = useTheme()

    useEffect(() => {
        setTheme('Dark');
    }, [])

    return (
        <div className='text-xl font-bold p-5'>
            Dashboard
        </div>
    )
}

export default Dashboard
