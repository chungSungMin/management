import { TableCell, TableRow } from '@mui/material';
import React from 'react';

function Customer(props){

    return(
        <TableRow>
            <TableCell> {props.id} </TableCell>
            <TableCell> <img src ={props.img} alt = 'profile'/> </TableCell>
            <TableCell> {props.name} </TableCell>
            <TableCell> {props.birthday} </TableCell>
            <TableCell> {props.gender} </TableCell>
            <TableCell> {props.job} </TableCell>

        </TableRow>
    )
}





export default Customer;
