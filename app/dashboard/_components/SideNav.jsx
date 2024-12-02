import { GraduationCap, Hand, Icon, LayoutIcon, Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideNav = () => {

    const menuList = [
        {
            id: 1,
            name: "Dashboard",
            Icon: LayoutIcon,
            path: '/dashboard'
        },
        {
            id: 2,
            name: "Student",
            Icon: GraduationCap,
            path: "/dashboard/students"
        },
        {
            id: 3,
            name: "Attendance",
            Icon: Hand,
            path: "/dashboard/attendance"

        },
        {
            id: 4,
            name: "Setting",
            Icon: Settings,
            path: "/dashboard/setting"

        }


    ]

    return (
        <div className='border shadow-md h-screen p-5'>
            <Image src={'/images.png'}
                width={180}
                height={60}
                alt='logo'
            />

            <hr className='my-5'/>

            {menuList.map((menu,index) => (
                <Link href={menu.path}>
                <h2 className='flex items-center gap-3 text-md p-4
                text-slate-500
                hover:bg-red-700
                hover:text-white
                cursor-pointer
                '>
                    <menu.Icon></menu.Icon>
                    {menu.name}
                </h2>
                </Link>
            ))}
        </div>
    )
}

export default SideNav
