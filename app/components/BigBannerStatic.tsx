import {Link} from '~/components/Link';
import Banner from '~/assets/banners/nooruz.png';

export const BigBannerStatic = () => {
  return (
    <Link to="/collections/edifice-efk-100">
      <div className="relative overflow-hidden inline-block md:min-w-[700px] h-[531px] transition-all duration-[0.2s] ease-[ease] mb-6 hover:scale-[1.02] rounded-[20px]">
        <img src={Banner} alt="Banner" className="w-full h-full object-cover" />
        {/* <div className="absolute left-6 bottom-8 rounded-md flex flex-col items-baseline justify-between gap-3 px-3 py-4 sm:px-4 md:px-6 bg-gradient-to-b dark:from-contrast/60 dark:text-primary from-primary/60 text-contrast">
          <h2 className="max-w-md text-3xl font-medium">НООРУЗ</h2>
          <p className="text-xl font-medium">майрамыныздар менен</p>
        </div> */}
      </div>
    </Link>
  );
};
