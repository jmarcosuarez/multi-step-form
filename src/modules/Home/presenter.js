import React from 'react';
import Header from '../../components/Header';

function Home({ tracks = [] }) {
  return (
    <div>
      <Header />
      {
        tracks.map((track, key) => {
          return <div className="track" key={key}>{track.title}</div>;
        })
      }
    </div>
  );
}

export default Home;
