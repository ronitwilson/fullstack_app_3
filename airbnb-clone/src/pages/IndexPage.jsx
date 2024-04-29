
export default function IndexPage() {
    return (
        <div className=''>
          <h1 className="text-4xl text-center mb-4">Login</h1>
          <form  className="max-w-md mx-auto"> 
            <input type='text' placeholder='your@email.com' />
            <input type='password' placeholder='password' />
            <button className="primary">Login</button>
          </form>
        </div>
    )
}