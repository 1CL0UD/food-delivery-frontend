const Header = () => {
  return (
    <div className="header hover:scale-105 h-[40vw] rounded-3xl my-8 mx-auto bg-contain relative">
      <div className="header-contents animate-fadein absolute flex flex-col items-start gap-2 md:gap-4 w-3/4 md:w-2/3 bottom-6 lg:bottom-12 left-6 lg:left-12">
        <h2 className="text-white font-medium text-xl sm:text-2xl md:text-6xl xl:text-6xl leading-tight mb-1">
          Order your favourite food here
        </h2>
        <p className="text-white hidden lg:block text-lg mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          obcaecati aperiam, ipsam nostrum ea qui.
        </p>
        <button className="hover:scale-110 text-gray-800 border-none font-semibold py-3 md:py-4 px-6 md:px-12 bg-white text-md rounded-full">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
