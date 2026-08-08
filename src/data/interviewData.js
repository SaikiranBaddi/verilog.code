export const interviewData = [
  {
    id: "interview-1",
    category: "Verilog Interview Questions",
    topic: "Verilog",
    question: "What is the exact difference between blocking (`=`) and non-blocking (`<=`) assignments in Verilog? Show hardware synthesis examples.",
    answer: "Blocking assignments (`=`) evaluate the RHS and update the LHS immediately before moving to the next line in the procedural block. Non-blocking assignments (`<=`) evaluate all RHS expressions concurrently at the current time step and schedule LHS updates at the end of the time step (in the NBA queue region).",
    explanation: "Blocking assignments simulate sequential software execution flow. Non-blocking assignments model physical parallel hardware registers (D-Flip-Flops). Using blocking assignments inside sequential clock blocks causes simulation vs synthesis mismatches and race conditions.",
    codeSnippet: `// INCORRECT: Uses Blocking (=) inside sequential block
// Synthesizes to a SINGLE D-FF (Race condition!)
always @(posedge clk) begin
    q1 = d;
    q2 = q1; // q2 receives NEW value of q1 immediately
end

// CORRECT: Uses Non-Blocking (<=) inside sequential block
// Synthesizes into TWO cascaded D-Flip-Flops (2-stage Shift Register)!
always @(posedge clk) begin
    q1 <= d;
    q2 <= q1; // q2 receives OLD value of q1 before clock edge
end`,
    tip: "In semiconductor interviews, state: 'Always use = for combinational always @(*); Always use <= for sequential always @(posedge clk)'."
  },
  {
    id: "interview-2",
    category: "VLSI Interview Questions",
    topic: "VLSI",
    question: "How do you fix a Setup time violation versus a Hold time violation in Static Timing Analysis (STA)?",
    answer: "Setup violations are fixed by speeding up the data path (or slowing down clock frequency). Hold violations are fixed by slowing down the data path (inserting delay buffers). Hold time is independent of clock frequency!",
    explanation: "Setup Constraint: T_clk >= T_cq + T_comb + T_setup - T_skew. To fix setup: reduce T_comb (pipeline logic, size up transistors to high-drive cells, swap to Low-Vth cells), or decrease clock frequency.\nHold Constraint: T_cq + T_comb >= T_hold + T_skew. To fix hold: insert non-inverting delay buffer cells into the data path to increase T_comb.",
    tip: "NEVER answer 'reduce clock frequency' to fix a hold violation! Hold checks depend purely on data path delay and clock skew."
  },
  {
    id: "interview-3",
    category: "Digital Electronics Questions",
    topic: "Digital Electronics",
    question: "What is Metastability in digital design, and how is it mitigated across Clock Domain Crossing (CDC)?",
    answer: "Metastability occurs when asynchronous data changes inside a flip-flop's setup or hold window. The flip-flop output oscillates between logic 0 and 1 before settling to an unpredictable state. It is mitigated using multi-stage (2-flop or 3-flop) synchronizers.",
    explanation: "When data crosses unsynchronized clock domains (CDC), setup/hold windows will inevitably be violated. A 2-Flip-Flop synchronizer passes the asynchronous signal through two cascaded D-FFs clocked by the destination clock, giving the metastable output a full clock period to settle.",
    codeSnippet: `// 2-Flip-Flop Synchronizer for Clock Domain Crossing (CDC)
module cdc_sync (
    input  wire clk_dest,
    input  wire rst_n,
    input  wire async_in,
    output reg  sync_out
);
    reg sync_ff1;

    always @(posedge clk_dest or negedge rst_n) begin
        if (!rst_n) begin
            sync_ff1 <= 1'b0;
            sync_out <= 1'b0;
        end else begin
            sync_ff1 <= async_in;  // First flop may go metastable
            sync_out <= sync_ff1;  // Second flop output is stable!
        end
    end
endmodule`,
    tip: "Draw the 2-flop synchronizer circuit on whiteboards and mention MTBF (Mean Time Between Failures) calculations."
  },
  {
    id: "interview-4",
    category: "Verilog Interview Questions",
    topic: "Verilog",
    question: "What causes unintended transparent latches in Verilog combinational logic, and how do you prevent them?",
    answer: "Latches are inferred when an output variable in a combinational `always @(*)` block is NOT assigned a value under all possible execution paths (`if-else` or `case`). To prevent latches, assign outputs in all branches and include a `default` case.",
    explanation: "If a variable is not assigned in a branch, Verilog synthesis assumes hardware must hold its previous value, inferring a transparent level-sensitive latch. Latches complicate STA timing signoff and create glitch hazards.",
    tip: "Mention SystemVerilog's `always_comb` construct which triggers compiler warnings if latches are inferred."
  },
  {
    id: "interview-5",
    category: "FPGA Questions",
    topic: "FPGA",
    question: "Compare FPGAs versus ASICs in terms of flexibility, NRE cost, unit cost, performance, and power consumption.",
    answer: "FPGAs provide instant reconfigurability, zero NRE cost, and fast time-to-market. ASICs offer higher max operating frequency, lower unit cost at high volume (>100k units), and lower power consumption.",
    explanation: "FPGAs use SRAM Look-Up Tables (LUTs) and programmable interconnects which introduce routing RC parasitics. ASICs use custom hardwired standard cells optimized for speed and silicon area.",
    tip: "Use a structured comparison table highlighting NRE (Non-Recurring Engineering) cost and unit volume breakeven points."
  }
];
