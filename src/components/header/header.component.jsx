import React from "react";
import {Search} from "../index";
import logo from '../../assets/logo.jpg';
import styles from './header.styles.scss';

const Header = ({changeFilterHandler, searchHandler}) => {
  const changeActive = (el) => {
    document
      .querySelectorAll('li.menu-item > a')
      .forEach(i => i.classList.remove('active'));
    el.classList.add('active');
  };
  return (
    <header className="d-flex">
      <div className="container">
        <div className="d-flex justify-content-between py-2 align-items-center">
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="d-flex align-items-center">
            <ul className="menu d-flex">
              <li className="menu-item">
                <a className="all active" onClick={(e) => {
                  changeActive(e.target);
                  changeFilterHandler('all');
                }}>
                  all
                </a>
              </li>
              <li className="menu-item">
                <a className="new" onClick={(e) => {
                  changeActive(e.target);
                  changeFilterHandler('new');
                }}>
                  new
                </a>
              </li>
              <li className="menu-item">
                <a className="top" onClick={(e) => {
                  changeActive(e.target);
                  changeFilterHandler('top');
                }}>
                  top
                </a>
              </li>
            </ul>
            <Search handleChange={searchHandler}/>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
