import React from 'react';
import { INGREDIENTS } from '../Ingredient/Ingredient';
import './Burger.css';

interface BurgerProps {
    data: { name: string; count: number }[];
}

const Burger: React.FC<BurgerProps> = ({ data }) => {
    const total: { name: string }[] = [];
    let totalCost: number = 30;

    data.forEach((item, index) => {
        for (let i = 0; i < item.count; i++) {
            totalCost += INGREDIENTS[index].price;
            total.push({ name: item.name });
        }
    });

    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"> </div>
                <div className="Seeds2"> </div>
            </div>
            {total.map((item, index) => (
                <div className={item.name} key={index}> </div>
            ))}
            <div className="BreadBottom"> </div>
            <p>Общая стоимость: {totalCost}</p>
        </div>
    );
};

export default Burger;