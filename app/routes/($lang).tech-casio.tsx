import {Link} from "~/components";
import Gps from "~/assets/articles/tech-casio/gps.jpg"
import Funk from "~/assets/articles/tech-casio/funk.jpg"
import ToughSolar from "~/assets/articles/tech-casio/tough_solar.jpg"
import SmartAccess from "~/assets/articles/tech-casio/smart_access.jpg"
import ToughMovement from "~/assets/articles/tech-casio/tough_movement.jpg"
import Sensor from "~/assets/articles/tech-casio/sensor.jpg"
import PhilosophyCasio from "~/assets/articles/philosophy-gshock/g-shock-kikuo.jpg"
import AnniversaryGshock from "~/assets/articles/anniversary-40-gshock/anniversary-article.png";

export default function TechCasio() {
  return (
    <section className='md:p-12 p-4'>
      <h1 className='text-4xl font-bold'><span className='font-light'>ТЕХНОЛОГИИ</span> CASIO</h1>
      <div className='mt-8'>
        <h2 className='text-2xl font-medium mb-3'>ИННОВАЦИОННОСТЬ И ФУНКЦИОНАЛЬНОСТЬ</h2>
        <p className='mb-3'>Бизнесмены, которые много путешествуют, особенно ценят функции, такие как радиосинхронизация
          и GPS. В то же время спортсмены и любители активного отдыха придают большое значение точным датчикам, которые
          позволяют отслеживать изменения погоды, приливы и отливы, а также обеспечивают навигацию в незнакомой
          местности. Эти часы работают на солнечных батареях, которые обеспечивают экологически чистую энергию, избыток
          которой накапливается в аккумуляторе.
        </p>
        <p>Какие бы технологии ни предпочитал владелец G-SHOCK — он всегда может быть уверен, что его часы воплощают
          последние достижения техники и отличаются абсолютной надежностью!
        </p>
      </div>
      <div className='mt-8'>
        <h2 className='text-2xl font-medium mb-3'>ГИБРИДНАЯ ТЕХНОЛОГИЯ GPS</h2>
        <img src={Gps} alt="Gps" className="border-black md:border-[20px] border-[6px] w-full max-h-[450px] object-contain
         object-right-top"/>
      </div>
      <div className='mt-8'>
        <h2 className='text-lg font-medium mb-3 uppercase'>Точное время в любой точке мира</h2>
        <p className='mb-3'>
          Благодаря инновационной гибридной технологии GPS, сочетающей энергосберегающий прием сигналов GPS и
          радиосинхронизацию (Multiband 6), для настройки часов используются две эффективные взаимодополняющие системы,
          которые позволяют определить точное время почти в любой точке мира.
        </p>
        <p className='mb-3'>
          модели G-SHOCK автоматически принимают доступные радиосигналы синхронизации в Европе, Северной Америке,
          Японии, отдаленных районах Канады, Центральной Америки и Китая, что позволяет G-SHOCK работать с точностью
          атомных часов. Если данный тип сигнала недоступен, часы — также автоматически — проводят корректировку времени
          на основе сигнала GPS. Также обе системы допускают ручную настройку.
        </p>
      </div>
      <div className='mt-8'>
        <h2 className='text-2xl font-medium mb-3'>RADIO TECHNOLOGY</h2>
        <img src={Funk} alt="Sensor" className="border-black md:border-[20px] border-[6px] w-full max-h-[450px] object-contain
         object-left-top"/>
        <h2 className='text-lg font-medium mb-3 uppercase mt-8'>Автоматическая точность</h2>
        <p className='mb-3'>
          Часы G-SHOCK с радиосинхронизацией снабжены крошечной антенной, которая улавливает радиосигналы и позволяет
          точно фиксировать время.
        </p>
        <p className='mb-3'>
          Преимущества часов с радиосинхронизацией очевидны: после настройки на конкретный часовой пояс G-SHOCK с
          радиосинхронизацией будут всегда отображать точное местное время.
        </p>
        <p>
          Они принимают радиосигнал почти по всей Европе — а многие модели также принимают сигналы в Северной Америке,
          отдельных районах Канады и Мексики, в Японии и Китае. В Европе перевод часов с летнего на зимнее время
          происходит полностью автоматически.
        </p>
      </div>
      <div className='my-8'>
        <h2 className='text-2xl font-medium mb-3'>TOUGH SOLAR®</h2>
        <img src={ToughSolar} alt="ToughSolar" className="border-black md:border-[20px] border-[6px] w-full max-h-[450px] object-contain
         object-right-top"/>
        <h2 className='text-lg font-medium mb-3 uppercase mt-8'>Экологически чистая энергия</h2>
        <p className='mb-3'>
          Интегрированная солнечная батарея завершает образ надежных часов G-SHOCK: почти незаметный фотоэлемент на
          циферблате моделей TOUGH SOLAR® служит независимым и экологичным источником энергии для часов.
        </p>
        <p className='mb-3'>
          При этом «лишняя» энергия накапливается в аккумуляторе и при необходимости используется, когда часы
          оказываются в темноте — традиционная замена батареек остается в прошлом.
        </p>
        <p>
          Зарядка происходит автоматически и не требует активации вручную. Если часы находятся в темноте в течение
          долгого времени, они самостоятельно переходят в режим экономии энергии. Таким образом резерв хода в темноте
          достигает 24 месяцев.
        </p>
      </div>
      <div className='mt-8'>
        <h2 className='text-2xl font-medium mb-3'>SMART ACCESS</h2>
        <img src={SmartAccess} alt="SmartAccess" className="border-black md:border-[20px] border-[6px] w-full max-h-[450px] object-contain
         object-left-top"/>
        <h2 className='text-lg font-medium mb-3 uppercase mt-8'>Быстрый доступ к важным функциям</h2>
        <p className='mb-3'>
          Инновационная система интеллектуального доступа Smart Access обеспечивает быстрый и интуитивно понятный доступ
          ко всем важным функциям с помощью электронной заводной головки. Будильник или таймер настраиваются путем
          вращения и нажатия на головку.
        </p>
        <p className='mb-3'>
          Чтобы предотвратить случайное переключение между функциями часов, система Smart Access защищена фиксатором
          головки.
        </p>
      </div>
      <div className='my-8'>
        <h2 className='text-2xl font-medium mb-3'>TOUGH MOVEMENT®</h2>
        <img src={ToughMovement} alt="ToughMovement" className="border-black md:border-[20px] border-[6px] w-full max-h-[450px] object-contain
         object-right-top"/>
        <h2 className='text-lg font-medium mb-3 uppercase mt-8'>Автоматическая настройка стрелок</h2>
        <p className='mb-3'>
          Технология Tough Movement объединяет четыре инновационные функции: определение времени с точностью до секунды
          с помощью технологии радиосинхронизации Multiband 6, экологичные батареи Tough Solar, невероятную прочность
          гибридной конструкции и автоматическую настройку стрелок.
        </p>
        <p className='mb-3'>
          Точность базовой настройки стрелок аналоговых моделей G-SHOCK проверяется каждый час и корректируется при
          обнаружении отклонений (например, после удара или в результате воздействия магнитных полей).
        </p>
      </div>
      <div className='mt-8'>
        <h2 className='text-2xl font-medium mb-3'>ДАТЧИКИ И ТЕХНОЛОГИЯ</h2>
        <img src={Sensor} alt="Sensor" className="border-black md:border-[20px] border-[6px] w-full max-h-[450px] object-contain
         object-left-top"/>
        <h2 className='text-lg font-medium mb-3 uppercase mt-8'>Объединяем усилия, чтобы противостоять стихии</h2>
        <p className='mb-3'>
          Ряд моделей G-SHOCK снабжен высокочувствительными датчиками. Высокочувствительные миниатюрные датчики в
          различных моделях позволяют определять стороны света, высоту (до 10 000 м), глубину (до -80 м), а также
          атмосферное давление (260/1 100 ГПа)/температуру (от -10°C до +60°C) и сообщают о резких изменениях погоды с
          помощью звукового сигнала. Даже в самых суровых условиях.
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
            экологичных солнечных батарей и заканчивая технологиями Bluetooth®, GPS и радиосинхронизации, в часах
            G-SHOCK
            всегда находили применение самые современные технические достижения.
          </p>
          <Link to='/history-gshock'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Подробнее
            </button>
          </Link>
        </div>
        <div className='md:w-1/2'>
          <h2 className='text-2xl font-medium mb-3'>40-ЛЕТНИЙ ЮБИЛЕЙ G-SHOCK</h2>
          <img src={AnniversaryGshock} alt="AnniversaryGshock" className="border-black md:border-[20px] border-[6px] w-full max-h-[450px] object-contain
         object-right-top"/>
          <p className='mb-3 mt-8'>
            При выпуске в 1983 году модель G-SHOCK DW-5000C с революционной ударопрочной конструкцией стала первыми
            наручными часами. которые опровергли традиционное представление о часах как о предмете, который можно
            разбить. История непрерывной эволюции
            G-SHOCK.
          </p>
          <Link to='/anniversary-40'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Подробнее
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
