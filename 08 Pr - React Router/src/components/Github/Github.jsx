import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()

    
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/reth09')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('data :>> ', data);
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='text-center text-2xl p-2 bg-orange-200'>
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="profile_picture" width={250}
            className='mx-auto pt-2' />
        </div>
    )
}

export default Github