import React, { ReactNode } from 'react';

interface BurgerProps {
    children: ReactNode;
}

const Burger: React.FC<BurgerProps> = (props) => {
    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1" />
                <div className="Seeds2" />
            </div>
            {props.children}
            <div className="BreadBottom" />
        </div>
    );
};

export default Burger;