import React, { useEffect, useState } from 'react'
import Loader from '../shared/loader/Loader';
import Aos from 'aos';
import Meteors from '../components/Meteors';

export default function AboutUs() {
  const [loading, setLoading] = useState(true);
  const [online, setOnline] = useState(navigator.onLine);
  useEffect(() => {
    Aos.init();

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
        clearTimeout(timeout);
    };
}, []);
  if (loading || !online) {
    return <Loader />;
}
  return (
    <div>
     <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={30} />
      <span className="font-semibold leading-none text-center text-transparent whitespace-pre-wrap pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-8xl dark:from-white dark:to-slate-900/10">
        About us
      </span>
    </div>
    <div>
      <img src="https://wiatechnextjs.vercel.app/assets/images/page/circel.png" className='' alt="" />
    </div>
    </div>
  )
}
