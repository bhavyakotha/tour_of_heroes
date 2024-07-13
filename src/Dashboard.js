import Herolist from './Herolist';
import useFetch from './useFetch';

const Dashboard = () => {
    const {data: heroes, isPending, error} = useFetch('http://localhost:8000/heroes');

    return (
        <div className="dashboard">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {heroes && <Herolist heroes = {heroes.filter((hero) => hero.rank <= 4)} title = "Top 4 Ranked Heroes"/>}
        </div>
    );
}
 
export default Dashboard;