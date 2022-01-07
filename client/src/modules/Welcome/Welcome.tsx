/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from 'library/common/components/stateSlices/loginSlice';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import './Welcome.css';

// ?  components
import {
  GreenExploreCard,
  BlueExploreCard,
  RedExploreCard,
  PinkExploreCard,
} from 'library/common/components/ExploreCards/ExploreCards';

import './Drawer.css';
import BarChart from 'library/common/components/Charts/BarChart/BarChart';

const Welcome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loggedInUser } = useSelector((state: RootStateOrAny) => state.login);
  console.log(loggedInUser);
  if (loggedInUser != null) {
    console.log(loggedInUser);

    useEffect(() => {
      const sidebar = document.querySelector('.sidebar');
      const closeBtn = document.querySelector('#btn') as HTMLButtonElement;
      const searchBtn = document.querySelector('.bx-search');

      closeBtn.addEventListener('click', () => {
        //  @ts-ignore

        sidebar.classList.toggle('open');
        menuBtnChange(); // calling the function(optional)
      });

      //  @ts-ignore
      searchBtn.addEventListener('click', () => {
        // Sidebar open when you click on the search iocn
        //  @ts-ignore
        sidebar.classList.toggle('open');
        menuBtnChange(); // calling the function(optional)
      });

      // following are the code to change sidebar button(optional)
      function menuBtnChange() {
        //  @ts-ignore
        if (sidebar.classList.contains('open')) {
          closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right'); // replacing the iocns class
        } else {
          closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu'); // replacing the iocns class
        }
      }
    }, []);
    const logoutSubmitHandler = () => {
      // @ts-ignore: Unreachable code error
      dispatch(logout());
      localStorage.removeItem('loggedInUser');
      navigate('/');
    };
    return (
      <>
        <div className="sidebar">
          <div className="logo-details">
            <i className="bx bxl-c-plus-plus icon" />
            <div className="logo_name">DeerPortfolio</div>
            <i className="bx bx-menu" id="btn" />
          </div>
          <ul className="nav-list">
            <li>
              <i className="bx bx-search" />
              <input type="text" placeholder="Search..." />
              <span className="tooltip">Search</span>
            </li>
            <li>
              <a href="https://google.com">
                <i className="bx bx-grid-alt" />
                <span className="links_name">Dashboard</span>
              </a>
              <span className="tooltip">Dashboard</span>
            </li>
            <li>
              <a href="https://google.com">
                <i className="bx bx-user" />
                <span className="links_name">User</span>
              </a>
              <span className="tooltip">User</span>
            </li>
            <li>
              <a href="https://google.com">
                <i className="bx bx-chat" />
                <span className="links_name">Messages</span>
              </a>
              <span className="tooltip">Messages</span>
            </li>
            <li>
              <a href="https://google.com">
                <i className="bx bx-pie-chart-alt-2" />
                <span className="links_name">Analytics</span>
              </a>
              <span className="tooltip">Analytics</span>
            </li>
            <li>
              <a href="https://google.com">
                <i className="bx bx-folder" />
                <span className="links_name">File Manager</span>
              </a>
              <span className="tooltip">Files</span>
            </li>
            <li>
              <a href="https://google.com">
                <i className="bx bx-cart-alt" />
                <span className="links_name">Order</span>
              </a>
              <span className="tooltip">Order</span>
            </li>
            <li>
              <a href="https://google.com">
                <i className="bx bx-heart" />
                <span className="links_name">Saved</span>
              </a>
              <span className="tooltip">Saved</span>
            </li>
            <li>
              <a href="https://google.com">
                <i className="bx bx-cog" />
                <span className="links_name">Setting</span>
              </a>
              <span className="tooltip">Setting</span>
            </li>
            <li className="profile">
              <button
                style={{
                  right: '0',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  padding: '2rem',
                  position: 'absolute',
                }}
                type="button"
                onClick={logoutSubmitHandler}
              >
                <i className="bx bx-log-out" id="log_out" />
              </button>
            </li>
          </ul>
        </div>
        <section className="home-section">
          <div className="text">
            Dashboard
            <section className="explore">
              <BlueExploreCard />
              <RedExploreCard />
              <GreenExploreCard />
              <PinkExploreCard />
            </section>
            <section className="chart">
              <BarChart />
            </section>
          </div>
        </section>
      </>
    );
  }
  return <div className="display-3 text-center mt-5">Not logged in </div>;
};

export default Welcome;
