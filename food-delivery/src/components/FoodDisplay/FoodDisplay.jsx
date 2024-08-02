/*import React from 'react';
import './FoodDisplay.css';
import { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    const [itemCounts, setItemCounts] = useState({});

    const incrementCount = (index) => {
        setItemCounts((prevCounts) => ({
            ...prevCounts,
            [index]: (prevCounts[index] || 0) + 1,
        }));
    };

    const decrementCount = (index) => {
        setItemCounts((prevCounts) => ({
            ...prevCounts,
            [index]: prevCounts[index] > 0 ? prevCounts[index] - 1 : 0,
        }));
    };

    return (
        <div className='food-display'>
            <h2>Top dishes near you</h2>
            <div className='food-display-list'>
                {food_list.map((item, index) => {
                    if (category === "All" || item.category === category) {
                        const count = itemCounts[index] || 0;
                        return (
                            <div key={index} className='items'>
                                <div className='image-container'>
                                    <img src={item.image} alt="" className='image' />
                                    {!count ? (
                                        <img
                                            className='add'
                                            onClick={() => incrementCount(index)}
                                            src={assets.add_icon_white}
                                            alt=""
                                        />
                                    ) : (
                                        <div className='items-counter'>
                                            <img
                                                src={assets.remove_icon_red}
                                                alt=""
                                                onClick={() => decrementCount(index)}
                                            />
                                            <p>{count}</p>
                                            <img
                                                onClick={() => incrementCount(index)}
                                                src={assets.add_icon_green}
                                                alt=""
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className='item-info'>
                                    <div className='item-name-rating'>
                                        <p>{item.name}</p>
                                        <img src={assets.rating_starts} alt="" />
                                    </div>
                                    <p className="description">{item.description}</p>
                                    <div className="price">${item.price}</div>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;
*/
import React from 'react';
import './FoodDisplay.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const FoodDisplay = ({ category }) => {
    const { food_list, add, remove, cartItems } = useContext(StoreContext);

    return (
        <div className='food-display'>
            <h2>Top dishes near you</h2>
            <div className='food-display-list'>
                {food_list.map((item, index) => {
                    if (category === "All" || item.category === category) {
                        const count = cartItems[index] || 0;
                        return (
                            <div key={index} className='items'>
                                <div className='image-container'>
                                    <img src={item.image} alt="" className='image' />
                                    {!count ? (
                                        <img
                                            className='add'
                                            onClick={() => add(index)}
                                            src={assets.add_icon_white}
                                            alt=""
                                        />
                                    ) : (
                                        <div className='items-counter'>
                                            <img
                                                src={assets.remove_icon_red}
                                                alt=""
                                                onClick={() => remove(index)}
                                            />
                                            <p>{count}</p>
                                            <img
                                                onClick={() => add(index)}
                                                src={assets.add_icon_green}
                                                alt=""
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className='item-info'>
                                    <div className='item-name-rating'>
                                        <p>{item.name}</p>
                                        <img src={assets.rating_starts} alt="" />
                                    </div>
                                    <p className="description">{item.description}</p>
                                    <div className="price">${item.price}</div>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;
