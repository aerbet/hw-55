import React, { useState } from 'react';
import './App.css';

import Burger from './components/Burger/Burger';
import Ingredient from './components/Ingredient/Ingredient';

interface IngredientItem {
    name: string;
    count: number;
}

const App: React.FC = () => {
    const [ingredients, setIngredients] = useState<IngredientItem[]>([
        { name: 'Meat', count: 0 },
        { name: 'Cheese', count: 0 },
        { name: 'Salad', count: 0 },
        { name: 'Bacon', count: 0 },
    ]);

    const increaseIngr; = (index: number) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index].count++;
        setIngredients(updatedIngredients);
    };

    const decreaseIngr = (index: number) => {
        if (ingredients[index].count > 0) {
            const updatedIngredients = [...ingredients];
            updatedIngredients[index].count--;
            setIngredients(updatedIngredients);
        }
    };

    return (
        <div className="App burgerInfo">
            <div className="col">
                {ingredients.map((item, index) => (
                    <Ingredient
                        name={item.name}
                        index={index}
                        count={item.count}
                        key={index}
                        addClicked={() => increaseIngr(index)}
                        removeClicked={() => decreaseIngr(index)}
                    />
                ))}
            </div>
            <div className="col">
                <Burger data={ingredients} />
            </div>
        </div>
    );
};

export default App;