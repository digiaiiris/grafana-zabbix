import React, { FC } from 'react';
import { ProblemDTO } from '../../../datasource/types';

interface Props {
  problem: ProblemDTO;
}

export const MaintenanceIcon: FC<Props> = ({ problem }) => {
  const ongoingMaintenance = problem.hosts && problem.hosts.length > 0 && problem.hosts[0].maintenance_status === '1';

  return (
    <>
      { ongoingMaintenance ? (
        <div className="alert-maintenance-icon">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120">
            <g>
              <path
                d="M60.5,59.7c-5.9-5.3-9.5-9.4-10.8-10.9L6.6,92.4c-6.7,6.7-8,15-1.3,21.7c6.7,6.7,16.3,4.1,23-2.6l43-43
                C69.2,67,65.3,64.1,60.5,59.7z M17.4,108c-3.4,0-6.1-2.6-6.1-6.1s2.6-6.1,6.1-6.1s6.1,2.6,6.1,6.1S20.9,108,17.4,108z"
              />
              <path
                d="M116.1,27.6L95.5,48.2l-18.6-5.7l-4.2-17.4L92.8,4.9c-11.1-4-23.1-2-32.4,7.1c-9.1,9.1-10,22.2-6.4,32.5
                c0,0,4.6,5.9,10.3,11c4.6,4.2,11.2,8.7,11.2,8.7c11.5,5.5,24.2,6,33.9-3.5C118.7,51.4,120.5,38.9,116.1,27.6z"
              />
            </g>
          </svg>
        </div>
      ) : null }
    </>
  );
};

export default MaintenanceIcon;
