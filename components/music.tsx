import Image from "next/image";
import MyWhisper from "@/public/images/mywhisper.jpg"
import Apple from "@/public/images/apple.png"
import Spotify from "@/public/images/spotify.png"
import Youtube from "@/public/images/yt.png"

export default function Music() {
  return (
    <section className={"max-sm:relative max-sm:bottom-36"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="lg:py-12 max-sm:py-6 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4" data-aos="fade-up" data-aos-delay="200">My Whisper Домбыра ковер.</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="300">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          {/* Items */}
          <div className={"lg:flex lg:justify-start lg:items-center"}>
            <Image className={'max-w-full mb-10  mr-16 md:max-w-none h-auto rounded-2xl' } width={540} height={405} src={MyWhisper} data-aos="fade-right" data-aos-delay="200" alt={'Music My Whisper Album'} />
            <div>
              <ul className={"lg:text-2xl max-sm:text-xl cursor-pointer"} data-aos="fade-left" data-aos-delay="200">
                <li>1) Careless Whisper </li>
                <li>2) Stranger in the night</li>
                <li>3) Shape of my heart</li>
                <li>4) Just Like The First Day</li>
                <li>5) Historia de un amor</li>
                <li>6) Hallelujah</li>
                <li>7) Et si tu nexislais pas</li>
                <li>8) Любовь похожая на сон</li>
                <li>9) Есть только миг</li>
                <li>10) You are not alone</li>
                <li>11) Speak softly, Love</li>
                <li>12) I Just Called to Say I Love You</li>
              </ul>
              <div>
                <ul className={"flex items-center justify-start lg:-ml-8"} data-aos="fade-left" data-aos-delay="200">
                  <li><Image alt="Itunes" width={128} height={128} src={Apple}/></li>
                  <li><Image alt="Spotify" width={128} height={128} src={Spotify}/></li>
                  <li><Image alt="Youtube" width={128} height={128} src={Youtube}/></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
