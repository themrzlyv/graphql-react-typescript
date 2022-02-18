import React from 'react';
import {Grid, Paper, Table, TableContainer} from "@mui/material";
import TableHeader from "./TableHeader";
import ContentTable from "./ContentTable";
import TableFooter from "./TableFooter";

const MainTable = () => {
    const [rowsPerPage, _] = React.useState(10);
    const [page, setPage] = React.useState(0);
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHeader/>
                    <ContentTable page={page} rowsPerPage={rowsPerPage}/>
                </Table>
            </TableContainer>
            <Grid item xs={12}>
                <TableFooter page={page} setPage={setPage} rowsPerPage={rowsPerPage}/>
            </Grid>
        </>
    );
};

export default MainTable;