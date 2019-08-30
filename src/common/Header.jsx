import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderH1 = styled.h1`
  margin-bottom: 60px;
`;

const Pathname = styled.span`
  a {
    color: #ffb300;
    font-weight: bold;
    text-decoration: none;
  }
  
  a:hover,
  a:focus {
    color: #e91e63;
  }
`;

const Header = ({ location }) => (
    <HeaderH1>
        Current route: <Pathname><Link to={location.pathname}>{location.pathname}</Link></Pathname>
    </HeaderH1>
);

Header.propTypes = {
    location: PropTypes.object.isRequired,
};

export default withRouter(Header);