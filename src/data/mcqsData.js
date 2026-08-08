export const mcqsData = [
  // --- VERILOG HDL (25 MCQs) ---
  {
    id: "mcq-1",
    category: "Verilog",
    question: "Which Verilog assignment operator must be used inside a sequential `always @(posedge clk)` block to prevent race conditions across cascading flip-flops?",
    options: [
      "Blocking assignment (`=`)",
      "Non-blocking assignment (`<=`)",
      "Continuous assignment (`assign`)",
      "Force assignment (`force`)"
    ],
    correctAnswer: 1,
    explanation: "Non-blocking assignments (`<=`) evaluate all right-hand side (RHS) expressions concurrently at the active clock edge and defer updating left-hand side (LHS) variables to the end of the simulation time step. This models parallel register behavior and prevents race conditions.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-2",
    category: "Verilog",
    question: "What is the default initial simulation value of an uninitialized 4-state `reg` variable in Verilog at time 0?",
    options: [
      "0",
      "1",
      "x (Unknown state)",
      "z (High impedance)"
    ],
    correctAnswer: 2,
    explanation: "In Verilog simulations, 4-state data types (`reg`, `integer`, `time`) default to `x` (unknown logic value) at time t=0 until driven by an initial block or reset signal.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-3",
    category: "Verilog",
    question: "What hardware component is inferred if a variable assigned inside a combinational `always @(*)` block is NOT assigned in all conditional `if-else` branches?",
    options: [
      "D Flip-Flop",
      "Transparent Latch",
      "Tri-state Buffer",
      "Pure Wire"
    ],
    correctAnswer: 1,
    explanation: "When an output signal is omitted in any execution branch of a combinational block, Verilog synthesis infers a transparent level-sensitive latch to remember the signal's previous state when the condition is false.",
    difficulty: "Intermediate"
  },
  {
    id: "mcq-4",
    category: "Verilog",
    question: "What is the result of evaluating the bitwise AND expression `4'b1010 & 4'b1100` in Verilog?",
    options: [
      "4'b1110",
      "4'b1000",
      "4'b0110",
      "1'b1"
    ],
    correctAnswer: 1,
    explanation: "Bitwise AND (`&`) compares each bit pair independently: (1&1=1, 0&1=0, 1&0=0, 0&0=0). Bits: [1&1, 0&1, 1&0, 0&0] = 4'b1000.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-5",
    category: "Verilog",
    question: "Which reduction operator evaluates to `1'b1` for the vector `4'b0100`?",
    options: [
      "&a (Reduction AND)",
      "|a (Reduction OR)",
      "^a (Reduction XOR)",
      "~&a (Reduction NAND)"
    ],
    correctAnswer: 1,
    explanation: "Unary reduction OR (`|a`) computes `a[3] | a[2] | a[1] | a[0]`. Here `0 | 1 | 0 | 0 = 1`.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-6",
    category: "Verilog",
    question: "What is the difference between logical equivalence `==` and case equivalence `===` in Verilog?",
    options: [
      "`==` includes `x` and `z` in comparison; `===` returns `x` if `x` is present",
      "`===` compares `x` and `z` bits literally for exact match; `==` returns `x` if any bit is `x` or `z`",
      "They behave identically in both simulation and synthesis",
      "`===` is synthesizable into gate netlists"
    ],
    correctAnswer: 1,
    explanation: "Case equality `===` strictly compares `x` and `z` bits for exact literal matching during simulation. Note that `===` is non-synthesizable!",
    difficulty: "Intermediate"
  },
  {
    id: "mcq-7",
    category: "Verilog",
    question: "What is the primary function of the `$monitor` system task in a Verilog testbench?",
    options: [
      "Prints text once when executed",
      "Monitors specified variables and prints text automatically whenever any monitored variable changes value",
      "Stops the simulation immediately",
      "Generates a clock waveform"
    ],
    correctAnswer: 1,
    explanation: "`$monitor` runs continuously in the background and prints formatted output to the console every time any of its argument signals change state.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-8",
    category: "Verilog",
    question: "In Verilog, what does the concatenation operator `{a, b}` perform when `a = 2'b10` and `b = 2'b01`?",
    options: [
      "4'b1001",
      "4'b1111",
      "2'b11",
      "4'b0110"
    ],
    correctAnswer: 0,
    explanation: "Concatenation `{a, b}` joins bit vectors end-to-end. `{2'b10, 2'b01}` results in `4'b1001`.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-9",
    category: "Verilog",
    question: "What does the replication operator `{3{2'b10}}` evaluate to?",
    options: [
      "6'b101010",
      "6'b100000",
      "2'b10",
      "6'b111000"
    ],
    correctAnswer: 0,
    explanation: "Replication `{N{vector}}` repeats the vector N times. `{3{2'b10}}` repeats `10` three times, yielding `6'b101010`.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-10",
    category: "Verilog",
    question: "Which statement about parameter declarations in Verilog is TRUE?",
    options: [
      "`parameter` values cannot be overridden during module instantiation",
      "`localparam` values can be overridden from top-level modules during instantiation",
      "`parameter` constants can be overridden at instantiation time; `localparam` constants cannot be overridden",
      "`localparam` and `parameter` behave identically"
    ],
    correctAnswer: 2,
    explanation: "`parameter` constants can be customized per instance using `#(.PARAM_NAME(value))`. `localparam` constants are local to the module and strictly protected from external override.",
    difficulty: "Intermediate"
  },

  // --- VLSI & STA (20 MCQs) ---
  {
    id: "mcq-11",
    category: "VLSI",
    question: "What happens to Setup Time constraint ($t_{setup}$) when positive clock skew ($T_{skew} > 0$) is present on the destination clock path?",
    options: [
      "Setup constraint becomes harder to satisfy",
      "Setup constraint becomes easier to satisfy (helpful)",
      "Setup constraint is unaffected",
      "Hold constraint becomes easier to satisfy"
    ],
    correctAnswer: 1,
    explanation: "Positive clock skew means the clock arrives later at the capture flip-flop ($T_{clk} + T_{skew} \\ge T_{cq} + T_{comb} + T_{setup}$). This gives the data path extra time to settle, easing setup timing (though it worsens hold timing!).",
    difficulty: "Intermediate"
  },
  {
    id: "mcq-12",
    category: "VLSI",
    question: "Dynamic power dissipation in complementary CMOS circuits scales quadratically with which parameter?",
    options: [
      "Frequency ($f$)",
      "Supply Voltage ($V_{dd}^2$)",
      "Load Capacitance ($C_L$)",
      "Threshold Voltage ($V_{th}$)"
    ],
    correctAnswer: 1,
    explanation: "The formula for CMOS dynamic switching power is $P_{dynamic} = \\alpha \\cdot C_L \\cdot V_{dd}^2 \\cdot f$. Power is proportional to the square of supply voltage ($V_{dd}^2$).",
    difficulty: "Intermediate"
  },
  {
    id: "mcq-13",
    category: "VLSI",
    question: "Which Static Timing Analysis constraint command instructs the timing engine to ignore non-functional timing paths, such as asynchronous resets or synchronizers?",
    options: [
      "set_multicycle_path",
      "set_false_path",
      "set_max_delay",
      "set_clock_uncertainty"
    ],
    correctAnswer: 1,
    explanation: "`set_false_path` disables setup and hold timing checks on designated paths that do not have functional timing requirements.",
    difficulty: "Intermediate"
  },
  {
    id: "mcq-14",
    category: "VLSI",
    question: "What is the primary cause of Hold Time violations in digital ICs?",
    options: [
      "Clock frequency being too high",
      "Data path delay being too short ($T_{cq} + T_{comb} < T_{hold} + T_{skew}$)",
      "High gate capacitance",
      "Low supply voltage"
    ],
    correctAnswer: 1,
    explanation: "Hold violations occur when data changes too quickly after a clock edge, corrupting the data being sampled by the capture flip-flop before its hold window closes. Hold checks are independent of clock frequency!",
    difficulty: "Intermediate"
  },
  {
    id: "mcq-15",
    category: "VLSI",
    question: "What is the main objective of Clock Tree Synthesis (CTS) in physical design?",
    options: [
      "To maximize total clock frequency",
      "To balance clock arrival times across all sequential elements and minimize clock skew",
      "To reduce gate count",
      "To perform DRC verification"
    ],
    correctAnswer: 1,
    explanation: "Clock Tree Synthesis builds a balanced tree buffer network to distribute the clock signal evenly, keeping clock skew and latency minimal across all flip-flops.",
    difficulty: "Intermediate"
  },

  // --- DIGITAL ELECTRONICS (20 MCQs) ---
  {
    id: "mcq-16",
    category: "Digital Electronics",
    question: "How many selection lines ($S$) are required for a 16-to-1 Multiplexer?",
    options: [
      "2 selection lines",
      "4 selection lines",
      "8 selection lines",
      "16 selection lines"
    ],
    correctAnswer: 1,
    explanation: "A multiplexer with $2^N$ data input lines requires $N$ select lines. Since $2^4 = 16$, a 16-to-1 MUX requires 4 select lines.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-17",
    category: "Digital Electronics",
    question: "What is the 4-bit 2's complement representation of decimal `-5`?",
    options: [
      "4'b0101",
      "4'b1011",
      "4'b1010",
      "4'b1111"
    ],
    correctAnswer: 1,
    explanation: "+5 in 4-bit binary = `0101`. Invert bits (1's complement) = `1010`. Add 1 = `1011`.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-18",
    category: "Digital Electronics",
    question: "What is the Gray Code equivalent of binary number `1010`?",
    options: [
      "1111",
      "1100",
      "1001",
      "1110"
    ],
    correctAnswer: 0,
    explanation: "Binary to Gray: MSB stays same (1). Next bit = 1^0 = 1. Next bit = 0^1 = 1. Next bit = 1^0 = 1. Gray Code: `1111`.",
    difficulty: "Intermediate"
  },
  {
    id: "mcq-19",
    category: "Digital Electronics",
    question: "Which flip-flop toggle state occurs when inputs J=1 and K=1 on a clock edge in a JK Flip-Flop?",
    options: [
      "No change ($Q_{next} = Q$)",
      "Reset ($Q_{next} = 0$)",
      "Set ($Q_{next} = 1$)",
      "Toggle ($Q_{next} = \\bar{Q}$)"
    ],
    correctAnswer: 3,
    explanation: "When J=1 and K=1, the JK flip-flop toggles its current output state to its complement ($Q_{next} = \\bar{Q}$) on the active clock edge.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-20",
    category: "Digital Electronics",
    question: "How many distinct states does an 8-bit binary counter have?",
    options: [
      "8 states",
      "16 states",
      "256 states",
      "512 states"
    ],
    correctAnswer: 2,
    explanation: "An N-bit counter has $2^N$ states. For $N=8$, $2^8 = 256$ distinct states (from 0 to 255).",
    difficulty: "Beginner"
  },

  // --- FPGA ARCHITECTURE (15 MCQs) ---
  {
    id: "mcq-21",
    category: "FPGA",
    question: "What underlying hardware component inside an FPGA is used to implement custom N-input combinational logic truth tables?",
    options: [
      "DSP48 Slices",
      "Look-Up Tables (LUT)",
      "Global Clock Buffers (BUFG)",
      "Block RAM (BRAM)"
    ],
    correctAnswer: 1,
    explanation: "Look-Up Tables (LUTs) store truth table outputs in SRAM cells, allowing them to evaluate any arbitrary N-variable Boolean function.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-22",
    category: "FPGA",
    question: "What dedicated FPGA resource provides high-capacity, dual-port embedded memory for FIFOs and data buffers?",
    options: [
      "Distributed LUT RAM",
      "Block RAM (BRAM)",
      "Flash ROM",
      "UltraRAM"
    ],
    correctAnswer: 1,
    explanation: "Block RAM (BRAM) consists of dedicated 18Kb/36Kb hardware memory blocks embedded throughout the FPGA fabric.",
    difficulty: "Beginner"
  },

  // --- RTL & FSM (10 MCQs) ---
  {
    id: "mcq-23",
    category: "RTL",
    question: "What is the key architectural difference between a Moore FSM and a Mealy FSM?",
    options: [
      "Moore outputs depend on current state AND inputs; Mealy outputs depend ONLY on current state",
      "Moore outputs depend ONLY on current state; Mealy outputs depend on BOTH current state AND current inputs",
      "Moore FSMs use flip-flops; Mealy FSMs use latches",
      "There is no functional difference"
    ],
    correctAnswer: 1,
    explanation: "In a Moore machine, outputs are purely a function of the current state vector. In a Mealy machine, outputs depend on both the current state and present input signals.",
    difficulty: "Intermediate"
  },

  // --- SEMICONDUCTOR (5 MCQs) ---
  {
    id: "mcq-24",
    category: "Semiconductor",
    question: "What is the main advantage of 3D FinFET transistors over traditional planar MOSFETs at sub-16nm nodes?",
    options: [
      "Lower manufacturing cost",
      "Superior 3-sided gate electrostatic control over the channel, drastically reducing subthreshold leakage current",
      "Slower switching speed",
      "Elimination of interconnect resistance"
    ],
    correctAnswer: 1,
    explanation: "FinFET wraps the gate electrode around three sides of a thin silicon fin channel, providing tight electrostatic control that suppresses short-channel leakage.",
    difficulty: "Intermediate"
  },

  // --- SYSTEMVERILOG (5 MCQs) ---
  {
    id: "mcq-25",
    category: "SystemVerilog",
    question: "Which SystemVerilog construct explicitly enforces combinational logic semantics during simulation and warns if a latch is inferred?",
    options: [
      "always_comb",
      "always_ff",
      "always_latch",
      "initial"
    ],
    correctAnswer: 0,
    explanation: "`always_comb` infers an automatic complete sensitivity list, evaluates at time t=0, and throws compiler warnings if any latch is inferred.",
    difficulty: "Beginner"
  }
];
