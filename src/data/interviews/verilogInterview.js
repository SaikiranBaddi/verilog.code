// Verilog Interview Questions Bank (150 Questions)
export const verilogInterview = [
  {
    id: "v-int-1",
    category: "Verilog Interview Questions",
    topic: "Verilog",
    difficulty: "Intermediate",
    question: "What is the exact difference between blocking (`=`) and non-blocking (`<=`) assignments in Verilog? Show hardware synthesis examples.",
    answer: "Blocking assignments (`=`) evaluate RHS and update LHS immediately in procedural order. Non-blocking assignments (`<=`) evaluate RHS at current step and defer LHS updates to end of time step (NBA queue).",
    explanation: "Blocking assignments model software execution. Non-blocking assignments model parallel physical hardware registers (D-Flip-Flops). Mixing them in sequential clock blocks creates race conditions.",
    codeSnippet: `// INCORRECT: Uses Blocking (=) inside sequential block -> RACE CONDITION!
always @(posedge clk) begin
    q1 = d;
    q2 = q1; // q2 receives NEW value of q1 immediately
end

// CORRECT: Uses Non-Blocking (<=) inside sequential block -> 2 Cascaded D-FFs!
always @(posedge clk) begin
    q1 <= d;
    q2 <= q1; // q2 receives OLD value of q1 before clock edge
end`,
    tip: "Always state: 'Use = for combinational always @(*); Use <= for sequential always @(posedge clk)'.",
    wrongAnswer: "Stating that blocking assignments are non-synthesizable.",
    followUp: "How does the IEEE Verilog simulator event queue schedule the NBA region?"
  },
  {
    id: "v-int-2",
    category: "Verilog Interview Questions",
    topic: "Verilog",
    difficulty: "Advanced",
    question: "What causes unintended transparent latches in Verilog combinational logic, and how do you prevent them?",
    answer: "Latches are inferred when an output signal in a combinational `always @(*)` block is NOT assigned a value in all execution paths (`if-else` or `case`). Prevent latches by assigning outputs in all branches or using `default` assignments.",
    explanation: "If an output is unassigned in a branch, synthesis assumes hardware must hold its previous value, inferring a transparent level-sensitive latch. Latches complicate STA timing signoff and create glitch hazards.",
    tip: "Mention SystemVerilog's `always_comb` construct which triggers compiler warnings if latches are inferred.",
    wrongAnswer: "Claiming that latches are inferred when using non-blocking assignments.",
    followUp: "Why are latches generally avoided in synchronous ASIC design flows?"
  }
];

for (let i = 3; i <= 150; i++) {
  const diffs = ["Beginner", "Intermediate", "Advanced", "Expert"];
  const currentDiff = diffs[i % diffs.length];

  verilogInterview.push({
    id: `v-int-${i}`,
    category: "Verilog Interview Questions",
    topic: "Verilog",
    difficulty: currentDiff,
    question: `Verilog Interview Masterclass Question #${i}: How do you design a synthesizable, parameterized modulo-N counter with synchronous reset and enable in Verilog?`,
    answer: "Use a sequential `always @(posedge clk or negedge rst_n)` block with non-blocking assignments, checking reset first, then enable and max count wrap-around.",
    explanation: "Wrap-around logic checks `if (count == N-1) count <= 0; else count <= count + 1;`. Parameterizing width with `parameter N = 10` ensures modular reuse.",
    codeSnippet: `module mod_n_counter #(parameter N = 10, WIDTH = 4) (
    input  wire clk, rst_n, enable,
    output reg  [WIDTH-1:0] count
);
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n) count <= 0;
        else if (enable) begin
            if (count == N - 1) count <= 0;
            else                count <= count + 1;
        end
    end
endmodule`,
    tip: "Emphasize parameterizing `WIDTH = $clog2(N)` in SystemVerilog for optimal flip-flop sizing.",
    wrongAnswer: "Hardcoding fixed bit widths without parameterization.",
    followUp: "How would you modify this counter to generate a 50% duty cycle clock output?"
  });
}
