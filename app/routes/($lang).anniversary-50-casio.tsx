import {Link} from "~/components";
import Banner2 from "~/assets/articles/anniversary-50-casio/anniversary-article.jpeg"
import Banner3 from "~/assets/articles/anniversary-40-gshock/Banner3.png"
import PhilosophyCasio from "~/assets/articles/philosophy-gshock/g-shock-kikuo.jpg"
import Gps from "~/assets/articles/tech-casio/gps.jpg"

export default function Anniversary() {
  return (
    <section className='md:p-12 p-4'>
      <h1 className='text-4xl font-bold uppercase'><span className='font-light'>50 ЛЕТ</span> ВНЕ ВРЕМЕНИ
      </h1>
      <div className='mt-8'>
        <div className="video-wrapper">
          <iframe
            width="560"
            height="600"
            src="https://www.youtube.com/embed/mLr8HqK11Fs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <p className='mb-3 mt-8'>
          Часы просто складывают секунды. От 0 до 1... и далее. Время движется вперед, никогда не останавливаясь, постоянно создавая прогресс. Casio сосредоточена на создании новых возможностей для часов. Принимая то, что лежит впереди — За пределами привычного, за пределами ранее представленного, за пределами того, что все считают возможным. 50 лет часов Casio — Движение вперед с креативностью и инновациями.
        </p>
      </div>
      <div className='my-8'>
        <img src={Banner2} alt="Banner2"
             className="border-black md:border-[20px] border-[6px] w-full max-h-[650px] object-cover"/>
      </div>
      <hr/>
      <h2 className='text-xl my-8'>ДРУГИЕ СТАТЬИ</h2>
      <div className='flex flex-col md:flex-row justify-between gap-16'>
        <div className='md:w-1/2'>
          <h2 className='text-2xl font-medium mb-3'>ФИЛОСОФИЯ CASIO</h2>
          <img src={PhilosophyCasio} alt="PhilosophyHeader" className="border-black md:border-[20px] border-[6px] w-full max-h-[450px] object-contain
         object-left-top"/>
          <p className='mb-3 mt-8'>
            G-SHOCK отличает не только надежность, но и элегантность технических решений: начиная с использования
            экологичных солнечных батарей и заканчивая технологиями Bluetooth®, GPS и радиосинхронизации.
          </p>
          <Link to='/history-gshock'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Подробнее
            </button>
          </Link>
        </div>
        <div className='md:w-1/2'>
          <h2 className='text-2xl font-medium mb-3'>ТЕХНОЛОГИЙ CASIO</h2>
          <img src={Gps} alt="Gps" className="border-black md:border-[20px] border-[6px] w-full max-h-[450px] object-contain
         object-right-top"/>
          <p className='mb-3 mt-8'>
            Какие бы технологии ни предпочитал владелец G-SHOCK — он всегда может быть уверен, что его часы воплощают
            последние достижения техники и отличаются абсолютной надежностью!
          </p>
          <Link to='/tech-casio'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Подробнее
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
