export const notesData = [
  {
    id: "verilog-always-block",
    title: "Complete Guide to Verilog Always Blocks",
    topic: "Verilog",
    category: "Verilog",
    readTime: "8 min read",
    date: "August 2026",
    summary: "Deep dive into sensitivity lists, combinational always @(*), sequential always @(posedge clk), and avoiding unintended latches.",
    pdfUrl: "#",
    content: `
# Complete Guide to Verilog Always Blocks

In Verilog HDL, the \`always\` block is the primary construct for modeling procedural behavior.

## 1. Combinational Always Block: \`always @(*)\`

A combinational logic block must re-evaluate whenever ANY input signal changes. Verilog-2001 introduced the wildcard sensitivity list \`@(*)\` or \`@*\`.

\`\`\`verilog
always @(*) begin
    if (sel)
        out = b;
    else
        out = a;
end
\`\`\`

> **CRITICAL RULE**: To prevent inferring unintended transparent latches, every variable assigned inside a combinational \`always\` block MUST be explicitly assigned in all possible execution branches (\`if-else\` or \`default\` case)!

## 2. Sequential Always Block: \`always @(posedge clk)\`

Sequential logic changes state only on clock edges.

\`\`\`verilog
always @(posedge clk or negedge rst_n) begin
    if (!rst_n)
        q <= 1'b0;
    else
        q <= d;
end
\`\`\`

Always use non-blocking assignments (\`<=\`) inside sequential always blocks!
`
  },
  {
    id: "setup-hold-time-cheatsheet",
    title: "Setup and Hold Time Quick Cheat Sheet",
    topic: "VLSI",
    category: "VLSI",
    readTime: "10 min read",
    date: "August 2026",
    summary: "Essential formulas, timing diagrams, clock skew impact, and step-by-step setup/hold violation fixing techniques for interviews.",
    pdfUrl: "#",
    content: `
# Setup and Hold Time Cheatsheet

## Setup Time Constraint ($t_{setup}$)
Setup time is the minimum time data must remain stable BEFORE the active clock edge.

**Formula**:
$$T_{clk} \\ge T_{cq} + T_{comb} + T_{setup} - T_{skew}$$

### How to Fix Setup Violations:
1. Reduce combinational logic delay ($T_{comb}$) by pipelining or retiming.
2. Swap to faster standard cells (lower Vth).
3. Reduce clock frequency ($T_{clk}$) if permitted.

## Hold Time Constraint ($t_{hold}$)
Hold time is the minimum time data must remain stable AFTER the active clock edge.

**Formula**:
$$T_{cq} + T_{comb} \\ge T_{hold} + T_{skew}$$

### How to Fix Hold Violations:
1. Insert buffer delay cells into the data path to increase $T_{comb}$.
`
  },
  {
    id: "fsm-design-patterns",
    title: "FSM Design Patterns: Mealy vs Moore States",
    topic: "RTL Design",
    category: "Verilog",
    readTime: "12 min read",
    date: "August 2026",
    summary: "Architectural comparison of Mealy (input dependent outputs) vs Moore machines with 2-state vs 3-state Verilog templates.",
    pdfUrl: "#",
    content: `
# FSM Design Patterns in Verilog

## Moore Machine vs Mealy Machine

- **Moore FSM**: Outputs depend ONLY on the current state.
- **Mealy FSM**: Outputs depend on BOTH current state AND current inputs.

### 3-State Verilog FSM Pattern:
1. State Register update (\`always @(posedge clk)\`)
2. Next State Logic (\`always @(*)\`)
3. Output Logic (\`assign\` or \`always @(*)\`)
`
  },
  {
    id: "fpga-lut-architecture",
    title: "Understanding FPGA LUTs & CLB Slice Structures",
    topic: "FPGA",
    category: "FPGA",
    readTime: "7 min read",
    date: "August 2026",
    summary: "Explaining how SRAM LUT4 and LUT6 cells implement N-variable truth tables and arithmetic carry chains.",
    pdfUrl: "#",
    content: `
# FPGA LUT Architecture

A 6-input Look-Up Table (LUT6) consists of 64 bits of SRAM configuration storage and a 64:1 multiplexer tree controlled by 6 input address lines.
`
  },
  {
    id: "cmos-inverter-physics",
    title: "CMOS Inverter Fabrication & Layout Rules",
    topic: "Semiconductor",
    category: "Semiconductor",
    readTime: "9 min read",
    date: "August 2026",
    summary: "N-Well process, active regions, polysilicon gates, metal routing layers, and Lambda design rules.",
    pdfUrl: "#",
    content: `
# CMOS Inverter Physics

Understanding static CMOS power dissipation, switching energy, leakage currents ($I_{sub}$, $I_{gate}$), and stick diagrams.
`
  },
  {
    id: "digital-kmap-minimization",
    title: "Karnaugh Map (K-Map) Minimization Rules",
    topic: "Digital Electronics",
    category: "Digital Electronics",
    readTime: "6 min read",
    date: "August 2026",
    summary: "Step-by-step 2, 3, and 4-variable K-Map groupings, essential prime implicants, and Don't Care conditions.",
    pdfUrl: "#",
    content: `
# K-Map Minimization Guide

Learn Gray code ordering (00, 01, 11, 10), forming powers-of-two sub-cubes, and generating minimal Sum of Products (SOP) forms.
`
  }
];
