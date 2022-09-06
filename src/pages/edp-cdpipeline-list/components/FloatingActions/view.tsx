import { CreateCDPipeline } from '../../../../components/CreateCDPipeline';
import { ICON_PLUS } from '../../../../constants/icons';
import { Iconify, MuiCore, React } from '../../../../plugin.globals';
import { useStyles } from './styles';
import { FloatingActionsProps } from './types';

const { Fab } = MuiCore;
const { Icon } = Iconify;

export const FloatingActions: React.FC<FloatingActionsProps> = (): React.ReactElement => {
    const classes = useStyles();
    const [createDialogOpen, setCreateDialogOpen] = React.useState<boolean>(false);

    const onClose = React.useCallback(() => {
        setCreateDialogOpen(false);
    }, [setCreateDialogOpen]);
    return (
        <>
            <Fab
                aria-label="add"
                onClick={() => setCreateDialogOpen(true)}
                className={classes.floatingAddButton}
            >
                <Icon icon={ICON_PLUS} className={classes.floatingAddButtonIcon} />
            </Fab>
            <CreateCDPipeline
                open={createDialogOpen}
                setOpen={setCreateDialogOpen}
                onClose={onClose}
            />
        </>
    );
};