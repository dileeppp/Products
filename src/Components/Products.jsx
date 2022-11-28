import React, { useEffect, useState } from 'react'
import { Link,Outlet } from 'react-router-dom'
import axios from 'axios'

const Products = () => {
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')
  const [posts,setPosts] = useState([])



  useEffect(()=>{
    setLoading(false)
   axios.get('https://fakestoreapi.com/products')
    .then(res=>{
      setLoading(true)
      setPosts(res.data)
      setError([]
        )
    })
    .catch(error=>{
      setLoading(false)
      setPosts([])
      setError('errorr')
    })
  },[])




  return (
    <>
    <input type="search" placeholder='search products...' /><br/>
    <Link  to='featured' >
        Featured
    </Link>
    <Link  to='new' >
        New
    </Link>
    <Outlet/>
    {/* {posts.loading ? 'loading' : posts.title}
    {posts.error ? 'error' : error} */}
    <div className='contact'>


    {
      posts.length &&
      posts.map((post)=>(
        <div className='container1'>
          <img className='box5' alt='dileep' src={post.image}/>
          <h1>{post.category}</h1>
          <p>price={post.price}</p>
        </div>
      ))
    }
    </div>
      
    </>
  )
}

export default Products
