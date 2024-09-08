import React, { useEffect, useState } from 'react';
import WordRotate from '../components/WordRoate';
import RetroGrid from '../components/RetroGrid';
import HomeSafari from './HomeSafari';
import HomeTop from './HomeTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
 // Import the loader component
import './Home.css';
import LoaderForHome from '../shared/loader/LoaderForHome';


const Home = () => {
    const [scrolled, setScrolled] = useState(false);
    const [loading, setLoading] = useState(true);
    const [online, setOnline] = useState(navigator.onLine);

    useEffect(() => {
        AOS.init();

        // Handle scroll for text size change
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 400);
        };
        window.addEventListener("scroll", handleScroll);

        // Simulate loading for 1 second
        const timeout = setTimeout(() => {
            if (navigator.onLine) {
                setLoading(false);
            }
        }, 1000);

        // Network status event listeners
        window.addEventListener('online', () => setOnline(true));
        window.addEventListener('offline', () => setOnline(false));

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeout);
        };
    }, []);

    if (loading || !online) {
        return <LoaderForHome/>;
    }

    return (
        <div>
            {/* Home top section start */}
            <div className="relative w-full h-[200vh]">
                <div className="sticky top-0 h-[100vh] flex flex-col items-center justify-center overflow-hidden rounded-lg bg-background z-10">
                    <div className='z-10' data-aos="fade-up" data-aos-duration="3000">
                        <h1 className={`font-transition ${scrolled ? "text-6xl " : "text-7xl"}`}>
                            let's take a journey in
                        </h1>    
                    </div>

                    <span className="z-10" data-aos="fade-up" data-aos-duration="3000">
                        <WordRotate
                            className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#3459bf] via-[#2693c2] to-[#3459bf] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent"
                            words={["CoderXen", "World"]}
                        />
                    </span>
                    <RetroGrid />
                </div>
            </div>
            {/* Home top section end */}

            {/* Home safari start */}
            <div className="relative mt-[-60vh] z-10">
                <HomeSafari />
            </div>
            {/* Home safari end */}
            <HomeTop />
        </div>
    );
};

export default Home;
