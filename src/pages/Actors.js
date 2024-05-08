import React from 'react';



function Actors(actors) {
  return (
    <>
      <header>
      nav
      </header>
      <main>
        {actors.map(actor=>(
          <article key={actor.id}>
            <h2>{actor.name}</h2>

            <ul>
              {
                actor.movies.map((movie, index)=>(
                  <li key={index}>{movie}</li>
                  ))
              }
            </ul>

          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
