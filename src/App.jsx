
import './App.css'

function App() {

  return (
    <>

      <div className='w-[95%] m-auto'>
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
            <p className='text-center w-3/5 m-auto mt-6 mb-12'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
          </div>


          <div className='flex gap-4'>
            <div className='left div grid grid-cols-2 gap-4'>

              {/* card start from here */}


              <div className=" w-80 border border-gray-400 rounded-2xl">
                <figure className="px-4 pt-4">
                  <img src="https://media.cnn.com/api/v1/images/stellar/prod/220921081426-04-chinese-foods-ziao-long-bao.jpg?c=original&q=h_618,c_fill" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                  <p className='text-xl font-semibold'>Spaghetti Bologneses</p>
                  <p className='font-medium mt-4 text-gray-500'>Classic Italian pasta dish with savory meat sauce.</p>
                  <hr className='mt-4 mb-6' />
                  <p className='text-xl font-medium mb-4'>Ingredients: 6</p>
                  <ul className='list-disc text-[#878787]'>
                    <li className=''>500g ground beefs</li>
                    <li>1 onion, chopped</li>
                    <li>2 cloves garlic, minced</li>
                  </ul>
                  <hr className='mt-4 mb-6' />
                  <div className='flex justify-between'>
                    <div className='flex gap-4'>
                      <img src="/src/assets/Frame.png" alt="" />
                      <p>30 mins</p>
                    </div>
                    <div className='flex gap-4'>
                      <img src="/src/assets/Frame (1).png" alt="" />
                      <p>600 calories</p>
                    </div>
                  </div>
                  <button className="btn bg-[#0BE58A] border-none rounded-full mt-6">Want to Cook</button>



                </div>
              </div>

            </div>
            <div className='right-div'>
              <div className='border border-gray-400 rounded-2xl p-4 w-full'>
                <p className='text-2xl font-semibold text-center'>Want to cook: 01</p>
                <hr className='mt-4 mb-6' />

                <div className='w-full'>
                  <table className='border-spacing-4'>
                    <tr className=' text-left gap-4'>
                      <th className='w-[50px]'></th>
                      <th className='w-[150px]'>Name</th>
                      <th className='w-[80px]'>Time</th>
                      <th className='w-[80px]'>Calories</th>
                      <th className='w-[100px]'></th>
                    </tr>
                    <tr className='bg-gray-100 p-3'>
                      <td>1</td>
                      <td>Chicken Caesar Salad</td>
                      <td>20 minutes</td>
                      <td>400 calories</td>
                      <td><button className="btn bg-[#0BE58A] border-none rounded-full">Preparing</button></td>

                    </tr>
                  </table>

                  <div className='text-center font-semibold mt-8 text-2xl'>Currently cooking: 02</div>
                  <table className='border-spacing-4'>
                    <tr className=' text-left gap-4'>
                      <th className='w-[50px]'></th>
                      <th className='w-[200px]'>Name</th>
                      <th className='w-[100px]'>Time</th>
                      <th className='w-[100px]'>Calories</th>
                    </tr>
                    <tr className='bg-gray-100 p-3 pb-4'>
                      <td>1</td>
                      <td>Chicken Caesar Salad</td>
                      <td>20 minutes</td>
                      <td>400 calories</td>

                    </tr>
                    <tr className='bg-gray-100 p-3'>
                      <td>1</td>
                      <td>Chicken Caesar Salad</td>
                      <td>20 minutes</td>
                      <td>400 calories</td>

                    </tr>
                  </table>

                  <div className='mt-8 flex justify-between mb-4'>
                    <p>Total Time = 45 minutes</p>
                    <p>Total Calories = 1050 calories</p>
                  </div>
                </div>

              </div>



            </div>
          </div>

        </main>


      </div>

    </>
  )
}

export default App
