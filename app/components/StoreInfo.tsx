import { Form, useActionData, useNavigation } from "@remix-run/react";
import StoreImage from "~/assets/pages/stores-collage2.png";

export const StoreInfo = () => {
  const actionData = useActionData<{
    success?: boolean;
    error?: string;
  }>();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="pb-16 px-6 lg:px-12 mx-auto">
      {/* Блок с магазинами */}
      <div className="flex justify-around items-center flex-wrap pb-20">
        <div className="w-full md:w-1/2">
          <img
            src={StoreImage}
            alt="Store Image"
            className="w-full h-full md:h-[500px] object-cover rounded-xl"
          />
        </div>

        <div className="max-w-md mt-6">
          <h2 className="uppercase text-4xl mb-6">Наши магазины</h2>

          <p className="mb-6">
            Мы находимся в ТЦ Азия Молл 1 этаж островок и флагманский магазин, ТЦ
            Евразия 2 этаж, ТЦ Дордой Плаза 2 этаж, и ЦУМ 3 этаж
          </p>

          <p className="mt-5">
            Приходите в наши магазины и делайте покупки с комфортом: наши
            консультанты — настоящие эксперты в своем деле и всегда помогут
            определиться с выбором.
          </p>

          <p className="mt-5">
            Или закажите сразу несколько понравившихся моделей на сайте — с
            финальным выбором вы сможете определиться на месте, а наша курьерская
            служба доставит их в удобное для вас время.
          </p>

          <p className="mt-5">
            Какой бы способ покупки вы ни выбрали, мы гарантируем только
            оригинальные товары, самые низкие цены и премиальный сервис.
          </p>
        </div>
      </div>

      {/* ===== Подписка ===== */}
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="uppercase text-2xl tracking-widest mb-8">
          Подпишитесь на нашу рассылку
        </h3>

        <Form method="post" className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border border-gray-300 px-4 py-3 w-full sm:w-[360px] focus:outline-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-white px-8 py-3 uppercase tracking-wide hover:opacity-90 transition"
          >
            {isSubmitting ? "Отправка..." : "Подписаться"}
          </button>
        </Form>

        {/* Сообщения */}
        {actionData?.success && (
          <p className="text-green-600 mt-4">
            Спасибо! Вы успешно подписались на рассылку.
          </p>
        )}

        <p className="text-sm text-gray-500 mt-4">
          Нажимая на кнопку «Подписаться», вы соглашаетесь с{" "}
          <a href="/privacy" className="underline">
            политикой конфиденциальности
          </a>
        </p>
      </div>
    </div>
  );
};