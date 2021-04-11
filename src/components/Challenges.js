import React from 'react';
import Challenge from './Challenge'

const Challenges = ({ listOfChallenges }) => {
  return (
    <>
      {listOfChallenges.map((challenge) => (
        <Challenge challenge={challenge}/>
      ))}
    </>
  );
};

export default Challenges;
