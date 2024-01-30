import { Icon } from '@iconify/react';
import { Chip, Grid, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';
import React from 'react';
import { StatusIcon } from '../../../components/StatusIcon';
import { TRIGGER_TYPES } from '../../../constants/triggerTypes';
import { ICONS } from '../../../icons/iconify-icons-mapping';
import { EDPCDPipelineStageKubeObject } from '../../../k8s/EDPCDPipelineStage';
import { rem } from '../../../utils/styling/rem';
import { useDynamicDataContext } from '../providers/DynamicData/hooks';

const useStyles = makeStyles(() => ({
  labelChip: {
    height: rem(20),
    lineHeight: 1,
    paddingTop: rem(2),
  },
  labelChipBlue: {
    backgroundColor: '#cbe1f9',
    color: '#1261af',
  },
  labelChipGreen: {
    backgroundColor: '#c3e6cd',
    color: '#2f6f45',
  },
}));

export const useInfoColumns = () => {
  const {
    stage: { data: stage, isLoading },
  } = useDynamicDataContext();

  const classes = useStyles();

  const [icon, color, isRotating] = EDPCDPipelineStageKubeObject.getStatusIcon(
    stage?.status?.status
  );

  return React.useMemo(() => {
    if (isLoading) {
      return [];
    }

    return [
      [
        {
          label: 'Status',
          text: (
            <Grid container spacing={1} alignItems={'center'}>
              <Grid item>
                <StatusIcon
                  icon={icon}
                  color={color}
                  isRotating={isRotating}
                  width={20}
                  Title={
                    <>
                      <Typography variant={'subtitle2'} style={{ fontWeight: 600 }}>
                        {`Status: ${stage?.status?.status || 'unknown'}`}
                      </Typography>
                      {!!stage?.status?.detailed_message && (
                        <Typography variant={'subtitle2'} style={{ marginTop: rem(10) }}>
                          {stage?.status?.detailed_message}
                        </Typography>
                      )}
                    </>
                  }
                />
              </Grid>
              <Grid item>
                <Typography variant={'body2'}>{stage?.status?.status || 'unknown'}</Typography>
              </Grid>
            </Grid>
          ),
        },
        {
          label: 'Trigger Type',
          text:
            stage?.spec.triggerType === TRIGGER_TYPES.MANUAL ? (
              <Chip label="manual" className={clsx([classes.labelChip, classes.labelChipBlue])} />
            ) : (
              <Chip label="auto" className={clsx([classes.labelChip, classes.labelChipGreen])} />
            ),
        },
        {
          label: 'Cluster',
          text: (
            <Grid container spacing={1} alignItems={'center'}>
              <Grid item>
                <Icon icon={ICONS.KUBERNETES} width={20} height={20} />
              </Grid>
              <Grid item>{stage?.spec.clusterName}</Grid>
            </Grid>
          ),
        },
        {
          label: 'Namespace',
          text: stage?.spec.namespace,
        },
        {
          label: 'Description',
          text: stage?.spec.description,
          columnXs: 6,
        },
      ],
    ];
  }, [classes, color, icon, isLoading, isRotating, stage]);
};
