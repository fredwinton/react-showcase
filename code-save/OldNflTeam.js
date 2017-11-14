import React, { Component } from 'react';

const NflTeam = ({ name, headcoach, logoUrl}) => 
  <tr>
    <td><img className="smallLogo" src={ logoUrl} /> </td>
    <td>{ name } </td>
    <td>{ headcoach } </td>
  </tr>

export default NflTeam