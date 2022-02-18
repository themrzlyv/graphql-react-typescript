import React, {useCallback, useState} from 'react';
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import client from "../../../../Services/config/apollo-client";
import {CONNECT_PRODUCTS} from "../../../../Services/api/product.api";

const FilterBox = () => {
    const [sort, setSort] = useState<string>("");

    const handleChange = useCallback((event: SelectChangeEvent) => {
        setSort(event.target.value as string);
        client.cache.updateQuery({query: CONNECT_PRODUCTS, variables: {sort: "PRODUCTID_ASC"}}, ({viewer}) => {
            const productList = [...viewer.productList];
            switch (event.target.value) {
                case "NAME_ASC":
                    productList.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case "UNITPRICE_ASC":
                    productList.sort((a, b) => a.unitPrice - b.unitPrice);
                    break;
                default:
                    productList.sort((a, b) => a.productID - b.productID);
                    break;
            }
            return {
                viewer: {
                    ...viewer,
                    productList,
                },
            };
        });
    }, [sort]);


    return (
        <>
            <Select
                labelId="sort-select-for-products"
                id="sort-select"
                value={sort}
                displayEmpty
                onChange={handleChange}
            >
                <MenuItem value="">Choose ones</MenuItem>
                <MenuItem value="NAME_ASC">Name</MenuItem>
                <MenuItem value="UNITPRICE_ASC">Price</MenuItem>
            </Select>
        </>
    );
};

export default React.memo(FilterBox);