import React, {useState,useEffect}  from 'react'
import { useNavigate} from 'react-router-dom'
 
 

function NewArrival() {
const Navigate= useNavigate()

  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://dummyjson.com/products").then((res) => {
      res.json().then((resp) => {
        setData(resp.products);
        console.log(resp.products)
      });
    });
  }, []);  
  

  function handleBuy(e){
    e.preventDefault();
    Navigate('/productpage')

  }

  
  
  return (
    <> 
      <div className='container my-5'>
      
        <div className="row d-flex justify-content-between">   
        <h1 className='text-center'>Products</h1>
         {
          data.map((items, index)=>{
          return(<div className='col-lg-3 mb-3 shadow' key={index}>
            <div className=" ratio ratio-4x3 object-cover">
            <img width="100%"  src={ data[index].images[3]} alt="" />
            </div>        
        <h1 className='h5'>Device: {data[index].title}</h1>
        <h1 className='h6'> Desciption: {data[index].description}</h1>
        <h1 className='h6'>Price: {data[index].price}</h1>
        <h1 className='h6'>Quantity: {data[index].stock}</h1>  
        <button onClick={handleBuy}>Buy Now</button>    
    </div>
    
    
)

})

}
 
       
      </div>
      </div>

      

    </>
       
 
  )
}

export default NewArrival
