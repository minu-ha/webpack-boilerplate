import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface SuperHero {
  name: string;
  id: string;
}

const fetchSuperHeroes = () => {
  return axios.get<SuperHero[]>('http://localhost:4000/superheroes');
};
export const useSuperHeroesData = (
  onSuccess: () => void,
  onError: () => void
) => {
  return useQuery(['super-heroes'], fetchSuperHeroes, {
    onSuccess,
    onError,
    select: response => {
      if (!response.data) {
        throw new Error('No data returned from the API');
      }
      return response.data.map((hero: SuperHero) => hero);
    },
  });
};
