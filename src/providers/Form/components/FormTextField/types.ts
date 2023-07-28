import { InputProps } from '@material-ui/core';
import { StandardTextFieldProps } from '@material-ui/core';
import { Control } from 'react-hook-form/dist/types';
import { FieldErrors } from 'react-hook-form/dist/types/errors';

export interface FormTextFieldProps {
    name: string;
    label?: string;
    title?: string;
    control: Control<any>;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    errors: FieldErrors;
    InputProps?: InputProps;
    TextFieldProps?: StandardTextFieldProps;
}
