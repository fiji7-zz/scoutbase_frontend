import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const CountriesTable = styled.div`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #000;
    padding: 10px;
`;

const CountriesHead = styled.div`
    width: 33.333%;
    display: inline-block;
    font-weight: bold;
    margin-bottom: 20px;
    word-break: break-all;
    box-sizing: border-box;
    
    &:nth-child(2) {
        padding: 0 10px;
    }
`;

const CountriesCell = styled.div`
    width: 33.333%;
    display: inline-block;
    word-break: break-all;
    box-sizing: border-box;
    
    &:nth-child(2) {
        padding: 0 10px;
    }
`;

const CountriesRow = styled.div`
    margin-bottom: 10px;
    padding 5px 0;
    display: flex;
    align-items: center;
    
    &:last-child {
        margin-bottom: 0;
    }
    
    &:nth-child(odd) {
        background-color: #ffecb3;
    }
`;

export default function CountriesList() {
    const { loading, error, data } = useQuery(gql`
    {
      countries {
        name,
        native,
        languages {
            name,
            native
        },
        continent {
            name
        },
      }
    }
  `);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (!data.countries) return <p>Empty data :(</p>

    const countryRows = data.countries.map(({ name, native, continent, languages }) => {
        const countryLanguages = !!languages ? (
                <ul>
                    {languages.map(({ name, native }) => (
                        <li key={name}>{name}<br/>({native})</li>
                    ))}
                </ul>
            )
            : null;

        return <CountriesRow key={name}>
            <CountriesCell>{name}<br/>({native})</CountriesCell>
            <CountriesCell>{countryLanguages}</CountriesCell>
            <CountriesCell>{continent.name}</CountriesCell>
        </CountriesRow>
    });

    return (
        <div>
            <h2>Countries table:</h2>
            <CountriesTable>
                <div>
                    <CountriesHead>Name</CountriesHead>
                    <CountriesHead>Languages</CountriesHead>
                    <CountriesHead>Continent</CountriesHead>
                </div>
                <div>
                    {countryRows}
                </div>
            </CountriesTable>
        </div>
    );
};