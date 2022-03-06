import Image from 'next/image'
import { SearchIcon,GlobeAltIcon, MenuIcon, UserCircleIcon,UsersIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10 ">
      {/* left */}
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src="/logo-type.svg"
          objectFit="contain"
          objectPosition="left"
          alt=""
          layout="fill"
        />
      </div>
      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          className="flex-grow pl-5 transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="場所を探す"
        />
        <SearchIcon className="hidden md:mx-2 md:inline-flex h-8 bg-blue-400 text-white rounded-full p-2 cursor-pointer" />
      </div>
      {/* right */}
      <div className='flex items-center justify-end text-gray-500 space-x-4'>
        <p className='hidden md:inline cursor-pointer'>掲載してみる</p>
        <GlobeAltIcon className='h-6' />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2 ">
          <MenuIcon className='h-6'/>
          <UserCircleIcon className='h-6'/>
        </div>
      </div>
    </header>
  );
}

export default Header
