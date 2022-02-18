import React, {useCallback, useContext, useRef} from 'react';
import {Autocomplete, TextField} from "@mui/material";
import {AppContext} from "../../../../Global/context";
import client from "../../../../Services/config/apollo-client";
import {CONNECT_PRODUCTS} from "../../../../Services/api/product.api";
import {iProduct} from "../../../../Services/@types";

interface Data {
    viewer: {
        productList: iProduct[]
    }
}

const SearchBox: React.FC = () => {
    const {dispatch, initialState} = useContext(AppContext);
    const searchRef = useRef<HTMLInputElement>(null);

    const data: Data | null = client.cache.readQuery({query: CONNECT_PRODUCTS, variables: {sort: "PRODUCTID_ASC"}});

    const handleSearch = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            if (searchRef.current?.value) {
                const {value} = searchRef.current;
                const list = initialState.productState.products.filter((product) => product.name.toLowerCase().includes(String(value).toLowerCase()))
                return dispatch({type: "SET_PRODUCTS", payload: list})
            }
        }
    }, [searchRef?.current?.value]);

    return (
        <>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                fullWidth
                options={initialState.productState.products.map((product) => product.name)}
                inputMode="text"
                onInputChange={(e, opt, reason) => {
                    if (reason === 'input') {
                        if (data) {
                            return dispatch({type: "SET_PRODUCTS", payload: data?.viewer?.productList})
                        }
                    }
                }}
                onKeyPress={handleSearch}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search for product name"
                        inputRef={searchRef}
                        InputProps={{
                            ...params.InputProps,
                            type: "search",
                        }}
                    />
                )}
            />
        </>
    );
};

export default SearchBox;