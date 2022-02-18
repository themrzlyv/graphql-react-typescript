import React from 'react';
import {TableCell, TableHead, TableRow} from "@mui/material";

const TableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Product Id</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default React.memo(TableHeader);