import {BeatType} from './beat-type';

export class Beat {
  id: number;
  name: string;
  path: string;
  url: string;
  bpm: number;
  price: string;
  type: BeatType;
}
