import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
    const [ingredients, setIngredients] = useState([
        { name: 'Meat', count: 0 },
        { name: 'Cheese', count: 0 },
        { name: 'Salad', count: 0 },
        { name: 'Bacon', count: 0 },
    ]);

    return (
        <div className="App burgerInfo">

        </div>
    );
};

export default App;