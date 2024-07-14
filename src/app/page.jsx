import React from 'react'

const page = () => {
  return (
    <>
      <h1 className="text-6xl font-extrabold text-white bg-gradient-to-l from-black to-purple-900 font-sans p-8 mb-6 shadow-lg transition transform hover:scale-y-110 hover:bg-gradient-to-r hover:from-black hover:to-violet-900">RACHAN KARKERA</h1>
      <p className="text-2xl font-bold text-black bg-gray-300 p-8 font-sans mb-4 rounded-2xl shadow-lg shadow-blue-500/40 hover:shadow-blue-200/60 duration-200 ease-in-out  hover:border-2 hover:bg-black hover:text-white">I am engineering student taking up the cource CSBS. Currently in second year. Very enthusiastic to learn and try out new things that are fun.</p>
      <div className="bg-gray-300 p-6 rounded-2xl shadow-lg text-xl text-black shadow-blue-500/40 hover:shadow-blue-200/60 duration-200 ease-in-out hover:border-2 hover:bg-black hover:text-white">
      <p className="text-red-800 font-bold text-2xl">Since the start of this project,</p>
      <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
          <li>I have learnt about more efficient way to write the code like utilising the plugins to have existing common snippets, complete code quickly.</li>
          <li>I have learnt greatly about how TailWindCSS works. The magic that can be done, all of it under a className of the particular tag.</li>
          <li>How to update custom value for any particular component when needed in the cofig file.</li>
          <li>Also would like to point out about the fragments and dynamic routing.</li>
        </ul> 
      </div>
    </>
  )
}

export default page;
