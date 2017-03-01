import React from 'react';

function SignUpForm({ tracks = [] }) {
  return (
    <div>
      <p>This is SignUpForm</p>
      {
        tracks.map((track, key) => {
          return <div className="track" key={key}>{track.title}</div>;
        })
      }
    </div>
  );
}

export default SignUpForm;
