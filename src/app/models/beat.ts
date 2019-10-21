import {BeatType} from './beat-type';

export class Beat {
  id: number;
  name: string;
  path: string | undefined;
  url: string | undefined;
  bpm: number;
  price: string;
  typeId: number | undefined;
  type: BeatType | undefined;
}
