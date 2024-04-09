const Header = () => {
  return (
    <div className="header rounded-3xl my-8 mx-auto bg-contain relative">
      <div className="header-contents absolute flex flex-col items-start gap-4 w-1/2 bottom-12 left-12">
        <h2 className="text-white font-medium text-6xl leading-tight mb-1">
          Order your favourite food here
        </h2>
        <p className="text-white text-lg mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          obcaecati aperiam, ipsam nostrum ea qui.
        </p>
        <button className="text-gray-800 border-none font-semibold py-4 px-12 bg-white text-md rounded-full">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
