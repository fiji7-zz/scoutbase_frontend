import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Header from './common/Header';

import Homepage from './pages/Home';
import CountriesListPage from './pages/CountriesList';
import CountryPage from './pages/Country';

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Header/>

                <Route path="/" exact component={Homepage}/>
                <Route path="/countries" exact component={CountriesListPage}/>
                <Route path="/countries/:code" component={CountryPage}/>
            </Router>
        </ApolloProvider>
    );
};