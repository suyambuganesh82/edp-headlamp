import React from 'react';
import { useFormContext as useReactHookFormContext } from 'react-hook-form';
import { FormTextField } from '../../../../../providers/Form/components/FormTextField';
import { useFormContext } from '../../../../../providers/Form/hooks';
import { REGISTRY_SECRET_FORM_NAMES } from '../../../names';
import { ManageRegistrySecretFormDataContext } from '../../../types';

export const Password = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useReactHookFormContext();

    const {
        formData: { isReadOnly },
    } = useFormContext<ManageRegistrySecretFormDataContext>();

    return (
        <FormTextField
            {...register(REGISTRY_SECRET_FORM_NAMES.password.name, {
                required: 'Enter password',
            })}
            label={`Password`}
            title={
                'Enter the confidential combination used for authenticating your access to the Container registry.'
            }
            placeholder={'Enter password'}
            control={control}
            errors={errors}
            TextFieldProps={{ type: 'password' }}
            disabled={isReadOnly}
        />
    );
};