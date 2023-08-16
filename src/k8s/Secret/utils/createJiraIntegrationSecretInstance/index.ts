import { KubeObjectInterface } from '@kinvolk/headlamp-plugin/lib/lib/k8s/cluster';
import { SECRET_LABEL_SECRET_TYPE } from '../../labels';

export const createJiraIntegrationSecretInstance = ({
    user,
    password,
}: {
    user: string;
    password: string;
}): KubeObjectInterface => {
    return {
        apiVersion: 'v1',
        kind: 'Secret',
        // @ts-ignore
        metadata: {
            name: 'jira-user',
            labels: {
                [SECRET_LABEL_SECRET_TYPE]: 'jira',
            },
        },
        type: 'Opaque',
        data: {
            username: btoa(unescape(user)),
            password: btoa(unescape(password)),
        },
    };
};
