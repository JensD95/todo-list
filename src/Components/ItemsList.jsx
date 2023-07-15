import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { todoServerAPI } from '../apiActions';
import '../store';
import { Item } from './Item';

export const ItemsList = (props) => {
    console.log(props.state)
    const [items, setItems] = useState([]);
    useEffect(() => {
        todoServerAPI.getTasks().then((data) => {setItems(data)});
    }, []);
    const store = props.state;
    return (
        <>
        <Grid container >
            {store.map(el => <Item key={el.id}
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