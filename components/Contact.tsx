'use client'
import React, {useState} from 'react';
import SectionHeader from "@/components/section-header";
import useSectionInView from "@/hooks/useSectionInView";
import Image from "next/image";
import sendIcon from "../public/sendIcon.png";
import darkSendIcon from "../public/darkSendIcon.png";
import {sendEmail} from "@/lib/sendEmail";
import toast from "react-hot-toast";
import {Button, Spinner} from "flowbite-react";
import {useTheme} from "@/Context/ModeThemeContext";

function Contact() {
    const {ref} = useSectionInView('Contact')
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {mode} = useTheme()
    return <>
        <section ref={ref} id='contact' className='flex items-center justify-center flex-col sm:mt-18 scroll-mt-24 mx-auto w-[90%] sm:w-[70%] xl:w-[90%]'>
            <div>
                <SectionHeader>
                    Contact Me
                </SectionHeader>
            </div>
            <div className='flex sm:mt-6 gap-x-28 items-center'>
                <div className='hidden xl:block w-[50%]'>
                    <Image className='relative left-[225px]' width={350} src={mode === "light" ? sendIcon : darkSendIcon } alt=""/>
                    <h4 className='font-extrabold text-gray-900 dark:text-gray-200 uppercase text-[4.5rem]'>
                        Want to Start a new Project
                    </h4>
                    <p className='italic text-end text-[22px] dark:text-gray-400 text-gray-600'>or just say Hello</p>
                </div>
                <div className='w-[100%] xl:w-[50%]'>
                    <h4 className='font-medium mb-8 sm:my-8 text-[20px] dark:text-gray-200'>Get in touch</h4>
                    <p className="text-gray-600 -mt-6 dark:text-white">
                        Please contact me directly at{" "}
                        <a className="underline text-gray-900 dark:text-gray-400" href="mailto:muhammadatyaa66@gmail.com@gmail.com">
                            muhammadatyaa66@gmail.com
                        </a>{" "}
                        or through this form.
                    </p>
                    <form
                        className="mt-5 sm:mt-10 flex flex-col dark:text-black"
                        action={async (formData)=>{
                           const {error} = await sendEmail(formData)
                            if(error) {
                                toast.error(error)
                            }else {
                                toast.success("Email sent successfully!")
                            }
                            setIsLoading(false)
                        }}
                        onSubmit={()=>setIsLoading(true)}
                    >
                        <input
                            className="h-14 px-4 rounded-lg borderBlack dark:bg-white  dark:bg-opacity-100 transition-all dark:outline-none"
                            name="senderEmail"
                            type="email"
                            required
                            maxLength={500}
                            placeholder="Your email"
                        />
                        <textarea
                            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-100  transition-all dark:outline-none"
                            name="message"
                            placeholder="Your message"
                            required
                            maxLength={5000}
                        />
                        {   isLoading ?
                            <Button type='submit' className='bg-gray-900 bg-opacity-80 text-gray-300 mt-3 rounded-full py-3 flex justify-center items-center'>
                                <Spinner  aria-label="Sending..." className='mr-2 animate-spin w-[20px] mt-0.5 flex justify-center items-center' size='lg'/>
                                <span>Sending...</span>
                            </Button> :
                            <button type='submit' className='bg-gray-900 text-gray-300 dark:text-gray-100 dark:bg-[rgba(255,255,255,0.1)] mt-3 rounded-full py-3'>Submit</button>}
                    </form>
                </div>
            </div>
        </section>
    </>
}

export default Contact;