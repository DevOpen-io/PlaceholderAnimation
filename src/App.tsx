import React from "react"

function App() {

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [inputClick, setInputClick] = React.useState<boolean>(false);

  const handleTextClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  React.useEffect(() => {
    if (inputRef.current && inputRef.current.value.length > 0)
      {
        setInputClick(true);
      }
  } , [])

  return (
    <>
      <div className="w-full h-screen bg-[#222222] flex justify-center items-center">
        <div className="w-10/12 relative">
          <span onClick={handleTextClick} className={`absolute  text-xl font-bold ${inputClick ? 'bottom-full text-white left-0 text-2xl' : 'bottom-1/2 translate-y-1/2 left-4 text-white/50'} transition-all duration-300`}>PlaceHolder Text</span>
          <input onFocus={() => {setInputClick(true)}} onBlur={(e) => {e.target.value.length > 0 ?setInputClick(true) : setInputClick(false)}} ref={inputRef} type="text" name="" id="" className="w-full h-14 rounded-md text-xl bg-transparent focus:outline-none text-white border border-white pl-4" />
        </div>
      </div>
    </>
  )
}

export default App
