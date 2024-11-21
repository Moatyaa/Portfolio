'use client'
import {BsMoon, BsSun} from "react-icons/bs";
import {useTheme} from "@/Context/ModeThemeContext";

export default function ModeSwitch() {
    const {mode, detectTheme} = useTheme();

    return<>
        <div onClick={detectTheme} className='border cursor-pointer border-gray-300 fixed rounded-full bottom-4 right-4 w-[60px]'>
            {mode === 'light' ?
                <div className='bg-gray-300 transform transition-all text-gray-900 cursor-pointer bg-opacity-80 rounded-full border-white border-opacity-65 backdrop-blur text-[18px] flex justify-center items-center shadow-lg h-[30px] w-[30px]'>
                    <BsSun/>
                </div> :
                <div className='bg-gray-300 transform translate-x-[100%] transition-all text-gray-900 cursor-pointer bg-opacity-80 rounded-full border-white border-opacity-65 backdrop-blur text-[18px] flex justify-center items-center shadow-lg h-[30px] w-[30px]'>
                    <BsMoon/>
                </div>
            }
        </div>
    </>
}