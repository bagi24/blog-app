const PostMenuActions = () => {
  return (
    <div className=''>
      <h1 className=' mt-8 mb-4 text-sm font-medium'>Actions</h1>
      <div className=' flex items-center gap-2 py-2 text-sm cursor-pointer'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='20px' height='20px'>
          <path
            d='M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z'
            stroke='black'
            strokeWidth='2'
          />
        </svg>
        <span>Save this post</span>
      </div>
      <div className=' flex items-center gap-2 py-2 text-sm cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 50 50'
          fill='red'
          width='20px'
          height='20px'>
          <path d='M 18 5 C 18 3.354 19.354 2 21 2 L 29 2 C 30.646 2 32 3.354 32 5 L 32 7 L 40 7 C 40.552 7 41 7.448 41 8 C 41 8.552 40.552 9 40 9 L 10 9 C 9.448 9 9 8.552 9 8 C 9 7.448 9.448 7 10 7 L 18 7 Z' />

          <path d='M 12 12 L 38 12 L 36 42 C 35.895 43.105 35.105 44 34 44 L 16 44 C 14.895 44 14.105 43.105 14 42 Z' />

          <path d='M 20 18 L 20 38' stroke='black' strokeWidth='2' />
          <path d='M 30 18 L 30 38' stroke='black' strokeWidth='2' />
        </svg>

        <span>Delete this post</span>
      </div>
    </div>
  );
};

export default PostMenuActions;
