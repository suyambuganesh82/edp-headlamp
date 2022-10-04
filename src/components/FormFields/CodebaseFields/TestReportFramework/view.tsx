import { useFormContext } from 'react-hook-form';
import { testReportFrameworks } from '../../../../configs/testReportFrameworks';
import { MuiCore, React } from '../../../../plugin.globals';
import { FieldEvent } from '../../../../types/forms';
import { FormSelect } from '../../../FormComponents';
import { TestReportFrameworkProps } from './types';

const { Grid } = MuiCore;

export const TestReportFramework = ({ names, handleFormFieldChange }: TestReportFrameworkProps) => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <Grid item xs={12}>
            <FormSelect
                {...register(names.testReportFramework.name, {
                    required: 'Select Autotest Report Framework',
                    onBlur: ({ target: { name, value } }: FieldEvent) =>
                        handleFormFieldChange({ name, value }),
                })}
                label={'Autotest Report Framework'}
                placeholder={'Autotest Report Framework'}
                title={`Select Autotest Report Framework`}
                control={control}
                errors={errors}
                options={testReportFrameworks}
            />
        </Grid>
    );
};