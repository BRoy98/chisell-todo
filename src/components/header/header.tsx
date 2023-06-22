const Header = () => {
  return (
    <div className="py-8 flex items-center w-full max-sm:justify-center px-2">
      <img
        className="h-7"
        src="https://chisellabs.com/images/chisel-logo-black.svg"
        alt="chisel-logo"
      ></img>
      <span className="font-bold text-xl ml-3 py-1 px-2 rounded-md bg-violet-100 text-violet-700">
        todo
      </span>
    </div>
  );
};

export default Header;
