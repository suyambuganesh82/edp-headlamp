import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useGitServerListQuery } from '../../../../k8s/EDPGitServer/hooks/useGitServerListQuery';
import { FormSelect } from '../../../../providers/Form/components/FormSelect';
import { FieldEvent } from '../../../../types/forms';
import { GitServerProps } from './types';

export const GitServer = ({ names, handleFormFieldChange }: GitServerProps) => {
    const { data: gitServers } = useGitServerListQuery({});
    const gitServersOptions = React.useMemo(
        () => gitServers?.items.map(({ metadata: { name } }) => ({ label: name, value: name })),
        [gitServers?.items]
    );

    const {
        register,
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <FormSelect
            {...register(names.gitServer.name, {
                required: 'Select an existing Git server',
                onBlur: ({ target: { name, value } }: FieldEvent) =>
                    handleFormFieldChange && handleFormFieldChange({ name, value }),
            })}
            label={'Git server'}
            title={'Select an existing Git server'}
            control={control}
            errors={errors}
            options={gitServersOptions}
        />
    );
};
