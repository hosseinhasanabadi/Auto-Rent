import React, { useEffect, useState } from "react";
import { Link } from "react-router";
function Car() {
  const [car, setCar] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/carData")
      .then((response) => response.json())
      .then((data) => setCar(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <section className="container w-full  flex justify-center  md:mt-25  pr-5 flex-wrap ">
      {car.map((item, index) => (
        <div
          key={index}
          className="bg-white border-white shadow-2xl rounded-2xl flex  flex-col text-center "
        >
          <Link>
            <p className="text-center">{item.title}</p>
            <img
              src={item.image}
              className="w-full h-auto max-w-xs mx-auto"
              alt={item.title}
            />
          </Link>
        </div>
      ))}

      {/* <div className='bg-white border-white shadow-2xl rounded-2xl '>

<Link>
  <p className='text-center'>کوپه
    </p>
    <img src="/copeh.png" className=' ' alt="" />
</Link>
</div>
<div className='bg-white border-white shadow-2xl rounded-2xl '>

<Link>
  <p className='text-center'>کوپه
    </p>
    <img src="/copeh.png" className=' ' alt="" />
</Link>
</div>
<div className='bg-white border-white shadow-2xl rounded-2xl '>

<Link>
  <p className='text-center'>کوپه
    </p>
    <img src="/copeh.png" className=' ' alt="" />
</Link>
</div>
<div className='bg-white border-white shadow-2xl rounded-2xl '>

<Link>
  <p className='text-center'>کوپه
    </p>
    <img src="/copeh.png" className=' ' alt="" />
</Link>
</div>

        
        

</div> */}
    </section>
  );
}

export default Car;
