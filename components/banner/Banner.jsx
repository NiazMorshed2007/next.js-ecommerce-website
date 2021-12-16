import React, {useEffect} from 'react';
import banner1Img from '../../assets/banner1.jpg';
import {TimelineLite, Power2} from 'gsap';


const Banner = () => {
    useEffect(() => {
        const tl = new TimelineLite();
        tl.fromTo('.b-img', 1, {
            scale: .9,
            x: 90,
        },
            {
                scale: 1,
                x: 0,
            }).fromTo('.sp', .4, {
            y: -10,
            opacity: 0,
            ease: Power2.easeOut,
        }, {
            y: 0,
            opacity: 1,
        }).fromTo('.b-h, .b-l', .5, {
            x: -80,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            stagger: .3,
        })
    }, [])
    return <div className="banner position-relative p-5 d-flex align-items-center vw-100 overflow-hidden">
        <img className='fitImage b-img position-absolute' src={banner1Img.src} alt=""/>
        <div className="content px-5 mx-5">
        <h6 className='text-orange sp'>SPECIAL PRICE</h6>
            <h1 className='b-h'>Nylon Blend <br/> Jacket</h1>
            <p className='m-0 b-l mt-3'> Casual line</p>
            <p className='m-0 b-l mt-1'>Nylon Mix fabic</p>
            <p className="m-0 b-l mt-1">Waterproof fabric</p>
            <p className="m-0 b-l mt-4 pt-3 pointer mx-5 discover">DISCOVER MORE</p>
        </div>
    </div>
}

export default Banner;