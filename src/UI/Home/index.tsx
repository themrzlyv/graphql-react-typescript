import {useQuery} from "@apollo/client";
import React, {useContext} from "react";
import {CONNECT_PRODUCTS} from "../../Services/api/product.api";
import {AppContext} from "../../Global/context";
import {Grid,} from "@mui/material";
import Header from "./partials/Header";
import Body from "./partials/Body";

const Home: React.FC = () => {
    const {dispatch} = useContext(AppContext);

    const {loading} = useQuery(CONNECT_PRODUCTS, {
        onCompleted: ({viewer: {productList}}) => {
            dispatch({type: "SET_PRODUCTS", payload: productList});
        },
        variables: {
            sort: "PRODUCTID_ASC",
        },
        fetchPolicy: "cache-and-network",
        nextFetchPolicy: "cache-first",
        notifyOnNetworkStatusChange: true,
    });

    if (loading) return <div>Loading...</div>;

    return (
        <Grid container>
            <Header/>
            <Body/>
        </Grid>
    );
};

export default Home;
