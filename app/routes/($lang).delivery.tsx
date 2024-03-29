export default function DeliveryPage() {
  return (
    <>
      <div className='container mx-auto my-8'>
        <h2 className='text-center text-2xl mb-10 md:text-4xl md:mb-16 uppercase'>Доставка</h2>
        <div className='bg-zinc-100 p-8 rounded-2xl mx-4 sm:mx-0 my-6 dark:bg-zinc-800'>
          <div className='mb-8'>
            <h3 className='text-lg font-bold'>Стоимость доставки</h3>
            <ul className='mt-3'>
              <li>1. Полная бесплатная доставка по г. Бишкек, осуществляется в течение 1-2 дня.</li>
              <li className='mt-2'>2. Доставка в регионы и другие города</li>
              <ul className='ml-6'>
                <li className='mt-1'>2.1 При заказе от 8 000 сом доставка в другие города бесплатно</li>
                <li className='mt-1'>2.2 При заказе до 8 000 сом доставка будет стоить 500 сом</li>
                <li className='mt-1'>2.3 Доставка в течение 3-5 рабочих дней</li>
              </ul>
            </ul>
          </div>
          <div className='mb-8'>
            <h3 className='text-lg font-bold'>Важная информация!</h3>
            <p className='mt-3'>Товар не доставляется без предварительного телефонного звонка курьера. Если курьер не
              сможет с вами
              связаться, доставка заказа будет перенесена на следующий день.</p>
            <p className='mt-2'>Услуга доставки курьером моделей на выбор - не более 3 изделий. Оплата осуществляется на
              условиях
              "стандартной доставки", в случае полного отказа от покупки - 500 сом.
            </p>
          </div>
        </div>
      </div>
      <div className='container mx-auto my-8'>
        <h2 className='text-center text-2xl mb-10 mt-16 md:text-4xl md:mb-16 md:mt-20'>Возврат и отмена</h2>
        <div className='bg-zinc-100 p-8 rounded-2xl mx-4 sm:mx-0 my-4 dark:bg-zinc-800'>
          <div className='mb-8'>
            <h3 className='text-lg font-bold'>Могу ли я вернуть или обменять товар?</h3>
            <p className='mt-3'>Да, конечно. Главное они должны будут соответствовать всем общим условиям возврата,
              приведенным ниже.
            </p>
            <p className='mt-3'>Общие условия возврата:
            </p>
            <ul>
              <li>- Срок: Вы можете вернуть свой заказ в течение 14 дней со дня получения товара.
              </li>
              <li>- Состояние товара: Товар должен быть в своем первоначальном состоянии и упаковке с оригинальной
                коробкой и бирками. Инструкция и гарантийный талон должны быть в оригинальном виде и упакованы в
                оригинальную коробку.
              </li>
              <li>- Ограничения серия часов: Возврат модели ограниченной серии не допускается. Подробности будут указаны
                в описании страницы продукта.
              </li>
            </ul>
            <h3 className='text-lg font-bold mt-8'>Могу ли я отменить свой заказ?</h3>
            <p className='mt-3'>Если ваш заказ был отдан на доставку, пожалуйста свяжитесь с нашим менеджером
              и он поможет вам с процессом отмены заказа.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
