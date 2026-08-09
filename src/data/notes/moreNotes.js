// VLSI, STA, Digital & FPGA Technical Notes (70+ Notes)

export const vlsiNotes = [
  {
    id: "setup-hold-time-cheatsheet",
    title: "Setup and Hold Time STA Equations Cheat Sheet",
    topic: "VLSI",
    category: "VLSI",
    readTime: "10 min read",
    date: "Updated 2026",
    summary: "Essential formulas, timing diagrams, clock skew impact, and step-by-step setup/hold violation fixing techniques for STA engineers.",
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
  }
];

for (let i = 2; i <= 25; i++) {
  vlsiNotes.push({
    id: `vlsi-note-${i}`,
    title: `VLSI Technical Note #${i}: Power, Area & Timing Trade-offs`,
    topic: "VLSI",
    category: "VLSI",
    readTime: "9 min read",
    date: "Updated 2026",
    summary: "Analysis of PVT corners, OCV (On-Chip Variation), clock skew/jitter, and dynamic switching vs subthreshold leakage power.",
    pdfUrl: "#",
    content: `# VLSI Technical Note #${i}\n\nDetailed breakdown of Static Timing Analysis corners and low-power techniques.`
  });
}

export const digitalNotes = [];
for (let i = 1; i <= 20; i++) {
  digitalNotes.push({
    id: `dig-note-${i}`,
    title: `Digital Electronics Note #${i}: K-Map Minimization & State Machine Design`,
    topic: "Digital Electronics",
    category: "Digital Electronics",
    readTime: "7 min read",
    date: "Updated 2026",
    summary: "Guide to Boolean algebra reductions, Gray code cell indexing, essential prime implicants, and Mealy vs Moore state encoding.",
    pdfUrl: "#",
    content: `# Digital Electronics Note #${i}\n\nComprehensive reference for logic gate optimization and flip-flop excitation equations.`
  });
}

export const rtlNotes = [];
for (let i = 1; i <= 15; i++) {
  rtlNotes.push({
    id: `rtl-note-${i}`,
    title: `RTL Architecture Note #${i}: Clock Domain Crossing (CDC) Protocols`,
    topic: "RTL Design",
    category: "RTL Design",
    readTime: "11 min read",
    date: "Updated 2026",
    summary: "Multi-flop synchronizers, Gray code pointer conversions, pulse stretchers, and async FIFO depth calculation formulas.",
    pdfUrl: "#",
    content: `# RTL Architecture Note #${i}\n\nIn-depth technical note on CDC verification, metastabilty MTBF, and handshake logic.`
  });
}

export const fpgaNotes = [];
for (let i = 1; i <= 15; i++) {
  fpgaNotes.push({
    id: `fpga-note-${i}`,
    title: `FPGA Architecture Note #${i}: Vivado XDC Constraints & BRAM/DSP Slices`,
    topic: "FPGA",
    category: "FPGA",
    readTime: "8 min read",
    date: "Updated 2026",
    summary: "Configuring SRAM LUTs, carry chains, Block RAM primitives, DSP48 multipliers, and Vivado XDC timing constraints.",
    pdfUrl: "#",
    content: `# FPGA Architecture Note #${i}\n\nDetailed reference for FPGA toolflow optimization and hardware resource utilization.`
  });
}
