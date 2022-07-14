import { EditKubeObject } from '../../../../components/EditKubeObject';
import { ICON_PENCIL } from '../../../../constants/icons';
import { PageHeaderActionsProps } from './types';

const {
    pluginLib: { React, MuiCore, Iconify },
} = globalThis;
const { Tooltip, IconButton } = MuiCore;
const { Icon } = Iconify;

export const PageHeaderActions: React.FC<PageHeaderActionsProps> = ({
    kubeObject,
    kubeObjectData,
}): React.ReactElement => {
    const [editorOpen, setEditorOpen] = React.useState<boolean>(false);

    return (
        <>
            <Tooltip title="Edit CD Pipeline">
                <IconButton aria-label="Edit CD Pipeline" onClick={() => setEditorOpen(true)}>
                    <Icon icon={ICON_PENCIL} />
                </IconButton>
            </Tooltip>
            <EditKubeObject
                editorOpen={editorOpen}
                setEditorOpen={setEditorOpen}
                kubeObject={kubeObject}
                kubeObjectData={kubeObjectData.jsonData}
            />
        </>
    );
};
