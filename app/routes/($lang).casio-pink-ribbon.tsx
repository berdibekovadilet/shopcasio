import {Link} from '~/components';
import Banner2 from '~/assets/banners/casio-pink-ribbon.png';
import Model1 from '~/assets/articles/pink-ribbon/DW-5600PK-1.png';
import Model2 from '~/assets/articles/pink-ribbon/GMD-S5610PK-4.png';
import Gps from '~/assets/articles/tech-casio/gps.jpg';

export default function Anniversary() {
  return (
    <section className="md:p-12 p-4 bg-pink-400">
      <h1 className="text-4xl font-bold uppercase">
        Присоединяйтесь к G-SHOCK, чтобы поддержать информацию о раке груди.
      </h1>
      <div className="mt-8">
        <p className="mb-3">
          G-SHOCK воплощают в себе приверженность Casio к кампаниям с розовой
          лентой, которые повышают осведомленность о важности раннего выявления,
          диагностики и лечения рака молочной железы. G-SHOCK и Pink Ribbon -
          естественные союзники, разделяющие стремление построить мир, где
          каждый может быть здоров, свободен быть самим собой и никогда не
          упускать возможности по причине болезни.
        </p>
        <p className="mb-3 mt-8">
          Чтобы присоединиться к G-SHOCK и принять участие в движении, следите
          за кампаниями по сбору средств и мероприятиями по всему миру в течение
          «Розового октября» - месяца осведомленности о раке груди, когда
          розовая ленточка выходит на улицы в полную силу.
        </p>
      </div>
      <div className="my-8">
        <img
          src={Banner2}
          alt="Banner2"
          className="border-black md:border-[20px] border-[6px] w-full object-cover"
        />
      </div>
      <h2 className="text-xl my-8">МОДЕЛИ</h2>
      <p className="mt-3 mb-8">
        Поддержите спасающие жизнь исследования рака груди с помощью DW-5600PK,
        черные G-SHOCK с нежно-розовыми акцентами, или более компактные
        полностью розовые GMD-S5610PK.
      </p>
      <div className="flex flex-col md:flex-row justify-between gap-16">
        <div className="md:w-1/2">
          <Link to="https://shopcasio.bstarco.kg/products/g-shock-gma-s2100ga-7a">
            <h2 className="text-2xl font-medium mb-3">DW-5600PK-1</h2>
            <img
              src={Model1}
              alt="image g-shock watch 1"
              className="border-black md:border-[20px] border-[6px] w-full max-h-[450px] object-contain
         object-left-top"
            />
            <button className="bg-black mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Подробнее
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <Link to="https://shopcasio.bstarco.kg/products/g-shock-gma-s2100ga-7a">
            <h2 className="text-2xl font-medium mb-3">GMD-S5610PK-4</h2>
            <img
              src={Model2}
              alt="image g-shock watch 1"
              className="border-black md:border-[20px] border-[6px] w-full max-h-[450px] object-contain
         object-right-top"
            />
            <button className="bg-black mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Подробнее
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
