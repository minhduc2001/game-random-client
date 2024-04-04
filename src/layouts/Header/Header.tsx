import React from 'react';
import './index.scss';
import { Avatar, Badge } from 'antd';
import { FaBell } from 'react-icons/fa';
import { IoIosLogIn } from 'react-icons/io';
import { FaUserPlus } from 'react-icons/fa';

function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='navbar-header'>
          <a className='#' href='/'>
            <div className='div-image'>
              <img
                src='https://nsocltx.com/assets/images/logo-nsocltx.com.png'
                alt='NSOCLTX.COM Logo'
              />
            </div>
          </a>
          <Badge count={5}>
            <FaBell size={25} color='white' />
          </Badge>
        </div>

        <ul>
          <li>
            <IoIosLogIn color='white' size={16} />
            <span>Đăng nhập</span>
          </li>
          <li>
            <FaUserPlus color='white' size={16} />
            <span>Đăng ký</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
