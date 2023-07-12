import { Grid } from '@material-ui/core';
import React from 'react';
import { Item } from './Item';

export const ItemsList = (props) => {
    console.log(props.state)
    return (
        <>
        <Grid container >
            {props.state.map(el => <Item key={el.id}
            id={el.id}
            isCompleted={el.isCompleted}
            title={el.title}
            description={el.description}
            dispatch={props.dispatch} />
            )}
        </Grid>
        </>
    );
            }