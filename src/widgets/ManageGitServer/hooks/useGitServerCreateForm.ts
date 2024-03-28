import React from 'react';
import { useForm } from 'react-hook-form';
import { CRUD_TYPES } from '../../../constants/crudTypes';
import { GIT_PROVIDERS } from '../../../constants/gitProviders';
import { useResourceCRUDMutation } from '../../../hooks/useResourceCRUDMutation';
import { EDPGitServerKubeObject } from '../../../k8s/EDPGitServer';
import { EDPGitServerKubeObjectInterface } from '../../../k8s/EDPGitServer/types';
import { createGitServerInstance } from '../../../k8s/EDPGitServer/utils/createGitServerInstance';
import { getUsedValues } from '../../../utils/forms/getUsedValues';
import { GIT_SERVER_FORM_NAMES } from '../names';
import { GitServerFormValues } from '../types';

export const useGitServerCreateForm = ({ handleClosePanel }: { handleClosePanel: () => void }) => {
  const createMutation = useResourceCRUDMutation<
    EDPGitServerKubeObjectInterface,
    CRUD_TYPES.CREATE
  >('gitServerCreateMutation', EDPGitServerKubeObject, CRUD_TYPES.CREATE);

  const defaultValues = React.useMemo(() => {
    return {
      [GIT_SERVER_FORM_NAMES.gitProvider.name]: GIT_PROVIDERS.GERRIT,
      [GIT_SERVER_FORM_NAMES.sshPort.name]: 22,
      [GIT_SERVER_FORM_NAMES.httpsPort.name]: 443,
    };
  }, []);

  const form = useForm<GitServerFormValues>({
    defaultValues: defaultValues,
  });

  const handleSubmit = React.useCallback(
    async (values: GitServerFormValues) => {
      const transformedValues = {
        ...values,
        sshPort: Number(values.sshPort),
        httpsPort: Number(values.httpsPort),
      };
      const gitServerValues = getUsedValues(transformedValues, GIT_SERVER_FORM_NAMES);

      const newGitServer = createGitServerInstance(GIT_SERVER_FORM_NAMES, gitServerValues);
      createMutation.mutate(newGitServer, {
        onSuccess: () => {
          handleClosePanel();
        },
      });
    },
    [createMutation, handleClosePanel]
  );

  return React.useMemo(
    () => ({ form, mutation: createMutation, handleSubmit }),
    [form, createMutation, handleSubmit]
  );
};
