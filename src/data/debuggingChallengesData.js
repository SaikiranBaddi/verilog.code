// 75 RTL Debugging Challenges Data
export const debuggingChallengesData = [
  {
    id: "debug-chal-1",
    title: "Debug 1: Incomplete Sensitivity List & Inferred Latch",
    category: "RTL Debugging",
    buggyCode: `// BUGGY VERILOG CODE
module buggy_mux (
    input wire a, b, sel,
    output reg out
);
    always @(a or sel) begin // Missing 'b' in sensitivity list!
        if (sel) out = b;
        else     out = a;
    end
endmodule`,
    errorAnalysis: "In Verilog-1995 sensitivity lists, omitting input 'b' causes simulation to miss output updates when 'b' changes while sel=1. Synthesis infers a combinational gate, leading to simulation vs synthesis mismatch!",
    correctedCode: `// CORRECTED VERILOG CODE
module fixed_mux (
    input wire a, b, sel,
    output reg out
);
    always @(*) begin // Wildcard sensitivity list prevents omissions!
        if (sel) out = b;
        else     out = a;
    end
endmodule`,
    hardwareInferred: "Pure 2-to-1 Multiplexer (No latches inferred)."
  }
];

for (let i = 2; i <= 75; i++) {
  debuggingChallengesData.push({
    id: `debug-chal-${i}`,
    title: `Debug ${i}: RTL Latch & Race Condition Bug #${i}`,
    category: "RTL Debugging",
    buggyCode: `// Buggy RTL Snippet #${i}
always @(posedge clk) begin
    a = b;
    b = a;
end`,
    errorAnalysis: `Using blocking (=) inside sequential always block causes simulation race condition and synthesizes to a single register instead of 2 cascaded registers.`,
    correctedCode: `// Fixed RTL Snippet #${i}
always @(posedge clk) begin
    a <= b;
    b <= a;
end`,
    hardwareInferred: "Two cascaded D-Flip-Flops (Swap Registers)."
  });
}
