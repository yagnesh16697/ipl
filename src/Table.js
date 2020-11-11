import React from 'react';
import './Table.css';
import teams from './Data/teams';

const Table = () => {
  return (
    <div className="table">
      {teams.map((team) => (
        <tr>
          <td>{team.team1}</td>
        </tr>
      ))}
    </div>
  );
};

export default Table;
