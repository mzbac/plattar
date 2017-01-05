import React, { PropTypes } from 'react';
import styles from './AgentDetails.css';

const AgentDetails = props => {
  const { agent } = props;
  const { name, mainPhoto: { server, uri } } = agent;
  return (
    <div className={styles.container} >
      <div className={styles.avatar} ><img src={`${server}/60x80${uri}`} alt={name} /></div>
      <div className={styles.name} >agent: {name}</div>
    </div>
  );
};

AgentDetails.propTypes = {
  agent: PropTypes.object,
};
export default AgentDetails;
