import React, { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import './main.scss';
const Main = () => {
    const [pro, setPro] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((res) => setPro(res));
    }, []);
    const { theme, setTheme } = useTheme()
    return (
        <>
            {/* <div class="l">
                <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
                    <div class="wheel"></div>
                    <div class="hamster">
                        <div class="hamster__body">
                            <div class="hamster__head">
                                <div class="hamster__ear"></div>
                                <div class="hamster__eye"></div>
                                <div class="hamster__nose"></div>
                            </div>
                            <div class="hamster__limb hamster__limb--fr"></div>
                            <div class="hamster__limb hamster__limb--fl"></div>
                            <div class="hamster__limb hamster__limb--br"></div>
                            <div class="hamster__limb hamster__limb--bl"></div>
                            <div class="hamster__tail"></div>
                        </div>
                    </div>
                    <div class="spoke"></div>
                </div>
            </div> */}
            <div className={`app ${theme === "dark" ? theme : "light"}`}>

            <div className='flex flex-wrap w-full' height={100}>
                {pro.map((item, saxta) => (
                    <div key={saxta} className='w-3/12 flex justify-center'>
                        <div className='w-6/12'>
                            <h1 className='w-full'>{item.title}</h1>
                            <h2>{item.price} AZN</h2>
                            <img width={100} height={100} src={item.image} alt={item.title} />
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </>
    );
};

export default Main;
