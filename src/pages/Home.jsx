import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  li {
    margin-bottom: 30px;
    
    &:last-child {
        margin-bottom: 0;
    }
  }
  
  a,
  span {
    text-decoration: none;
    color: #ffb300;
    font-weight: bold;
  }
  
  a:hover,
  a:focus {
    color: #e91e63;
  }
`;

const CountryCodeInput = styled.input`
    border-radius: 2px;
    width: 150px;
    border: 1px solid #000;
    height: 30px;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    
    &:focus {
        outline-color: #ffb300;
        border: none;
    }
`;

export default class Homepage extends React.Component {
    state = {
        currentCountry: '',
    }

    handleInputChange = elem => {
        this.setState({
            currentCountry: elem.target.value,
        });
    }

    render() {
        const { currentCountry } = this.state;

        return (
            <nav>
                <h2>List of app routes:</h2>
                <List>
                    <li>
                        <Link to="/">/</Link> - for displaying basic links for the other routes
                    </li>
                    <li>
                        <Link to="/countries">/countries</Link> - for rendering the list of countries
                    </li>
                    <li>
                        <div>
                            <span>/countries/(:code)</span> - for rendering the properties of a
                            current country.
                            <p><strong>Create link below!</strong></p>
                        </div>
                        <div>
                            <CountryCodeInput
                                type="text"
                                placeholder="Input country code!"
                                maxLength={2}
                                onChange={this.handleInputChange}
                            />
                            <p><Link to={`/countries/${currentCountry}`}>Link to your country!</Link></p>
                        </div>
                    </li>
                </List>
            </nav>
        );
    }
};