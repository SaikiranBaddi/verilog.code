export const mcqsData = [
  {
    id: "mcq-1",
    category: "Verilog",
    question: "Which Verilog assignment operator must be used inside a sequential `always @(posedge clk)` block to prevent race conditions?",
    options: [
      "Blocking assignment (`=`)",
      "Non-blocking assignment (`<=`)",
      "Continuous assignment (`assign`)",
      "Force assignment (`force`)"
    ],
    correctAnswer: 1,
    explanation: "Non-blocking assignments (`<=`) evaluate all right-hand side expressions concurrently at the active clock edge and update left-hand side variables at the end of the time step. This prevents race conditions across cascading flip-flops.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-2",
    category: "VLSI",
    question: "What happens to the Setup Time constraint if clock skew ($T_{skew}$) is positive (i.e., clock arrives later at the destination flip-flop than launch flip-flop)?",
    options: [
      "Setup constraint becomes harder to meet",
      "Setup constraint becomes easier to meet (helpful)",
      "Setup constraint is unaffected",
      "Hold constraint becomes easier to meet"
    ],
    correctAnswer: 1,
    explanation: "Positive clock skew increases the available clock period window for data arrival ($T_{clk} + T_{skew} \\ge T_{cq} + T_{comb} + T_{setup}$), making setup time easier to satisfy (though it harms hold time!).",
    difficulty: "Intermediate"
  },
  {
    id: "mcq-3",
    category: "Digital Electronics",
    question: "How many selection lines ($S$) are required for a 16-to-1 Multiplexer?",
    options: [
      "2 selection lines",
      "4 selection lines",
      "8 selection lines",
      "16 selection lines"
    ],
    correctAnswer: 1,
    explanation: "A multiplexer with $2^N$ input lines requires $N$ select lines. Since $2^4 = 16$, a 16-to-1 MUX requires 4 selection lines.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-4",
    category: "Verilog",
    question: "What is the result of evaluating `4'b1010 & 4'b1100` in Verilog?",
    options: [
      "4'b1110",
      "4'b1000",
      "4'b0110",
      "1'b1"
    ],
    correctAnswer: 1,
    explanation: "The bitwise AND operator `&` performs bit-by-bit comparison: (1&1=1, 0&1=0, 1&0=0, 0&0=0). Result: `4'b1000`.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-5",
    category: "FPGA",
    question: "In an FPGA, what hardware block is primarily used to implement custom combinational logic functions?",
    options: [
      "DSP48 Slices",
      "Look-Up Tables (LUT)",
      "Global Clock Buffers (BUFG)",
      "Block RAM (BRAM)"
    ],
    correctAnswer: 1,
    explanation: "Look-Up Tables (LUTs) store truth table values in SRAM cells to evaluate any N-variable Boolean logic function.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-6",
    category: "VLSI",
    question: "Dynamic power dissipation in CMOS circuits is proportional to which voltage term?",
    options: [
      "Vdd",
      "Vdd^2",
      "Vdd^3",
      "sqrt(Vdd)"
    ],
    correctAnswer: 1,
    explanation: "Dynamic power formula is $P_{dynamic} = \\alpha \\cdot C_{load} \\cdot V_{dd}^2 \\cdot f$. Power scales quadratically with supply voltage ($V_{dd}^2$).",
    difficulty: "Intermediate"
  },
  {
    id: "mcq-7",
    category: "Verilog",
    question: "What hardware is inferred if a variable inside a combinational `always @(*)` block is NOT assigned in an `else` branch?",
    options: [
      "D Flip-Flop",
      "Transparent Latch",
      "Tri-state buffer",
      "Pure wire"
    ],
    correctAnswer: 1,
    explanation: "When an assigned variable is missing in any branch of a combinational block, synthesis infers a latch to preserve its previous value when the condition is false.",
    difficulty: "Intermediate"
  },
  {
    id: "mcq-8",
    category: "Digital Electronics",
    question: "Which flip-flop toggle behavior occurs when J=1 and K=1 in a JK Flip-Flop on a clock edge?",
    options: [
      "No change (Q_next = Q)",
      "Reset (Q_next = 0)",
      "Set (Q_next = 1)",
      "Toggle (Q_next = ~Q)"
    ],
    correctAnswer: 3,
    explanation: "When both J and K inputs are high (1), the output toggles to its complement on the active clock edge.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-9",
    category: "Semiconductor",
    question: "What is the primary advantage of FinFET (3D Gate) over planar MOSFET at sub-16nm technology nodes?",
    options: [
      "Lower fabrication cost",
      "Superior gate control over channel, drastically reducing subthreshold leakage",
      "Elimination of metal interconnects",
      "Slower switching speed"
    ],
    correctAnswer: 1,
    explanation: "FinFET wraps the gate electrode around three sides of a thin silicon fin channel, providing electrostatic control that reduces short-channel leakage current.",
    difficulty: "Intermediate"
  },
  {
    id: "mcq-10",
    category: "Verilog",
    question: "What is the default initial value of an uninitialized 4-state `reg` variable in Verilog simulation?",
    options: [
      "0",
      "1",
      "x (Unknown)",
      "z (High Impedance)"
    ],
    correctAnswer: 2,
    explanation: "In Verilog simulation, all 4-state data types (`reg`, `integer`) default to `x` (unknown logic state) at time 0 until driven or initialized.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-11",
    category: "VLSI",
    question: "Which path constraint in STA tells the static timing engine to ignore a specific path, such as asynchronous reset signals or synchronizers?",
    options: [
      "multicycle_path",
      "false_path",
      "max_delay",
      "clock_uncertainty"
    ],
    correctAnswer: 1,
    explanation: "Setting `set_false_path` instructs the timing analyzer to bypass setup/hold checks on non-functional timing paths.",
    difficulty: "Advanced"
  },
  {
    id: "mcq-12",
    category: "Digital Electronics",
    question: "What is the Gray Code representation of binary `1010`?",
    options: [
      "1111",
      "1100",
      "1001",
      "1110"
    ],
    correctAnswer: 0,
    explanation: "Binary to Gray Code conversion: MSB remains same (1). MSB ^ Bit2 = 1^0 = 1. Bit2 ^ Bit1 = 0^1 = 1. Bit1 ^ Bit0 = 1^0 = 1. Result: `1111`.",
    difficulty: "Intermediate"
  },
  {
    id: "mcq-13",
    category: "Verilog",
    question: "What is the system task used to display text messages to the console whenever any argument changes in Verilog?",
    options: [
      "$display",
      "$monitor",
      "$strobe",
      "$write"
    ],
    correctAnswer: 1,
    explanation: "`$monitor` executes automatically and prints output whenever any of its monitored signal variables undergo a value change.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-14",
    category: "FPGA",
    question: "What type of RAM inside an FPGA provides high-capacity, dual-port dedicated storage for FIFOs and data buffers?",
    options: [
      "Distributed LUT RAM",
      "Block RAM (BRAM)",
      "Flash ROM",
      "UltraRAM"
    ],
    correctAnswer: 1,
    explanation: "Block RAM (BRAM) consists of dedicated 18Kb/36Kb embedded memory blocks distributed across the FPGA layout.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-15",
    category: "VLSI",
    question: "What does CTS stand for in the physical design back-end flow?",
    options: [
      "Chip Technology System",
      "Clock Tree Synthesis",
      "Combinational Timing Signoff",
      "CMOS Transistor Sizing"
    ],
    correctAnswer: 1,
    explanation: "Clock Tree Synthesis (CTS) inserts clock buffers to balance clock arrival times and minimize skew across all sequential elements.",
    difficulty: "Intermediate"
  },
  {
    id: "mcq-16",
    category: "Verilog",
    question: "Which operator performs a logical reduction OR of all bits in a 4-bit vector `wire [3:0] a = 4'b0100`?",
    options: [
      "a || 0",
      "|a",
      "a | 4'b0000",
      "^a"
    ],
    correctAnswer: 1,
    explanation: "The unary reduction OR operator `|a` computes `a[3] | a[2] | a[1] | a[0]`, resulting in `1'b1`.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-17",
    category: "Digital Electronics",
    question: "A 3-bit binary counter has how many distinct states?",
    options: [
      "3 states",
      "6 states",
      "8 states",
      "16 states"
    ],
    correctAnswer: 2,
    explanation: "An N-bit counter has $2^N$ states. For $N=3$, the states range from `000` to `111` (8 states).",
    difficulty: "Beginner"
  },
  {
    id: "mcq-18",
    category: "Semiconductor",
    question: "In a P-N junction diode under reverse bias, what happens to the depletion region width?",
    options: [
      "Depletion region narrows",
      "Depletion region widens",
      "Depletion region disappears completely",
      "No change"
    ],
    correctAnswer: 1,
    explanation: "Reverse bias pulls majority carriers away from the junction, widening the depletion layer and stopping current flow.",
    difficulty: "Beginner"
  },
  {
    id: "mcq-19",
    category: "VLSI",
    question: "What is the primary cause of Hold Time violations?",
    options: [
      "Clock frequency being too fast",
      "Data path delay being too short (data arrives too fast before clock captures)",
      "High gate capacitance",
      "Long interconnect wires"
    ],
    correctAnswer: 1,
    explanation: "Hold violations occur when the combinational data path is too fast ($T_{cq} + T_{comb} < T_{hold} + T_{skew}$), overwriting data before the capture D-FF can sample it.",
    difficulty: "Intermediate"
  },
  {
    id: "mcq-20",
    category: "Verilog",
    question: "In SystemVerilog, which construct replaces `always @(*)` to enforce combinational synthesis semantics during simulation?",
    options: [
      "always_comb",
      "always_ff",
      "always_latch",
      "initial"
    ],
    correctAnswer: 0,
    explanation: "`always_comb` automatically infers a complete sensitivity list, evaluates at time 0, and throws a compiler warning if latches are inferred.",
    difficulty: "Beginner"
  }
];
