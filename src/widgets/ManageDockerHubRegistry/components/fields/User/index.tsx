import React from 'react';
import { useFormContext as useReactHookFormContext } from 'react-hook-form';
import { FormTextField } from '../../../../../providers/Form/components/FormTextField';
import { useFormContext } from '../../../../../providers/Form/hooks';
import { DOCKERHUB_REGISTRY_SECRET_FORM_NAMES } from '../../../names';
import { ManageDockerHubRegistryFormDataContext } from '../../../types';

export const User = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useReactHookFormContext();

    const {
        formData: { isReadOnly },
    } = useFormContext<ManageDockerHubRegistryFormDataContext>();

    return (
        <FormTextField
            {...register(DOCKERHUB_REGISTRY_SECRET_FORM_NAMES.user.name, {
                required: 'Enter user name',
            })}
            label={`User`}
            title={
                'Provide the unique identifier linked to your user account on the Container registry.'
            }
            placeholder={'Enter user name'}
            control={control}
            errors={errors}
            disabled={isReadOnly}
        />
    );
};