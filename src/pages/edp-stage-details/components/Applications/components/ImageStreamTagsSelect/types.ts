import { EnrichedApplicationWithArgoApplication } from '../../../../types';

export interface ImageStreamTagsSelectProps {
  enrichedApplicationWithArgoApplication: EnrichedApplicationWithArgoApplication;
  selected: string[];
  defaultValue?: string;
}
