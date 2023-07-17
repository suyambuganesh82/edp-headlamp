import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormTextField } from '../../../../../../providers/Form/components/FormTextField';
import { CODEBASE_FROM_TEMPLATE_FORM_NAMES } from '../../../../names';

export const Description = () => {
    const {
        register,
        control,
        formState: { errors },
        watch,
    } = useFormContext();

    const typeFieldValue = watch(CODEBASE_FROM_TEMPLATE_FORM_NAMES.type.name);

    return (
        <FormTextField
            {...register(CODEBASE_FROM_TEMPLATE_FORM_NAMES.description.name, {
                required: `Enter ${typeFieldValue} description`,
            })}
            label={'Description'}
            title={'Description'}
            placeholder={`Enter ${typeFieldValue} description`}
            control={control}
            errors={errors}
        />
    );
};
