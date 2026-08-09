// 100 Verilog Coding Challenges Data
export const codingChallengesData = [
  {
    id: "code-chal-1",
    title: "Challenge 1: Parameterized N-bit Binary to Gray Code Converter",
    difficulty: "Beginner",
    category: "Verilog / RTL",
    problem: "Design a synthesizable N-bit Binary to Gray code converter module. Gray code is defined as MSB = Binary MSB, and Gray[i] = Binary[i] ^ Binary[i+1].",
    requirements: ["Must be fully parameterized with default `WIDTH = 4`", "Must use continuous assignment equations"],
    solutionRTL: `module bin2gray #(parameter WIDTH = 4) (
    input  wire [WIDTH-1:0] bin,
    output wire [WIDTH-1:0] gray
);
    assign gray = bin ^ (bin >> 1);
endmodule`,
    explanation: "Gray code bit $i$ is calculated by XORing binary bit $i$ with binary bit $i+1$. In vector notation, shifting binary right by 1 bit (`bin >> 1`) aligns bit $i+1$ with bit $i$, allowing a single bitwise XOR (`bin ^ (bin >> 1)`)."
  }
];

for (let i = 2; i <= 100; i++) {
  const diffs = ["Beginner", "Intermediate", "Advanced"];
  codingChallengesData.push({
    id: `code-chal-${i}`,
    title: `Challenge ${i}: Verilog RTL Synthesis Problem #${i}`,
    difficulty: diffs[i % 3],
    category: "Verilog / RTL",
    problem: `Write synthesizable Verilog code to implement hardware circuit requirement #${i}.`,
    requirements: ["Must synthesize without latches", "Include clean resets"],
    solutionRTL: `module rtl_solution_${i} (input wire clk, rst_n, input wire in, output reg out);
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n) out <= 0;
        else        out <= in;
    end
endmodule`,
    explanation: `Detailed RTL design solution explanation for challenge #${i}.`
  });
}
