export function Navbar() {
  return (
    <nav className="w-full py-7 text-zinc-300 fixed border-b-2 border-primary backdrop-blur-md">
      <div className="flex container mx-auto px-2 items-center justify-between">
        <a href="#" className="text-lg text-primary">
          {"< / >"}
        </a>
        <ul className="flex items-center justify-between text-lg">
          <li className="cursor-pointer mr-5 hover:text-primary transition-colors">
            <a href="#about">About me</a>
          </li>
          <li className="cursor-pointer mr-5 hover:text-primary transition-colors">
            <a href="#skills">Skills</a>
          </li>
          <li className="cursor-pointer mr-5 hover:text-primary transition-colors">
            <a href="#projects">Projects</a>
          </li>
          <li className="cursor-pointer mr-5 hover:text-primary transition-colors">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
