import { verilogMcqs } from './verilogMcqs';
import { digitalMcqs } from './digitalMcqs';
import { 
  rtlMcqs, vlsiMcqs, systemVerilogMcqs, 
  fpgaMcqs, compArchMcqs, semiconductorMcqs 
} from './moreMcqs';

export const mcqsData = [
  ...verilogMcqs,
  ...digitalMcqs,
  ...rtlMcqs,
  ...vlsiMcqs,
  ...systemVerilogMcqs,
  ...fpgaMcqs,
  ...compArchMcqs,
  ...semiconductorMcqs
];
