const Header = () => {
  return (
    <div className="py-8 inline-flex items-center">
      <img
        className="h-7"
        src="https://chisellabs.com/images/chisel-logo-black.svg"
        alt="chisel-logo"
      ></img>
      <span className="font-bold text-xl ml-3 py-1 px-2 rounded-md bg-violet-100 text-blue-700">
        todo
      </span>
    </div>
  );
};

export default Header;
