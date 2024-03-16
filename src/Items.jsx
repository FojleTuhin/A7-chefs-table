
const Items = ({item, handleCook}) => {

    return (
        <div>
            <div className=" w-80 border border-gray-400 rounded-2xl">
                <figure className="px-4 pt-4">
                  <img src={item.recipe_image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <p className='text-xl font-semibold'>{item.recipe_name}</p>
                  <p className='font-medium mt-4 text-gray-500'>{item.short_description
}</p>
                  <hr className='mt-4 mb-6' />
                  <p className='text-xl font-medium mb-4'>Ingredients: 6</p>
                  <ul className='list-disc text-[#878787]'>
                    {
                        item.ingredients.map((check)=>(
                            <li key={check}>{check}</li>
                        )).slice(0,3)
                    }
                   
                    
                  </ul>
                  <hr className='mt-4 mb-6' />
                  <div className='flex justify-between'>
                    <div className='flex gap-4'>
                      <img src="/src/assets/Frame.png" alt="" />
                      <p>{item.preparing_time}</p>
                    </div>
                    <div className='flex gap-4'>
                      <img src="/src/assets/Frame (1).png" alt="" />
                      <p>{item.calories}</p>
                    </div>
                  </div>
                  <button onClick={()=>handleCook(item)} className="btn bg-[#0BE58A] border-none rounded-full mt-6">Want to Cook</button>
                  



                </div>
              </div>
        </div>
    );
};

export default Items;