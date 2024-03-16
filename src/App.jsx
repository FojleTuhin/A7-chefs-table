
import './App.css'

function App() {

  return (
    <>

      <div className='w-4/5 m-auto'>
        <header>
          <nav className='flex justify-between pt-12 mb-12'>
            <div>
              <p className='text-3xl font-bold'>Chefs-Table</p>
            </div>
            <div>
              <ul className='flex gap-12'>
                <li>Home</li>
                <li>Recipe</li>
                <li>About</li>
                <li>Search</li>
              </ul>
            </div>
            <div className='flex gap-4'>
              <input type="text" placeholder="Search" className="input input-bordered input-accent w-full max-w-xs" />
              <img src="/src/assets/profile.png" alt="" />

            </div>

          </nav>
        </header>
        <main>
          <div className='bg'>
            <p className='w-4/5 text-white text-center text-5xl m-auto pt-32 font-bold'>Discover an exceptional cooking class tailored for you!</p>

            <p className='w-5/6 text-white text-center m-auto font-medium mt-6 mb-10'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>

            <div className='w-96 m-auto flex justify-around pb-32'>
              <button className="btn bg-[#0BE58A] border-none rounded-full">Explore now</button>
              <button className="btn btn-outline border-white btn-success !text-white rounded-full">Our feedback</button>
            </div>


          </div>


          <div>
            
          </div>

        </main>


      </div>

    </>
  )
}

export default App
