export function Navbar() {
  return (
    <nav className="w-full py-7 text-zinc-300 fixed border-b-2 border-primary backdrop-blur-md">
      <div className="flex max-w-7xl mx-auto items-center justify-between">
        <h3>LOGO</h3>
        <ul className="flex items-center justify-between text-xl">
          <li className="cursor-pointer mr-5 hover:text-primary">
            <a>Sobre mim</a>
          </li>
          <li className="cursor-pointer mr-5 hover:text-primary">
            <a>Habilidades</a>
          </li>
          <li className="cursor-pointer mr-5 hover:text-primary">
            <a>Projetos</a>
          </li>
          <li className="cursor-pointer mr-5 hover:text-primary">
            <a>Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
