import React, { useState, useEffect } from 'react';
import { firestore } from './firebase';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Fetch the leaderboard from Firestore
    firestore.collection('leaderboard').orderBy('score', 'desc').limit(5).onSnapshot((snapshot) => {
      const leaderboardData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLeaderboard(leaderboardData);
    });
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((player) => (
          <li key={player.id}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
