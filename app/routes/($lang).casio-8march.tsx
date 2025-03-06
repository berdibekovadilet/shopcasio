import {Link} from '~/components';
import Banner2 from '~/assets/articles/8march/8march2.jpeg';
import Model1 from '~/assets/articles/8march/GMA-P2125W-6A.png';

export default function Anniversary() {
  return (
    <section className="md:p-12 p-4">
      <h1 className="text-4xl font-bold uppercase">
      G-SHOCK GMA-P2125W-6A – Новинка к 8 Марта! Специальная модель к Международному женскому дню!
      </h1>
      <div className="mt-8">
        <p className="mb-3">
        Встречайте GMA-P2125W-6A – новинку марта 2025 года, созданную в честь 8 Марта! Этот элегантный G-SHOCK выполнен в нежном фиолетовом цвете, символизирующем справедливость и достоинство, с изысканными белыми и золотыми акцентами.
        </p>
        <p className="mb-3 mt-8">
        Особенный штрих – при включении LED-подсветки появляется силуэт мимозы, традиционного цветка, которым принято поздравлять женщин в этот день.
        Компактный и удобный GMA-P2125W-6A идеально сидит на запястье, а его ремешок выполнен из био-материалов, снижая воздействие на окружающую среду.
        
        </p>
       
      </div>
      <div className="my-8">
        <img
          src={Banner2}
          alt="Banner2"
          className="border-black md:border-[20px] border-[6px] w-full object-cover"
        />
      </div>
      <div className="mt-8">
        <p className="mb-3">
        В Кыргызстане 8 Марта – день признания женской силы, красоты и вдохновения. Подари этот стильный G-SHOCK самой важной женщине в своей жизни! ✨ </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-16">
        <div>
          <Link to="https://shopcasio.bstarco.kg/products/g-shock-gma-p2125w-6a">
            <h2 className="text-2xl font-medium mb-3">GMA-P2125W-6A</h2>
            <img
              src={Model1}
              alt="image g-shock watch 1"
              className="border-purple-300 md:border-[20px] border-[6px] w-full max-h-[450px] object-contain
         object-left-top"
            />
            <button className="bg-purple-300 mt-4 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
              Подробнее
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
