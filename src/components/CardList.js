import React from 'react';
import Card from './Card';

const CardList =({robot})=>{
    return (<div className="ma3">
        {robot.map((user, i) => {
            return (<Card key={i}
             id={robot[i].id} 
             name={robot[i].name}
              email={robot[i].email} />);
        })}
    </div>
    );
}

export default CardList;
