import React from 'react';

type PropsType = {
  color: 'green' | 'blue' | 'red' | 'pink' | 'purple' | 'gold';
};

const Header = ({ color }: PropsType) => {
  return (
    <header>
      <h3
        className="regular"
        style={{
          margin: '2.55rem 0rem',
          display: 'flex',
        }}
      >
        <div
          style={{
            height: '4rem',
            width: '4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '0.75rem',
          }}
          className={`leafCircle ${color}`}
        >
          <i
            className="bx bx-user "
            style={{ color: 'white', fontSize: '2.4rem' }}
          />
        </div>
        Stats
      </h3>
    </header>
  );
};

export default Header;
