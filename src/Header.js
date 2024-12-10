import profilePhoto from './Media/image.webp'

function Header() {
  const navBtn =
    'p-2 text-white font-bold';
  return (
    <nav className="flex list-none items-center justify-center p-2 bg-[#232527] text-white">
      <span className={`absolute left-2`}>Home</span>
      <input className="pl-2 rounded-xl h-7 w-5/12 bg-[#151618]" placeholder="Search" />
      <div className={`absolute flex right-2`}>
      <div className="w-8 h-8 mt-[7px] border-2 bg-contain bg-center bg-no-repeat rounded-2xl"
  style={{backgroundImage: `url(${profilePhoto})`}}></div>
      <li className={navBtn}>Contact</li>
      </div>
      </nav>
  );
}

export default Header;