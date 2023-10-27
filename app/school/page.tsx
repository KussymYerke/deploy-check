import Music from "@/components/music";

export const metadata = {
    title: 'Home - Open PRO',
    description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/music'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
    return (
        <>
            <Hero />
        <Zigzag />
        <Music />
        {/*<Testimonials />*/}
    {/*<Newsletter />*/}
    </>
)
}
