import StoreImage from "~/assets/pages/storelocation.jpg"

export const StoreInfo = () => {
  return (
    <div className="flex justify-around items-center flex-wrap pb-12 px-6 lg:px-12 mx-auto">
      <div className="w-full md:w-1/2">
        <img src={StoreImage} alt="Store Image" className="w-full h-full md:h-[500px] object-cover rounded-xl"/>
      </div>
      <div className="max-w-md mt-6">
        <h2 className="uppercase text-4xl mb-6">Наш Магазин</h2>
        <h3 className="mb-6">Мы находимся в ТЦ Евразия, 2 этаж</h3>
        <h4 className="mt-5">
          Приходите в наш магазин и делайте покупки с комфортом: наши
          консультанты – настоящие эксперты в своем деле и всегда помогут
          определиться с выбором.
        </h4>
        <h4 className="mt-5">
          Или закажите сразу несколько понравившихся моделей на сайте – с
          финальным выбором вы сможете определиться на месте - и наша курьерская
          служба доставит их в удобное для вас время.
        </h4>
        <h4 className="mt-5">
          Какой бы способ покупки вы не выбрали, мы гарантируем только
          оригинальные товары, самые низкие цены и премиальный сервис.
        </h4>
      </div>
    </div>
  )
}
