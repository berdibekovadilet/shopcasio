export default function ContactPage() {
  return (
    <div className='container mx-auto my-8'>
      <h1 className='text-center text-2xl mb-10 md:text-4xl md:mb-16 uppercase'>Контакты</h1>
      <div className='bg-zinc-100 p-8 rounded-2xl mx-4 sm:mx-0 my-6 dark:contrast dark:text-contrast'>
        <div className='mb-8'>
          <h3 className='text-lg font-bold'>Заказ или консультация в интернет-магазине</h3>
          <div className='mt-3'>
            <a
              href="mailto:question@bstarco.com"
              target="_blank"
              rel="noreferrer"
              className='hover:text-blue-500'
            >
              question@bstarco.com
            </a>
          </div>
          <div className='mt-2'>
            <a href="tel:996551377373" target="_blank" rel="noreferrer" className='hover:text-blue-500'>
              +996 (551) 37-73-73
            </a>
            <h4 className='mt-2'>График работы: с 10.00 до 22.00.</h4>
          </div>
        </div>
        <div className='mb-8'>
          <h3 className='text-lg font-bold'>Отдел доставки</h3>
          <div className='mt-3'>
            <a
              href="mailto:delivery@bstarco.com"
              target="_blank"
              rel="noreferrer"
              className='hover:text-blue-500'
            >
              delivery@bstarco.com
            </a>
          </div>
          <div className='mt-2'>
            <a href="tel:996551387373" target="_blank" rel="noreferrer" className='hover:text-blue-500'>
              +996 (551) 38-73-73
            </a>
          </div>
        </div>
        <div className='mb-8'>
          <h3 className='text-lg font-bold'>Рекламный отдел</h3>
          <div className='mt-2'>
            <a href="mailto:pr@bstarco.com" target="_blank" rel="noreferrer" className='hover:text-blue-500'>
              pr@bstarco.com
            </a>
          </div>
        </div>
        <div className='mb-8'>
          <h3 className='text-lg font-bold'>Жалобы и предложения</h3>
          <div className='mt-2'>
            <a
              href="mailto:offers@bstarco.com"
              target="_blank"
              rel="noreferrer"
              className='hover:text-blue-500'
            >
              offers@bstarco.com
            </a>
          </div>
        </div>
        <div className='mb-8'>
          <h3 className='text-lg font-bold'>Коммерческие предложения</h3>
          <div className='mt-2'>
            <a href="mailto:pr@bstarco.com" target="_blank" rel="noreferrer" className='hover:text-blue-500'>
              pr@bstarco.com
            </a>
          </div>
          <p className='mt-2'>
            Внимание! Коммерческие предложения принимаются к рассмотрению только
            в письменной форме.
          </p>
        </div>
      </div>
    </div>
  )
}
