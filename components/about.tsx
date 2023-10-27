import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function Blocks() {
    return (
        <section>
            <div className={"max-w-3xl mx-auto text-center pb-12 md:pb-5"}>
                <h1 className="h2 mb-4">Тегін Youtube-та сабақтар</h1>
            </div>
            <ModalVideo
                thumb={VideoThumb}
                thumbWidth={1024}
                thumbHeight={576}
                thumbAlt="Modal video thumbnail"
                video="/videos/video.mp4"
                videoWidth={1920}
                videoHeight={1080} />
            <div className={"max-w-3xl mx-auto text-center pb-12 md:py-20"}>
                <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3" href="https://www.youtube.com/@sabirabibatyr1580">Каналға өту</a>
            </div>
        </section>
    )
}
