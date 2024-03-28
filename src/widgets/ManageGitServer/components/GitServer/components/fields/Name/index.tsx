import React from 'react';
import { FormTextField } from '../../../../../../../providers/Form/components/FormTextField';
import { FORM_MODES } from '../../../../../../../types/forms';
import { useGitServerFormsContext } from '../../../../../hooks/useGitServerFormsContext';
import { GIT_SERVER_FORM_NAMES } from '../../../../../names';

export const Name = () => {
  const {
    forms: { gitServer: gitServerForm },
  } = useGitServerFormsContext();

  return (
    <FormTextField
      {...gitServerForm.form.register(GIT_SERVER_FORM_NAMES.name.name, {
        required: 'Enter the Git server name.',
      })}
      label={'Name'}
      title={'Enter the name of your Git Server (e.g., my-github).'}
      placeholder={'my-github'}
      control={gitServerForm.form.control}
      errors={gitServerForm.form.formState.errors}
      disabled={gitServerForm.mode === FORM_MODES.EDIT}
    />
  );
};
