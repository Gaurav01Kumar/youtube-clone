import React from 'react'

const CategoryBtn = ({name,id}) => {
  return (
    <div key={id} className=' mr-5 bg-black
     shadow rounded-[10px] cursor-pointer p-2
     transition-colors hover:bg-slate-400'>
        <input value={name} readOnly className=' w-[60px]
        text-[14px]  bg-transparent outline-none border-none
        cursor-pointer text-white text-center' />
    </div>
  )
}

export default CategoryBtn