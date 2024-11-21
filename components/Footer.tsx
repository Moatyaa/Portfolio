import React from 'react';
import Image from "next/image";
import {socialLinks} from "@/lib/data";
import Link from "next/link";

function Footer() {
    return (
        <>
            <footer className=" mt-14 p-4 text-center ">
                <div className='w-[90%] mx-auto sm:w-[70%] xl:w-[90%]'>
                    <ul className='flex gap-x-5 sm:gap-x-10 justify-center'>
                        {socialLinks?.map((link, index) =>
                            <li key={index}>
                                <Link href={link.href} target='_blank'>
                                    <Image width={35} height={35} src={link.icon} alt={link.name}/>
                                </Link>
                            </li>
                        )}
                    </ul>
                    <p className='mt-4 text-[13px]'>&copy; 2024 <span className='font-medium text-gray-900 dark:text-gray-400 text-[16px]'>Muhammad Atya</span> .
                        All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;