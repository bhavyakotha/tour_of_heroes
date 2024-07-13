import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Herolist = ({heroes, title}) => {

    return (
        <div className="hero-list">
            <h2 className="main">{ title }</h2>
            {heroes.map((hero) => (
                <div className="hero-preview" key  = {hero.id}>
                    <Link to = {`/heroes/${hero.id}`}>
                    <p>Rank : { hero.rank }</p>
                    <h2>{ hero.title }</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default Herolist;
