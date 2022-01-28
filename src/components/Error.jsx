const Error = ({children}) => {
  return (
    <div> 
        <p className='text-white bg-red-600 p-4 text-center font-bold mb-4 rounded-lg uppercase'> {children}</p>
    </div>
  );
};

export default Error;
