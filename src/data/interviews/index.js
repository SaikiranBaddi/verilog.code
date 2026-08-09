import { verilogInterview } from './verilogInterview';
import { 
  digitalInterview, rtlInterview, vlsiInterview, 
  systemVerilogInterview, fpgaInterview, compArchInterview 
} from './moreInterviews';

export const interviewData = [
  ...verilogInterview,
  ...digitalInterview,
  ...rtlInterview,
  ...vlsiInterview,
  ...systemVerilogInterview,
  ...fpgaInterview,
  ...compArchInterview
];
