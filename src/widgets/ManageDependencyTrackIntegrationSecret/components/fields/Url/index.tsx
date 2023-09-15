import React from 'react';
import { useFormContext as useReactHookFormContext } from 'react-hook-form';
import { FormTextField } from '../../../../../providers/Form/components/FormTextField';
import { useFormContext } from '../../../../../providers/Form/hooks';
import { DEPENDENCY_TRACK_INTEGRATION_SECRET_FORM_NAMES } from '../../../names';
import { ManageDependencyTrackIntegrationSecretFormDataContext } from '../../../types';

export const Url = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useReactHookFormContext();

    const {
        formData: { isReadOnly },
    } = useFormContext<ManageDependencyTrackIntegrationSecretFormDataContext>();

    return (
        <FormTextField
            {...register(DEPENDENCY_TRACK_INTEGRATION_SECRET_FORM_NAMES.url.name, {
                required: 'Enter URL',
            })}
            label={`URL`}
            placeholder={'Enter URL'}
            control={control}
            errors={errors}
            disabled={isReadOnly}
        />
    );
};