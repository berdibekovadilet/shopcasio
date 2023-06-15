import {companyHighlights} from "~/data/companyHighlights";

export const CompanyHighlights = () => {
  return (
    <div className="bg-slate-100 w-screen ml-[calc(50%-50vw)] mt-6 mb-16">
      <div className="mx-auto flex justify-between px-12 py-10 md:space-x-6 md:flex-row flex-col space-x-0">
        {companyHighlights.map((item) => (
          <div className="flex mb-6" key={item.id}>
            <p className="text-5xl mr-1.5">{item.id}</p>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="pr-10 text-base leading-5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
