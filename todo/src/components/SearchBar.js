import React from 'react'

function SearchBar({searchterm, setSearchterm}) {
  return (
    <div 
    className='mb-4 '
    ><input
    type='text'
    className="from-control"
    placeholder='Search'
    value={searchterm}
    onClick={(e)=>setSearchterm(e.target.value)}
    />
    
    </div>
  )
}

export default SearchBar