import {Box, Button, Grid, IconButton, Typography} from "@mui/material";
import React, {useContext} from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import {AppContext} from "../../../Global/context";
import {useQuery} from "@apollo/client";
import {CONNECT_CATEGORY} from "../../../Services/api/category.api";

const NavBar: React.FC = () => {
    const {initialState, dispatch} = useContext(AppContext);

    const {loading} = useQuery(CONNECT_CATEGORY, {
        onCompleted: ({viewer: {categoryList}}) => {
            dispatch({type: "SET_CATEGORIES", payload: categoryList})
        },
        variables: {
            sort: "NAME_ASC"
        }
    })

    return (
        <Grid item xs={12} display="flex" alignItems="center">
            <Box display="flex" alignItems="center" flex={1}>
                <IconButton size="large">
                    <LocalShippingIcon sx={{fontSize: "1.5em"}}/>
                </IconButton>
                <Typography variant="h6">Shopify</Typography>
            </Box>
            <Box display="flex" justifyContent="space-evenly" flex={4}>
                {loading && <p>Loading</p>}
                {initialState.categoryState.categories.map((item) => (
                    <Button key={item._id} color="success">
                        <Typography variant="body1" key={item._id}>
                            {item.name}
                        </Typography>
                    </Button>
                ))}
            </Box>
        </Grid>
    );
};

export default NavBar;
