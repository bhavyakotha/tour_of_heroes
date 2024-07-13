import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import useFetch from "./useFetch";

const Heroview = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data: hero, error, isPending } = useFetch('http://localhost:8000/heroes/' + id);
    const [newName, setNewName] = useState('');

    const handleEdit = async () => {
        const updatedHero = { ...hero, title: newName };

        const response = await fetch('http://localhost:8000/heroes/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedHero)
        });

        if (response.ok) {
            console.log('Name updated successfully');
            history.push('/allheroes'); // Redirect to /allheroes
        } else {
            console.error('Failed to update name');
        }
    };

    return (
        <div className="hero-view">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {hero && (
                <div>
                    <h2>{ hero.title }</h2>
                    <p>Rank: { hero.rank }</p>
                </div>
            )}
            <form onSubmit={(e) => { e.preventDefault(); handleEdit(); }}>
                <label>New Name: </label>
                <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <div className = "edit-button">
                    <button type="submit">Edit</button>
                </div>
            </form>
        </div>
    );
}

export default Heroview;
