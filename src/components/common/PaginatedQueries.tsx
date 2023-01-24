import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Color {
  id: number;
  label: string;
}

const fetchColors = () => {
  return axios.get(`http://localhost:4000/colors`);
};

const PaginatedQueries = () => {
  const { data: colors } = useQuery(['colors'], fetchColors);

  return (
    <>
      <h2>PaginatedQueries</h2>
      {colors?.data.map((color: Color) => (
        <div key={`id-${color.id}`}>{color.label}</div>
      ))}
    </>
  );
};
export default PaginatedQueries;
