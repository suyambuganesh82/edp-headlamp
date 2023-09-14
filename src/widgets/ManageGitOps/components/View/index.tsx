import { Grid } from '@material-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Render } from '../../../../components/Render';
import { GIT_SERVERS } from '../../../../constants/gitServers';
import { CODEBASE_FORM_NAMES } from '../../names';
import { ManageGitOpsValues } from '../../types';
import { GitRepoPath, GitServer, Name } from '../fields';

export const View = () => {
    const { watch } = useFormContext<ManageGitOpsValues>();

    const gitServerFieldValue = watch(CODEBASE_FORM_NAMES.gitServer.name);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <GitServer />
                </Grid>
                <Render condition={gitServerFieldValue !== GIT_SERVERS.GERRIT}>
                    <Grid item xs={5}>
                        <GitRepoPath />
                    </Grid>
                </Render>
                <Grid item xs={3}>
                    <Name />
                </Grid>
            </Grid>
        </>
    );
};