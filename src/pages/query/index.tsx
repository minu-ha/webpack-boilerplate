import PaginatedQueries from 'components/common/PaginatedQueries';
import RQSuperHeroes from 'components/common/RQSuperHeroes';
import { FC } from 'react';

const Index: FC = () => {
  return (
    <>
      <RQSuperHeroes />
      <PaginatedQueries />
    </>
  );
};

export default Index;
