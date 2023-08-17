import React from 'react';
import { useFormContext as useReactHookFormContext } from 'react-hook-form';
import { FormTextField } from '../../../../../providers/Form/components/FormTextField';
import { useFormContext } from '../../../../../providers/Form/hooks';
import { GIT_SERVER_FORM_NAMES } from '../../../names';
import { ManageGitServerDataContext, ManageGitServerValues } from '../../../types';

export const HostName = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useReactHookFormContext<ManageGitServerValues>();

    const {
        formData: { isReadOnly },
    } = useFormContext<ManageGitServerDataContext>();

    return (
        <FormTextField
            {...register(GIT_SERVER_FORM_NAMES.gitHost.name, {
                required: 'Enter host name',
                pattern: {
                    value: /^([a-z\d]+(-[a-z\d]+)*\.)+[a-z]{2,}$/,
                    message: 'Enter correct host name',
                },
            })}
            label={'Host'}
            placeholder={'host-name.com'}
            control={control}
            errors={errors}
            disabled={isReadOnly}
        />
    );
};