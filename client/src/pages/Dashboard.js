import React from 'react';
import DashboardTemplate from '../components/templates/DashboardTemplate';
import { useTokenContext } from '../hooks/useTokenContext';
import { useUserContext } from '../hooks/useUserContext';

const Dashboard = () => {
  const {user} = useUserContext();
  const {logOut} = useTokenContext();

  return (
      <>
        <DashboardTemplate user={user} logOut={logOut}/>
      </>
  )
};

export default Dashboard;
