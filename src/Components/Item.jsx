import React, { useState } from 'react';
import { changeTask, deleteTask } from '../actions';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Checkbox, FormControlLabel,
    Grid,
    IconButton,
    TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    buttonPadding: {
        padding: '0px'
    }
});

export const Item= ({id, isCompleted, title, description, dispatch}) => {
    const classes = useStyles();

    const [taskDescription, setTaskDescription] = useState(description);

    const setIsCompleted = () => {
        dispatch(changeTask(id, title, !isCompleted, taskDescription))
    }
    return (
        <Grid item xs={12}>
            <div className={classes.root}>
                <Accordion>
                    <AccordionSummary aria-label="Expand" aria-controls='additional-actions1-content'
                    id='additional-actions1-header' expandIcon={<ExpandMoreIcon />}>
                        <Grid container justifyContent='space-between'>
                            <Grid item xs={11}>
                                <FormControlLabel label={title} aria-label='Acknowledge'
                                onClick={(event) => event.stopPropagation()}
                                onFocus={(event) => event.stopPropagation()}
                                control={<Checkbox checked={isCompleted} onChange={setIsCompleted} />}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton className={classes.buttonPadding}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    dispatch(deleteTask(id))
                                }}
                                aria-label='delete'>
                                    <DeleteIcon fontSize='large' />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container alignItems='center' spacing={1}>
                            <Grid item xs={10}>
                                <TextField
                                id='outlined-multiline-static'
                                label='Detailed Description'
                                multiline
                                minRows={4}
                                fullWidth
                                variant='outlined'
                                onChange={(e) => setTaskDescription(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={1} zeroMinWidth>
                                <IconButton className={classes.buttonPadding}
                                onClick={() => {dispatch(changeTask(id, title, isCompleted, taskDescription))}}
                                aria-label='delete'>
                                    <SaveIcon fontSize='large' />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </div>
        </Grid>
    )
}