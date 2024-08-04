import React from 'react'

function Card({info}){
    console.log('info :>> ', info);
    return(
        <>
            <div className="border w-1/2 rounded-2xl border-neutral-50">
                <h2 className='text-2xl py-5'>{info.fName}</h2>
                <img src={info.img} alt="" />
                <p className='py-5'>{info.desc}</p>
            </div>
        </>
    )
}

export default Card;