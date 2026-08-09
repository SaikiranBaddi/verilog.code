import { verilogNotes } from './verilogNotes';
import { vlsiNotes, digitalNotes, rtlNotes, fpgaNotes } from './moreNotes';

export const notesData = [
  ...verilogNotes,
  ...vlsiNotes,
  ...digitalNotes,
  ...rtlNotes,
  ...fpgaNotes
];
