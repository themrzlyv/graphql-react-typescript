import React from 'react';
import {Grid} from "@mui/material";
import SearchBox from "../components/SearchBox";
import FilterBox from "../components/FilterBox";

const Header = () => {
    return (
        <Grid item xs={12} my={3} display="flex" justifyContent="space-between">
            <SearchBox/>
            <FilterBox/>
        </Grid>
    );
};

export default Header;