import React, { useEffect, useState } from 'react'
import Loader from '../shared/loader/Loader';
import Aos from 'aos';

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
      <h1>hello this is about us page</h1>
    </div>
  )
}
