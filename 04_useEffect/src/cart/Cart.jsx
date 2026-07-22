import  { useEffect, useState } from 'react'
import axios  from 'axios';

export default function Cart() {
    const [cartList, setcartList]  = useState();

    useEffect(() => {
        const fetchCart = async() => {
            let carts = await axios.get("https://fakestoreapi.com/carts");
            let cartsData = carts.data;
            setcartList(cartsData);
        }
        fetchCart();
    }, [])
  return (
    <div>
        {cartList?.map((curCart) => {
            return (
                <ul className='list-group  w-50' key = {curCart.id}>
                    <li className='list-group-item'>User Id: {curCart.userId}</li>
                </ul>
            )
        })

        }
    </div>
  )
}

// fetch with axios package
//description, category , image, API Endpoint: Copy'https://fakestoreapi.com/products'