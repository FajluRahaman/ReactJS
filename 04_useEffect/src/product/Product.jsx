import axios from "axios";
import { useState, useEffect } from "react"


export default function Product() {
    const[productList, setProductList] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                 const products = await axios.get('https://fakestoreapi.com/products');
            let productData = products.data;
            setProductList(productData)
            }catch(error){
                console.log("error fetching product", error);
                
            }
          

        }
        fetchProduct();

    }, []);

    return (
      <div className='d-flex flex-wrap gap-3'>
         {productList?.map((curProduct) => {
            return (
               <div className='card p-2' style={{ width: '200px' }} key={curProduct.id}>
                        <img src={curProduct.image} alt={curProduct.title} height="150" width= " 150"/>
                        <p><strong>{curProduct.title}</strong></p>
                        <p>${curProduct.price}</p>
                    </div>
            )
        })

        }
      </div>
    )
  }
