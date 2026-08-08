export const interviewData = [
  {
    id: "interview-1",
    category: "Verilog Interview Questions",
    topic: "Verilog",
    question: "What is the difference between blocking (`=`) and non-blocking (`<=`) assignments in Verilog? Give code examples.",
    answer: "Blocking assignments (`=`) execute sequentially in order, blocking subsequent lines until evaluated. Non-blocking assignments (`<=`) evaluate right-hand side values concurrently at the current time step and schedule updates at the end of the time step.",
    explanation: "Blocking assignments simulate software execution flow. Non-blocking assignments model parallel hardware registers (D-Flip-Flops). Using blocking assignments for sequential logic causes simulation vs synthesis mismatches and race conditions.",
    codeSnippet: `// Sequential Logic: ALWAYS use <=
always @(posedge clk) begin
    a <= in;
    b <= a; // b gets old value of a (Shift Register!)
end

// Combinational Logic: ALWAYS use =
always @(*) begin
    sum = a ^ b;
    cout = a & b;
end`,
    tip: "In interviews, clearly state: 'Blocking for combinational logic inside always @(*), Non-blocking for sequential logic inside always @(posedge clk)'."
  },
  {
    id: "interview-2",
    category: "VLSI Interview Questions",
    topic: "VLSI",
    question: "How do you fix a Setup time violation vs a Hold time violation?",
    answer: "Setup violations are fixed by making the data path faster (or slowing clock). Hold violations are fixed by making the data path slower (inserting buffer delays).",
    explanation: "Setup Equation: T_clk >= T_cq + T_comb + T_setup - T_skew. To fix setup: reduce T_comb (pipeline logic, size up transistors, use LVT cells) or lower clock frequency.\nHold Equation: T_cq + T_comb >= T_hold + T_skew. Hold time is independent of clock frequency! To fix hold: insert buffer cells in data path to increase T_comb.",
    tip: "Never say 'reduce clock frequency' to fix a hold violation! Hold violations depend purely on internal delay and clock skew."
  },
  {
    id: "interview-3",
    category: "Digital Electronics Questions",
    topic: "Digital Electronics",
    question: "What is Metastability, and how is it mitigated in digital circuit design?",
    answer: "Metastability occurs when a data input to a flip-flop violates setup or hold time requirements (e.g., during asynchronous Clock Domain Crossing). The output oscillates between 0 and 1 before settling.",
    explanation: "Mitigation: Use a multi-stage synchronizer (typically 2-flop or 3-flop synchronizer). The probability of failure decreases exponentially with settling time.",
    codeSnippet: `// 2-Flip-Flop Synchronizer for CDC
always @(posedge clk_dest or negedge rst_n) begin
    if (!rst_n) begin
        sync_ff1 <= 1'b0;
        sync_ff2 <= 1'b0;
    end else begin
        sync_ff1 <= async_in;
        sync_ff2 <= sync_ff1; // Synchronized output
    end
end`,
    tip: "Draw the 2-flop synchronizer circuit on whiteboards and mention MTBF (Mean Time Between Failures)."
  },
  {
    id: "interview-4",
    category: "Verilog Interview Questions",
    topic: "Verilog",
    question: "How do you prevent an unintended latch from being synthesized in a Verilog combinational block?",
    answer: "Ensure every conditional path (`if-else` branches and `case` items) explicitly assigns a value to every output variable, and include a `default` case statement.",
    explanation: "If a signal is not assigned a value under all possible conditions, Verilog synthesis assumes the signal must retain its previous value, forcing the tool to infer a transparent latch.",
    tip: "Mention SystemVerilog's `always_comb` construct which triggers compiler warnings if latches are inferred."
  },
  {
    id: "interview-5",
    category: "FPGA Questions",
    topic: "FPGA",
    question: "What is the difference between an ASIC and an FPGA in terms of flexibility, cost, speed, and unit volume?",
    answer: "FPGAs offer reconfigurability, lower upfront NRE cost, and fast time-to-market. ASICs offer higher maximum speed, lower unit cost at high production volume, and smaller silicon footprint.",
    explanation: "FPGAs use SRAM LUTs and programmable interconnects which add RC parasitics. ASICs use custom hardwired silicon gates optimized for speed and low power.",
    tip: "Use a comparison table approach covering NRE cost, Unit cost, Power, Speed, and Flexibility."
  },
  {
    id: "interview-6",
    category: "Semiconductor Questions",
    topic: "Semiconductor",
    question: "What is the difference between Static Power and Dynamic Power in CMOS chips?",
    answer: "Dynamic power is consumed during transistor switching activity (charging/discharging node capacitances and short-circuit current). Static power is consumed when transistors are idle due to leakage currents.",
    explanation: "Dynamic Power = alpha * C * Vdd^2 * f. Static Power = I_leakage * Vdd. As technology scales sub-10nm, leakage power becomes a significant fraction of total chip power.",
    tip: "Mention clock gating for dynamic power reduction and power gating/multi-Vth cells for static power reduction."
  },
  {
    id: "interview-7",
    category: "Verilog Interview Questions",
    topic: "Verilog",
    question: "Design a Clock Divider by 2 in Verilog.",
    answer: "Invert the clock output on every positive edge of the input clock.",
    explanation: "A simple D-Flip-Flop with its inverted output (~Q) fed back to its D input divides the clock frequency by 2.",
    codeSnippet: `module clk_div2 (
    input  wire clk_in,
    input  wire rst_n,
    output reg  clk_out
);
    always @(posedge clk_in or negedge rst_n) begin
        if (!rst_n)
            clk_out <= 1'b0;
        else
            clk_out <= ~clk_out;
    end
endmodule`,
    tip: "Be ready to scale this to Divide-by-3 (odd division using both posedge and negedge) or Divide-by-N counter!"
  },
  {
    id: "interview-8",
    category: "VLSI Interview Questions",
    topic: "VLSI",
    question: "What is Clock Tree Synthesis (CTS), and what are its key objectives?",
    answer: "CTS is the physical design step that builds a balanced clock distribution network across the chip silicon layout.",
    explanation: "Key objectives: 1. Minimize clock skew (difference in clock arrival time at flip-flops), 2. Control clock latency (delay from clock source pin), 3. Ensure balanced rise/fall transition times, 4. Minimize clock tree power.",
    tip: "Highlight that CTS inserts specialized symmetric clock buffer cells (CLKBUF) with matched rise/fall delays."
  },
  {
    id: "interview-9",
    category: "Digital Electronics Questions",
    topic: "Digital Electronics",
    question: "Design a 2:1 Multiplexer using only NAND gates.",
    answer: "A 2:1 MUX equation is Y = (A & ~S) | (B & S). Expressed using double negation De Morgan's theorem, Y = NAND( NAND(A, NAND(S, S)), NAND(B, S) ).",
    explanation: "Using NAND gates only: 1 NAND gate acts as inverter for S, 2 NAND gates act as AND logic for inputs A and B, 1 final NAND gate combines them. Total = 4 NAND gates.",
    tip: "Always derive equations on paper starting from standard SOP form."
  },
  {
    id: "interview-10",
    category: "Verilog Interview Questions",
    topic: "Verilog",
    question: "Write Verilog code for a Synchronous FIFO memory buffer depth check.",
    answer: "Maintain read pointer `rd_ptr`, write pointer `wr_ptr`, and a `fifo_count` register incremented on write and decremented on read.",
    codeSnippet: `assign full  = (fifo_count == DEPTH);
assign empty = (fifo_count == 0);`,
    explanation: "For Asynchronous FIFOs across clock domains, Grey code pointers must be used with binary-to-gray and gray-to-binary conversion to prevent multi-bit CDC errors.",
    tip: "Interviewers frequently ask Asynchronous FIFO gray pointer CDC synchronization after synchronous FIFO."
  }
];
