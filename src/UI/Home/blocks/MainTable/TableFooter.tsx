import React, {useContext} from 'react';
import {TablePagination} from "@mui/material";
import {AppContext} from "../../../../Global/context";

type Props = {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    rowsPerPage: number
}

const TableFooter: React.FC<Props> = ({page, setPage, rowsPerPage}) => {
    const {initialState} = useContext(AppContext);
    return (
        <TablePagination
            rowsPerPageOptions={[10]}
            component="div"
            count={initialState.productState.products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(event: unknown, newPage: number) => {
                setPage(newPage);
            }}
        />
    );
};

export default React.memo(TableFooter);