export function Navbar() {
  return (
    <nav className="flex w-screen items-center justify-between px-20 py-10 text-zinc-300 fixed border-b-2 backdrop-blur-md">
      <h3>LOGO</h3>
      <ul className="flex items-center justify-between text-xl">
        <li className="cursor-pointer mr-5 hover:text-zinc-50">
          <a>Sobre mim</a>
        </li>
        <li className="cursor-pointer mr-5 hover:text-zinc-50">
          <a>Habilidades</a>
        </li>
        <li className="cursor-pointer mr-5 hover:text-zinc-50">
          <a>Projetos</a>
        </li>
        <li className="cursor-pointer mr-5 hover:text-zinc-50">
          <a>Contato</a>
        </li>
      </ul>
    </nav>
  );
}
