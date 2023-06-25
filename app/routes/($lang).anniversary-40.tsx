import {Link} from "~/components";
import Banner from "~/assets/articles/anniversary-40-gshock/Banner.png"
import Banner2 from "~/assets/articles/anniversary-40-gshock/Banner2.png"
import Banner3 from "~/assets/articles/anniversary-40-gshock/Banner3.png"
import PhilosophyCasio from "~/assets/articles/philosophy-gshock/g-shock-kikuo.jpg"
import Gps from "~/assets/articles/tech-casio/gps.jpg"

export default function Anniversary() {
  return (
    <section className='md:p-12 p-4'>
      <h1 className='text-4xl font-bold uppercase'><span className='font-light'>40 лет</span> непрерывной надёжности
      </h1>
      <div className='mt-8'>
        <h2 className='text-2xl font-medium mb-3 uppercase'>История и основные принципы G-SHOCK</h2>
        <img src={Banner} alt="Banner"
             className="border-black md:border-[20px] border-[6px] w-full max-h-[450px] object-cover"/>
        <p className='mb-3 mt-8'>
          С момента своего запуска в 1983 году, G-SHOCK с его моделью DW-5000C, обладающей революционной ударопрочной
          структурой, поставил под сомнение привычное представление о хрупкости наручных часов. Этот шаг открыл новую
          эру в часовой индустрии, закрепив концепцию "тough watch" - "прочных часов".
        </p>
        <p className='mb-3'>
          Сейчас, когда G-SHOCK празднует свое 40-летие, его история продолжает развиваться, стремясь к совершенству в
          четырех ключевых аспектах: структуре, функциях, материалах и дизайне.
        </p>
        <p>
          Благодаря усиленной устойчивости, G-SHOCK обеспечивает надежность и практичность, что позволяет его носить в
          любой среде и при любых условиях. Это идеал, к которому стремится G-SHOCK - передать истинную прочность от
          эпохи к эпохе, продолжая преодолевать новые высоты.
        </p>
      </div>
      <div className='my-8'>
        <h2 className='text-2xl font-medium mb-3 uppercase'>Структура и материалы: поиск прочности®</h2>
        <img src={Banner2} alt="Banner2"
             className="border-black md:border-[20px] border-[6px] w-full max-h-[450px] object-cover"/>
        <p className='mb-3 mt-8'>
          G-SHOCK продолжает изучать инновационные подходы к повышению прочности своих часов, преодолевая крайние
          границы долговечности. Благодаря уникальной ударопрочной структуре, которая смягчает удары и вибрации, G-SHOCK
          стал синонимом надежности.
        </p>
        <p className='mb-3'>
          Ключевые компоненты защищены от внешних ударов, благодаря чему часы становятся надежными спутниками в любых
          условиях. Новые материалы, такие как углеродное волокно, титановый сплав и биомассовый пластик, используются
          для повышения прочности и уменьшения веса часов.
        </p>
      </div>
      <div className='mt-8'>
        <h2 className='text-2xl font-medium mb-3 uppercase'>Функции и дизайн: поддержка прогресса</h2>
        <img src={Banner3} alt="Banner3"
             className="border-black md:border-[20px] border-[6px] w-full max-h-[450px] object-cover"/>
        <p className='mb-3 mt-8'>
          Благодаря применению цифровых технологий G-SHOCK предоставляет продвинутые функции для своих часов. На примере
          миниатюризированных датчиков, которые могут измерять различные параметры окружающей среды, включая
          направление, атмосферное давление, высоту и глубину воды, G-SHOCK демонстрирует стремление к инновациям.
        </p>
        <p className='mb-3'>
          Благодаря радиоконтролю и солнечному заряду, время на часах всегда точное. Все эти функции украшены дизайном,
          придерживающимся концепции прочности и функциональности, что делает G-SHOCK идеальным выбором для тех, кто
          ищет действительно прочные и надежные часы.
        </p>
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
