import React from 'react';
import styled from 'styled-components';

const Icon = styled.i`
  margin: 1rem;
`;

const GreenCard = styled.div`
  width: 22%;
  height: 12rem;
  margin: 0.25rem;
  position: relative;
  border-radius: 0.25rem;
  span {
    color: white;

    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }

  &:hover {
    span {
      color: black;
    }
    i {
      color: lightgreen;
    }
    background-color: #f5f5f5;
    border: 1px solid lightgreen;
  }
  background-color: lightgreen;
`;
const BlueCard = styled.div`
  width: 22%;
  height: 12rem;
  margin: 0.25rem;
  border-radius: 0.25rem;
  position: relative;

  background-color: #007fff;
  span {
    color: white;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }
  &:hover {
    span {
      color: black;
    }
    i {
      color: #007fff;
    }
    background-color: #f5f5f5;
    border: 1px solid #007fff;
  }
`;
const RedCard = styled.div`
  width: 22%;
  height: 12rem;
  margin: 0.25rem;
  border-radius: 0.25rem;
  position: relative;

  background-color: #ff5c5c;
  span {
    color: white;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }

  &:hover {
    span {
      color: black;
    }
    i {
      color: #ff5c5c;
    }
    background-color: #f5f5f5;
    border: 1px solid #ff5c5c;
  }
`;
const PinkCard = styled.div`
  width: 22%;
  height: 12rem;
  position: relative;

  margin: 0.25rem;
  border-radius: 0.25rem;
  span {
    color: white;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }
  &:hover {
    span {
      color: black;
    }
    i {
      color: #ff9faf;
    }

    background-color: #f5f5f5;
    border: 1px solid #ff9faf;
  }
  background-color: #ff9faf;
`;

export const GreenExploreCard = () => {
  return (
    <GreenCard>
      <Icon className="bx bx-user" />
      <span className="regular">455</span>
    </GreenCard>
  );
};
export const BlueExploreCard = () => {
  return (
    <BlueCard>
      <Icon className="bx bx-user" />
      <span className="regular">455</span>
    </BlueCard>
  );
};
export const RedExploreCard = () => {
  return (
    <RedCard>
      <Icon className="bx bx-user" />
      <span className="regular">455</span>
    </RedCard>
  );
};
export const PinkExploreCard = () => {
  return (
    <PinkCard>
      <Icon className="bx bx-user" />
      <span className="regular">455</span>
    </PinkCard>
  );
};
