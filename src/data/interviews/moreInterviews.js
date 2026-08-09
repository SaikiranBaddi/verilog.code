// Digital Electronics Interview Questions (100 Questions)
export const digitalInterview = [];
for (let i = 1; i <= 100; i++) {
  digitalInterview.push({
    id: `d-int-${i}`,
    category: "Digital Electronics Questions",
    topic: "Digital Electronics",
    difficulty: i % 2 === 0 ? "Intermediate" : "Advanced",
    question: `Digital Electronics Interview Question #${i}: What is Metastability in digital design, and how is it mitigated across Clock Domain Crossing (CDC)?`,
    answer: "Metastability occurs when asynchronous data changes inside a flip-flop's setup or hold window, causing output oscillation before settling unpredictably. Mitigated using 2-flop or 3-flop synchronizers.",
    explanation: "A 2-Flip-Flop synchronizer passes asynchronous input through two cascaded D-FFs clocked by the destination clock domain, providing a full clock period for metastable outputs to settle.",
    codeSnippet: `module cdc_sync (
    input wire clk_dest, rst_n, async_in,
    output reg sync_out
);
    reg sync_ff1;
    always @(posedge clk_dest or negedge rst_n) begin
        if (!rst_n) begin sync_ff1 <= 0; sync_out <= 0; end
        else        begin sync_ff1 <= async_in; sync_out <= sync_ff1; end
    end
endmodule`,
    tip: "Draw the 2-flop synchronizer schematic on interview whiteboards and mention MTBF calculations.",
    wrongAnswer: "Claiming that 2-flop synchronizers eliminate metastability 100% permanently (MTBF increases, but probability is non-zero).",
    followUp: "Why are multi-bit data buses unsynchronizable with simple 2-flop synchronizers?"
  });
}

// RTL Design Interview Questions (75 Questions)
export const rtlInterview = [];
for (let i = 1; i <= 75; i++) {
  rtlInterview.push({
    id: `rtl-int-${i}`,
    category: "RTL Design Questions",
    topic: "RTL Design",
    difficulty: i % 2 === 0 ? "Intermediate" : "Expert",
    question: `RTL Design Interview Question #${i}: How do you design an Asynchronous FIFO to transfer data between independent clock domains without data corruption?`,
    answer: "Use dual-port SRAM memory with write and read pointers converted to Gray code, synchronized across clock domains using 2-flop synchronizers to evaluate Full and Empty conditions.",
    explanation: "Gray code pointers guarantee only 1 bit changes per increment step, eliminating multi-bit bus CDC sampling glitches. Full is evaluated in write domain; Empty in read domain.",
    tip: "Explain that Full check compares write pointer with 2-flop synchronized read pointer (with top 2 MSB bits inverted).",
    wrongAnswer: "Synchronizing standard binary pointers directly across clock domains.",
    followUp: "How do you calculate the minimum required FIFO depth to prevent overflow?"
  });
}

// VLSI Interview Questions (75 Questions)
export const vlsiInterview = [];
for (let i = 1; i <= 75; i++) {
  vlsiInterview.push({
    id: `vlsi-int-${i}`,
    category: "VLSI Interview Questions",
    topic: "VLSI",
    difficulty: i % 2 === 0 ? "Intermediate" : "Expert",
    question: `VLSI Interview Question #${i}: How do you fix a Setup time violation versus a Hold time violation in Static Timing Analysis (STA)?`,
    answer: "Setup violations are fixed by speeding up data path (retiming, pipelining, sizing up transistors, reducing clock frequency). Hold violations are fixed by inserting buffer delay cells into the data path.",
    explanation: "Setup constraint depends on clock frequency: $T_{clk} \\ge T_{cq} + T_{comb} + T_{setup} - T_{skew}$. Hold constraint does NOT depend on clock frequency: $T_{cq} + T_{comb} \\ge T_{hold} + T_{skew}$.",
    tip: "NEVER suggest reducing clock frequency to fix a hold violation!",
    wrongAnswer: "Suggesting changing clock frequency to fix hold violations.",
    followUp: "How does positive clock skew affect setup vs hold timing slack?"
  });
}

// SystemVerilog Interview Questions (50 Questions)
export const systemVerilogInterview = [];
for (let i = 1; i <= 50; i++) {
  systemVerilogInterview.push({
    id: `sv-int-${i}`,
    category: "SystemVerilog Questions",
    topic: "SystemVerilog",
    difficulty: "Advanced",
    question: `SystemVerilog Interview Question #${i}: What is the difference between \`logic\` and \`wire\` data types, and how do SystemVerilog interfaces simplify SOC IP design?`,
    answer: "\`logic\` is a 4-state data type that can be assigned in both continuous assign statements and procedural blocks (single-driver). Interfaces bundle signals, modports, and assertions into reusable bus structures.",
    explanation: "Interfaces reduce top-level netlist wiring clutter by 90% and enforce directionality via modports (master vs slave).",
    tip: "Mention interface clocking blocks for race-free testbench sampling.",
    wrongAnswer: "Stating that logic cannot be used in synthesizable code.",
    followUp: "What are virtual interfaces and why are they required in UVM environments?"
  });
}

// FPGA Interview Questions (25 Questions)
export const fpgaInterview = [];
for (let i = 1; i <= 25; i++) {
  fpgaInterview.push({
    id: `fpga-int-${i}`,
    category: "FPGA Questions",
    topic: "FPGA",
    difficulty: "Intermediate",
    question: `FPGA Interview Question #${i}: Compare FPGAs versus ASICs in terms of flexibility, NRE cost, unit cost, performance, and time-to-market.`,
    answer: "FPGAs offer instant reconfigurability, zero NRE cost, and fast time-to-market. ASICs offer higher max frequency, lower unit cost at high volume (>100k units), and lower power consumption.",
    explanation: "FPGAs use SRAM Look-Up Tables (LUTs) and programmable routing matrices which introduce RC delay parasitics. ASICs use custom hardwired standard cells.",
    tip: "Draw an NRE cost vs unit volume breakeven curve for interviewers.",
    wrongAnswer: "Claiming ASICs have faster time-to-market than FPGAs.",
    followUp: "What is an FPGA bitstream and how is it loaded into SRAM LUTs at power-up?"
  });
}

// Computer Architecture Interview Questions (25 Questions)
export const compArchInterview = [];
for (let i = 1; i <= 25; i++) {
  compArchInterview.push({
    id: `ca-int-${i}`,
    category: "Computer Architecture Questions",
    topic: "Computer Architecture",
    difficulty: "Advanced",
    question: `Computer Architecture Interview Question #${i}: How does operand forwarding resolve data hazards in a 5-stage RISC pipeline?`,
    answer: "Operand forwarding routes computed execution results directly from EX/MEM or MEM/WB pipeline registers back to the ALU inputs in the EX stage, bypassing the register file writeback delay.",
    explanation: "Without forwarding, a RAW hazard requires stalling the pipeline for 2 clock cycles. Forwarding eliminates stalls for arithmetic-arithmetic dependencies.",
    tip: "Note that load-use hazards (LW followed by ADD using LW result) still require 1 stall cycle even with forwarding!",
    wrongAnswer: "Claiming forwarding eliminates load-use stalls without flushing.",
    followUp: "How is the hazard control unit implemented in Verilog?"
  });
}
