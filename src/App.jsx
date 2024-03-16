
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


          <div className='mt-24'>
            <p className='text-center font-semibold text-4xl'>Our Recipes</p>
            <p className='text-center w-4/5 m-auto mt-6'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
          </div>


          <div className='flex'>
            <div className='left div grid grid-cols-2'>

              {/* card start from here */}
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-6 pt-6">
                  <img src="https://media.cnn.com/api/v1/images/stellar/prod/220921081426-04-chinese-foods-ziao-long-bao.jpg?c=original&q=h_618,c_fill" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

            </div>
            <div className='right-div'>

            </div>
          </div>

        </main>


      </div>

    </>
  )
}

export default App
