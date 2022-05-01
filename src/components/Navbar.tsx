import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed z-50 left-0 right-0 bg-white h-14 lg:h-20 shadow">
      <Link to="/" className="w-fit mx-auto flex items-center">
        <img className="inline w-14 lg:w-20" src="/logo.png" alt="Random Users logo"/>
        <h1 className="sm:text-2xl lg:text-4xl font-bold text-main pl-[1ch]">
          &gt;&gt; Random Users<span className="hidden sm:inline"> &lt;&lt;</span>
        </h1>
      </Link>
    </nav>
  );
}

export default Navbar;
