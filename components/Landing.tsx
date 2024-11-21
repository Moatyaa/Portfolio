import React from 'react';
import Image from "next/image";
import landingImage from '@/public/cer2.png'
function Landing() {
    return (
        <section className='landing h-[100vh]'>
            <Image src={landingImage} alt='landing image' />
       </section>
    );
}

export default Landing;