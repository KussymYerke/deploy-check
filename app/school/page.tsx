import Music from "@/components/music";

export const metadata = {
    title: 'School',
    description: 'Sabira School',
}

import Hero from '@/components/hero'
import Features from '@/components/music'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Blocks from "@/components/blocks";
import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import About from "@/components/about"

export default function Home() {
    return (
        <>
            <Blocks />
            <About />
            {/*<Testimonials />*/}
            {/*<Newsletter />*/}
        </>
)
}
