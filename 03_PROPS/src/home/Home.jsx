
export default function Home({ appCount, setCount }) {
    
  return (
    <>
    <h3 className='text-center'>Home Components</h3>

          <div className=" bg-warning p-3 container rounded">
        <p>Counter: {appCount}</p>
        <hr />
        <button className='btn btn-dark' onClick={() => {
            if(appCount > 0){
            setCount(appCount - 1)
        }
        }}>  Decrease</button>
      </div>
      <hr />
    </>

  )
}
