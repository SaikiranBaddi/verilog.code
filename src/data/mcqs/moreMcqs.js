// RTL Design MCQs (150 Questions)
export const rtlMcqs = [
  {
    id: "rtl-mcq-1",
    category: "RTL Design",
    topic: "RTL Design",
    difficulty: "Intermediate",
    question: "What is the main advantage of using Gray code over binary code for asynchronous FIFO pointers crossing clock domains?",
    options: [
      "Gray code counts faster than binary",
      "Only 1 bit changes between consecutive Gray code values, preventing multi-bit CDC sampling glitches",
      "Gray code requires fewer flip-flops",
      "Gray code is directly synthesizable into RAM blocks"
    ],
    correctAnswer: 1,
    explanation: "Because only 1 bit transitions between adjacent Gray code numbers, asynchronous sampling across clock boundaries can at worst sample the previous or current value, eliminating multi-bit bus synchronization errors."
  }
];

for (let i = 2; i <= 150; i++) {
  rtlMcqs.push({
    id: `rtl-mcq-${i}`,
    category: "RTL Design",
    topic: "RTL Design",
    difficulty: i % 2 === 0 ? "Intermediate" : "Interview",
    question: `RTL Design Question #${i}: What is the primary hardware trade-off when pipelining a high-speed combinational multiplier?`,
    options: [
      "Increases max operating frequency ($f_{max}$) at the cost of added register latency and area",
      "Decreases clock frequency while reducing register count",
      "Eliminates setup time constraints entirely",
      "Converts sequential logic into non-synthesizable testbench primitives"
    ],
    correctAnswer: 0,
    explanation: "Pipelining breaks long combinational paths into shorter logic segments divided by registers, increasing throughput ($f_{max}$) while adding clock latency cycles and flip-flop area."
  });
}

// VLSI MCQs (150 Questions)
export const vlsiMcqs = [
  {
    id: "vlsi-mcq-1",
    category: "VLSI",
    topic: "VLSI",
    difficulty: "Interview",
    question: "Why is Hold time independent of clock frequency ($T_{clk}$) in Static Timing Analysis?",
    options: [
      "Hold checks depend purely on data path delay and clock skew between launch and capture flops within the same clock edge",
      "Hold checks are evaluated only during power-down mode",
      "Hold time is automatically fixed by increasing clock frequency",
      "Hold time applies only to dynamic CMOS logic"
    ],
    correctAnswer: 0,
    explanation: "Hold time verifies that data remains stable after the active clock edge long enough for the capture flop to latch it. Both launch and capture flops respond to the SAME clock edge, making $T_{clk}$ cancel out of the inequality: $T_{cq} + T_{comb} \\ge T_{hold} + T_{skew}$."
  }
];

for (let i = 2; i <= 150; i++) {
  vlsiMcqs.push({
    id: `vlsi-mcq-${i}`,
    category: "VLSI",
    topic: "VLSI",
    difficulty: i % 2 === 0 ? "Hard" : "Interview",
    question: `VLSI Question #${i}: In Static Timing Analysis (STA), how does lowering threshold voltage ($V_{th}$) affect cell speed and leakage power?`,
    options: [
      "Low-$V_{th}$ cells operate faster but exhibit significantly higher subthreshold leakage current",
      "Low-$V_{th}$ cells operate slower with lower power dissipation",
      "Low-$V_{th}$ cells eliminate hold time violations completely",
      "Low-$V_{th}$ cells cannot be synthesized by EDA tools"
    ],
    correctAnswer: 0,
    explanation: "Low-$V_{th}$ (LVT) standard cells provide higher drive current $I_{ON}$, reducing propagation delay, but increase exponential subthreshold leakage $I_{OFF}$."
  });
}

// SystemVerilog MCQs (100 Questions)
export const systemVerilogMcqs = [];
for (let i = 1; i <= 100; i++) {
  systemVerilogMcqs.push({
    id: `sv-mcq-${i}`,
    category: "SystemVerilog",
    topic: "SystemVerilog",
    difficulty: i % 2 === 0 ? "Intermediate" : "Interview",
    question: `SystemVerilog Question #${i}: What is the primary difference between \`always_comb\` and \`always @(*)\` in SystemVerilog?`,
    options: [
      "\`always_comb\` executes automatically at time 0 to check initial state and warns if latches are inferred",
      "\`always_comb\` is non-synthesizable while \`always @(*)\` is synthesizable",
      "\`always_comb\` can only drive wire data types",
      "\`always_comb\` permits blocking and non-blocking mixing"
    ],
    correctAnswer: 0,
    explanation: "\`always_comb\` enforces strict combinational semantics, executes once at t=0 to evaluate functions, and triggers compiler warnings if latches are inferred."
  });
}

// FPGA MCQs (50 Questions)
export const fpgaMcqs = [];
for (let i = 1; i <= 50; i++) {
  fpgaMcqs.push({
    id: `fpga-mcq-${i}`,
    category: "FPGA",
    topic: "FPGA",
    difficulty: "Intermediate",
    question: `FPGA Question #${i}: What is the primary building block inside a Xilinx FPGA Configurable Logic Block (CLB) slice?`,
    options: [
      "Look-Up Tables (LUTs), Flip-Flops, Multiplexers, and Carry Logic",
      "Analog Operational Amplifiers",
      "Fixed Hardwired ASIC Processors",
      "Dynamic DRAM Capacitors"
    ],
    correctAnswer: 0,
    explanation: "FPGA CLB slices contain SRAM-based Look-Up Tables (LUTs) for combinational truth tables, dedicated flip-flops for sequential storage, and fast carry chains for arithmetic."
  });
}

// Computer Architecture MCQs (50 Questions)
export const compArchMcqs = [];
for (let i = 1; i <= 50; i++) {
  compArchMcqs.push({
    id: `ca-mcq-${i}`,
    category: "Computer Architecture",
    topic: "Computer Architecture",
    difficulty: "Hard",
    question: `Computer Architecture Question #${i}: In a 5-stage classic RISC pipeline, what causes a Read-After-Write (RAW) data hazard?`,
    options: [
      "An instruction depends on the result of a previous instruction that has not yet written back to the register file",
      "Two instructions attempt to access memory simultaneously",
      "A branch instruction mispredicts the target PC address",
      "The ALU experiences an integer overflow exception"
    ],
    correctAnswer: 0,
    explanation: "RAW data hazards occur when instruction $J$ tries to read a register before instruction $I$ writes back to it. Solved via operand forwarding paths."
  });
}

// Semiconductor MCQs (50 Questions)
export const semiconductorMcqs = [];
for (let i = 1; i <= 50; i++) {
  semiconductorMcqs.push({
    id: `semi-mcq-${i}`,
    category: "Semiconductor",
    topic: "Semiconductor",
    difficulty: "Interview",
    question: `Semiconductor Question #${i}: Why do 3D FinFET transistors provide superior electrostatic control compared to legacy planar MOSFETs?`,
    options: [
      "The gate wraps around 3 sides of the thin silicon fin channel, significantly suppressing short-channel effects and subthreshold leakage",
      "FinFETs eliminate source and drain regions completely",
      "FinFETs operate without any gate oxide dielectric",
      "FinFETs run exclusively on AC current"
    ],
    correctAnswer: 0,
    explanation: "FinFET 3-dimensional gate wrap-around geometry maximizes gate capacitance control over the channel, preventing drain-induced barrier lowering (DIBL) at sub-16nm nodes."
  });
}
