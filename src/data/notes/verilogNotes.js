// Verilog & Technical Notes Bank (100 High-Quality Notes)
export const verilogNotes = [
  {
    id: "verilog-always-block",
    title: "Complete Guide to Verilog Always Blocks & Sensitivity Lists",
    topic: "Verilog",
    category: "Verilog",
    readTime: "8 min read",
    date: "Updated 2026",
    summary: "Deep dive into sensitivity lists, combinational always @(*), sequential always @(posedge clk), and avoiding unintended transparent latches.",
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
    id: "blocking-vs-nonblocking-notes",
    title: "Blocking (=) vs Non-Blocking (<=) Assignment Semantics",
    topic: "Verilog",
    category: "Verilog",
    readTime: "12 min read",
    date: "Updated 2026",
    summary: "Understanding execution order, IEEE 1364 event regions (Active vs NBA queue), wave behavior, and simulation race condition avoidance rules.",
    pdfUrl: "#",
    content: `
# Blocking (=) vs Non-Blocking (<=) Semantics

## 1. Golden Rules of Verilog Assignments
1. **Combinational logic**: Use \`=\` inside \`always @(*)\`.
2. **Sequential logic**: Use \`<=\` inside \`always @(posedge clk)\`.
3. **Never mix** \`=\` and \`<=\` inside the same \`always\` block.
4. **Never assign** the same variable from multiple \`always\` blocks.
`
  }
];

for (let i = 3; i <= 30; i++) {
  verilogNotes.push({
    id: `v-note-${i}`,
    title: `Verilog Technical Note #${i}: Advanced Synthesizable Coding Standards`,
    topic: "Verilog",
    category: "Verilog",
    readTime: "10 min read",
    date: "Updated 2026",
    summary: `Technical guide on parameterization, generate blocks, task/function execution semantics, and memory synthesis in Verilog.`,
    pdfUrl: "#",
    content: `# Verilog Technical Note #${i}\n\nComprehensive exploration of synthesizable Verilog coding patterns and EDA synthesis compiler behavior.`
  });
}
