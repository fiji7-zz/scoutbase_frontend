import React from "react";
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const CountryCode = styled.span`
    color: #ffb300;
    font-weight: bold;
`;

const List = styled.ul`
  li {
    margin-bottom: 15px;
    
    &:last-child {
        margin-bottom: 0;
    }
  }
`;

export default function Country({ match }) {
    const countryCode = match.params.code.toUpperCase();

    const GET_COUNTRY = gql`
        query ($code: String!) {
            country(code: $code) {
                name,
                phone,
                currency,
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_COUNTRY, {
        variables: { code: countryCode },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const { country } = data;

    if (!country) return <p>Empty data :(</p>

    return (
        <div>
            <h2>Country code: <CountryCode>{countryCode}</CountryCode></h2>
            <p>Details:</p>
            <List>
                <li>Name: {country.name}</li>
                <li>Currency: {country.currency}</li>
                <li>Area code (phone): {country.phone}</li>
            </List>
        </div>
    );
}