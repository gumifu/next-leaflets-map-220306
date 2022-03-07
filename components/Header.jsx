import Image from 'next/image'
import { SearchIcon,GlobeAltIcon, MenuIcon, UserCircleIcon,UsersIcon } from '@heroicons/react/solid'
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate ] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGests, setNoOfGests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput('');
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGests,
      }
    })
  }

  const selectionRange = {
    startDate:startDate,
    endDate:endDate,
    key: 'selection',
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10 ">
      {/* left */}
      <div
        onClick={() => router.push('/')}
        className="relative flex items-center h-10 my-auto cursor-pointer"
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder||"場所を探す"}
        />
        <SearchIcon className="hidden md:mx-2 md:inline-flex h-8 bg-blue-400 text-white rounded-full p-2 cursor-pointer" />
      </div>
      {/* right */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline cursor-pointer">掲載してみる</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2 ">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#2298EE']}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-xl flex-grow font-semibold">予約人数</h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGests}
              onChange={(e) => setNoOfGests(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-blue-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              キャンセル
            </button>
            <button
              onClick={search}
              className="flex-grow text-blue-400"
            >
              検索
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header
