import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CONSTANTS from '../../constants';
import CustomerDashboard from '../../components/CustomerDashboard/CustomerDashboard';
import CreatorDashboard from '../../components/CreatorDashboard/CreatorDashboard2';
import Header from '../../components/Header/Header';
import ModeratorPage from '../ModeratorPage/ModeratorPage';

const Dashboard = (props) => {
  const { role, history } = props;

  return (
    <div>
      <Header />
      {role === CONSTANTS.MODERATOR ? (
        <ModeratorPage history={history} match={props.match} />
      ) : role === CONSTANTS.CUSTOMER ? (
        <CustomerDashboard history={history} match={props.match} />
      ) : (
        <CreatorDashboard history={history} match={props.match} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => state.userStore.data;

export default connect(mapStateToProps)(Dashboard);
