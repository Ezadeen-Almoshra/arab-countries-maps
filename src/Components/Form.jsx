import React from 'react'

const Form = ({ inputValue, setInputValue, inputRef }) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div
      className="absolute mr-40 z-1000 sm:mr-0 sm:right-1/2 
    translate-x-1/2 -top-10 mt-1"
    >
      <form
        className="flex flex-col
     items-center justify-center text-right 
      mt-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          placeholder="ادخل أسم المحافظة"
          className="p-3 px-4 outline-1
           outline-indigo-400 focus:outline-0
           border border-indigo-500
          w-72  sm:w-96  shadow-2xl
          text-sm
          rounded-xl text-right"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Form;