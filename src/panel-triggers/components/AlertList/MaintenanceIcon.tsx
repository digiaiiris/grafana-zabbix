import React, { FC } from 'react';
import { ProblemDTO } from '../../../datasource-zabbix/types';

interface Props {
  problem: ProblemDTO;
}

export const MaintenanceIcon: FC<Props> = ({ problem }) => {
  const ongoingMaintenance = problem.hosts && problem.hosts.length > 1 && problem.hosts[0].maintenance_status === '1';

  return (
    <>
      { ongoingMaintenance ?
        <div className="alert-maintenance-icon">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120">
            <path
              d="M60,4C29.1,4,4,29.1,4,60c0,30.9,25.1,56,56,56s56-25.1,56-56C116,29.1,90.9,4,60,4z M20,60c0-22.1,17.9-40,40-40
              c8,0,15.4,2.3,21.6,6.4L26.4,81.6C22.3,75.4,20,68,20,60z M60,100c-7.7,0-14.9-2.2-21-6L94,39c3.8,6.1,6,13.3,6,21
              C100,82.1,82.1,100,60,100z"
            />
          </svg>
        </div>
      : null }
    </>
  );
};

export default MaintenanceIcon;
