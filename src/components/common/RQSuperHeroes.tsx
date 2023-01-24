import { useSuperHeroesData } from 'hooks/useSuperHeroesData';
import { Link } from 'react-router-dom';

const SuperHeroes = () => {
  const onSuccess = () => {
    console.log('perform side effect after data fetching');
  };

  const onError = () => {
    console.log('perform side effect after encountering error');
  };

  const { isLoading, data, refetch } = useSuperHeroesData(onSuccess, onError);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>RQ - Super Heroes Page</h2>
      {data?.map(hero => (
        <div key={`id=${hero.id}}`}>
          <Link to={`/query/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
      <button onClick={refetch as never}>fetching data</button>
    </>
  );
};
export default SuperHeroes;
