import React, {useContext} from 'react';
import {TableBody, TableCell, TableRow} from "@mui/material";
import {AppContext} from "../../../../Global/context";

type Props = {
    page: number,
    rowsPerPage: number
}

const ContentTable: React.FC<Props> = ({page, rowsPerPage}) => {
    const {initialState} = useContext(AppContext);
    return (
        <TableBody>
            {initialState.productState.products
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product) => (
                    <TableRow
                        key={product.productID}
                        sx={{"&:last-child td, &:last-child th": {border: 0}}}
                    >
                        <TableCell>{product.productID}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.category.name}</TableCell>
                        <TableCell>{product.supplier.companyName}</TableCell>
                        <TableCell>{product.unitPrice}</TableCell>
                        <TableCell>{product.unitsInStock}</TableCell>
                    </TableRow>
                ))}
        </TableBody>
    );
};

export default React.memo(ContentTable);