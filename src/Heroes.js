import { useState, useEffect } from 'react';
import Herolist from './Herolist';
import useFetch from './useFetch';

const Heroes = () => {
    const [hero, setHeroes] = useState(null);
    const {data: heroes, isPending, error} = useFetch('http://localhost:8000/heroes');

    const handleEditName = (id, newName) => {
        const updatedHeroes = heroes.map(hero => {
          if (hero.id === id) {
            return { ...hero, name: newName };
          }
          return hero;
        });
        setHeroes(updatedHeroes);

        fetch(`http://localhost:8000/heroes/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: newName }),
        })
          .then(res => res.json())
          .then(data => {
          })
          .catch(error => console.error('Error updating hero name:', error));
      };

    return (
        <div className="allheroes">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {heroes && (
                <Herolist
                  heroes={heroes.filter((hero) => hero.rank <= 9)}
                  title="Top 9 Ranked Heroes"
                  onEditName={handleEditName} 
                />
              )}
        </div>
    );
}
 
 
export default Heroes;