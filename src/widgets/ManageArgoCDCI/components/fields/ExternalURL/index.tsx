import React from 'react';
import { useFormContext as useReactHookFormContext } from 'react-hook-form';
import { FormTextField } from '../../../../../providers/Form/components/FormTextField';
import { useFormContext } from '../../../../../providers/Form/hooks';
import { FORM_MODES } from '../../../../../types/forms';
import { ARGOCD_INTEGRATION_SECRET_FORM_NAMES } from '../../../names';
import { ManageArgoCDIntegrationSecretFormDataContext } from '../../../types';

export const ExternalURL = () => {
  const {
    register,
    control,
    formState: { errors },
    setValue,
  } = useReactHookFormContext();

  const {
    formData: { mode },
  } = useFormContext<ManageArgoCDIntegrationSecretFormDataContext>();

  return (
    <FormTextField
      {...register(ARGOCD_INTEGRATION_SECRET_FORM_NAMES.externalUrl.name, {
        required: 'Enter the external Argo CD URL.',
        pattern: {
          value: /^(?!\/).*(?<!\/)$/,
          message: 'Path cannot start or end with slash symbol',
        },
        onChange: ({ target: { value } }) => {
          if (mode === FORM_MODES.EDIT) {
            return;
          }

          setValue(ARGOCD_INTEGRATION_SECRET_FORM_NAMES.url.name, value);
        },
      })}
      label={'External URL'}
      title={'Enter the external URL of your Argo CD instance.'}
      placeholder={'Enter URL'}
      control={control}
      errors={errors}
    />
  );
};
