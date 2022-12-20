import React from 'react';
import { useUser } from '../../lib/customHooks';

function Dashboard() {
  const { connectedUser, auth } = useUser();
  if (!connectedUser || !auth) {
    return (
      <div className="p-16 bg-gray-800 h-screen">
        <div className="text-2xl mb-4 font-bold text-white">Dashboard</div>
        <div className="ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white" />
      </div>
    );
  }

  return (
    <div className="p-16 bg-gray-800 h-screen">
      <div className="text-2xl mb-4 font-bold text-white"> Dashboard </div>
      {
          connectedUser
                && (
                <div className="text-white">
                  <div className="text-lg text-bold mb-2"> User Details </div>
                  <div className="flex">
                    <div className="w-24 font-medium">
                      <div> Email : </div>
                      <div> Firstname : </div>
                      <div> Lastname : </div>
                    </div>
                    <div>
                      <div>
                        {' '}
                        {connectedUser.email}
                        {' '}
                      </div>
                      <div>
                        {' '}
                        {connectedUser.firstname}
                        {' '}
                      </div>
                      <div>
                        {' '}
                        {connectedUser.lastname}
                        {' '}
                      </div>
                    </div>
                  </div>
                </div>
                )
            }
    </div>
  );
}

export default Dashboard;
