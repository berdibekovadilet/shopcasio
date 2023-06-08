import {Accordion} from "~/components/Accordion";

export default function FAQPage() {
  const data = [
    {
      id: 1,
      title: "МОЖНО ЛИ ПРИВЕЗТИ НА ВЫБОР НЕСКОЛЬКО МОДЕЛЕЙ ЧАСОВ?",
      description: "Можно, но по дополнительной договоренности с менеджером и не более 3 моделей. Данная услуга бесплатна и действительна только в Бишкеке. Если же из привезенных часов Вам никакие не понравились или не подошли, то вы оплачиваете только стоимость услуги в размере 500 сом."
    },
    {
      id: 2,
      title: "НУЖНО ЛИ ОПЛАЧИВАТЬ ДОСТАВКУ, ЕСЛИ ЧАСЫ МНЕ НЕ ПОНРАВИЛИСЬ?",
      description: "Не нужно. Более того, часы можно вернуть или обменять даже после совершения покупки при сохранении товарного вида, документов об оплате."
    },
    {
      id: 3,
      title: "Я ЖИВУ НЕ В КЫРГЫЗСТАНЕ, ВОЗМОЖНА ЛИ ДОСТАВКА В ДРУГУЮ СТРАНУ?",
      description: "К сожалению, нет. Доставка осуществляется только в пределах КР, наш курьер может встретиться с вашим представителем в Бишкеке."
    },
    {
      id: 4,
      title: "МОГУ ОТКАЗАТЬСЯ ОТ ДОСТАВКИ ИЛИ ПОМЕНЯТЬ ДЕНЬ/АДРЕС/ВРЕМЯ?",
      description: "Конечно, можете! Просто свяжитесь с нами любым удобным способом и сообщите об изменениях в заказе."
    },
    {
      id: 5,
      title: "НЕ МОГУ ОТСЛЕДИТЬ ПОСЫЛКУ. ЧТО ДЕЛАТЬ?",
      description: "Если спустя два дня после получения от нас номера для отслеживания посылка, посылка не отслеживается на сайте курьерской службы, свяжитесь, пожалуйста, с нами любым удобным для вас способом и мы выясним причину."
    },
    {
      id: 6,
      title: "МНЕ НЕ ДОСТАВИЛИ ЗАКАЗ. МНЕ НЕ ПЕРЕЗВОНИЛ КУРЬЕР.",
      description: "Свяжитесь, пожалуйста, с нами любым удобным для вас способом и мы выясним причину."
    },
    {
      id: 7,
      title: "СКОЛЬКО ДЕНЕГ С МЕНЯ ДОЛЖЕН ВЗЯТЬ КУРЬЕР?",
      description: "Ровно столько, сколько указано в заказе."
    },
    {
      id: 8,
      title: "ЗА МЕНЯ ПРИМЕТ ЗАКАЗ ДРУГОЙ ЧЕЛОВЕК.",
      description: "Это не проблема! Достаточно будет сообщить об этом курьеру при его звонке вам. Не распространяется на уже оплаченные заказы банковский перевод, эл. деньги и т.д. В этом случае понадобится доверенность от плательщика на получателя."
    }
  ];
  return (
    <div className='container mx-auto my-8'>
      <div className='my-4 mx-4 sm:mx-0'>
        <h1 className='text-center text-2xl mb-10 md:text-4xl md:mb-16 uppercase'>ЧАСТЫЕ ВОПРОСЫ</h1>
        <div className="rounded-2xl bg-white p-3">
          {data.map(item => (
            <Accordion key={item.id} title={item.title} description={item.description}/>
          ))}
        </div>
      </div>
    </div>
  );
};