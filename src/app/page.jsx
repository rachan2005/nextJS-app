import React from 'react'

const page = () => {
  return (
    <>
      <div className="w-11/12 mx-auto  ">
      <h1 className="text-xl mx-10 p-4 font-sans hover:text-black hover:bg-gray-300 hover:scale-110 shadow-lg hover:shadow-blue-500/50 rounded-2xl font-extrabold bg-black text-white shadow-blue-200/60 hover:border-none duration-150 border">
      RACHAN KARKERA</h1>
      <p className="text-md mx-10 my-5 p-4 font-bold hover:text-black hover:bg-gray-300 hover:scale-110 rounded-2xl shadow-lg hover:shadow-blue-500/40 shadow-blue-200/60 duration-150 border bg-black text-white">
      I am an engineering student taking up the course CSBS. Currently in second year. Very enthusiastic to learn and try out new things that are fun.</p>
      <div className="hover:bg-gray-300 mx-10 p-4 rounded-2xl leading-loose shadow-lg hover:scale-110 text-lg hover:text-black hover:shadow-blue-500/40 shadow-blue-200/60 duration-150 border bg-black text-white">
      <p className=" font-bold text-xl leading-loose">
        Since the start of this project,</p>
      <ul className="list-disc list-inside ml-4 font-bold mt-2 space-y-2">
          <li>I have learnt about more efficient way to write the code like utilising the plugins to have existing common snippets, complete code quickly.</li>
          <li>I have learnt greatly about how TailWindCSS works. The magic that can be done, all of it under a className of the particular tag.</li>
          <li>How to update custom value for any particular component when needed in the cofig file.</li>
          <li>Also would like to point out about the fragments and dynamic routing.</li>
        </ul> 
      </div>
      </div>
    </>
  )
}

export default page;
