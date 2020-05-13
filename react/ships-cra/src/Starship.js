import React from 'react';

export default function Starship(props) {
  // let element = "Hello Starship";
  // console.log(props.starshipData);

  let element = props.starshipData.map((item, index) => {
    return (
      <div className='starship' key={index}>
        <h2>{item.name}</h2>
        <p>Model: {item.model}</p>
        <p>Crew: {item.crew}</p>
      </div>
    );
  });

  return <div className='starships'>{element}</div>;
}

// export default Starship;
