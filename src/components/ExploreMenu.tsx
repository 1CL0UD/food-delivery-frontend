import { menu_list } from '../assets/assets';

const ExploreMenu = () => {
  return (
    <div className="explore-menu flex flex-col gap-5" id="explore-menu">
      <h1 className="text-gray-800 font-medium">Explore Our Menu</h1>
      <p className="explore-menu-desc max-w-[60%]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, velit?
      </p>
      <div className="explore-menu-list flex justify-between items-center gap-8 text-center my-5 mx-0 overflow-x-scroll no-scrollbar">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className="explore-menu-list-item">
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="min-w-20 w-[7.5vw] cursor-pointer rounded-3xl transition"
              />
              <p className="mt-2 text-gray-800 text-lg cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-2 mx-0 h-[0.125rem] bg-slate-200 border-none" />
    </div>
  );
};

export default ExploreMenu;
