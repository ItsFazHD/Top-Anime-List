function Header() {
  return (
    <>
      <header className="text-start text-6xl font-Reenie bg-indigo-800 text-gray-200 p-6">
        FazHD&apos;s Top Anime List
        <div className="flex justify-end">
          <textarea
            name="Search"
            id="search"
            className="h-8 w-80 bg-indigo-800 text-white text-xl border-2 border-gray-200"></textarea>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 flex align-baseline justify-end">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </header>
    </>
  );
}
export default Header;
