import React from 'react';

import { Container } from '@material-ui/core';
import { InputComponent } from './Components/InputComponent';
import { ItemsList } from './Components/ItemsList';

export const TodoApp = ({state, dispatch}) => {
    return (
        <Container fixed>
            <InputComponent dispatch={dispatch} />
            <ItemsList state={state} dispatch={dispatch} />
        </Container>
    );
}