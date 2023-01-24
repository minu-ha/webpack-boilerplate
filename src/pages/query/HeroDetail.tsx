import { useSuperHeroData } from 'hooks/useSuperHeroData';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const HeroDetail: FC = () => {
  const { heroId } = useParams();

  const { data } = useSuperHeroData(heroId);

  return (
    <>
      <div>SUPER HERO DETAIL</div>
      <div>
        {data?.data.name} - {data?.data.alterEgo}
      </div>
    </>
  );
};

export default HeroDetail;
