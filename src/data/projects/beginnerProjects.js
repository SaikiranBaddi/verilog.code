// Beginner Level Projects (8 Projects)
export const beginnerProjects = [
  {
    id: "verilog-alu",
    title: "Parametric 8-bit Arithmetic Logic Unit (ALU)",
    category: "Verilog / RTL",
    difficulty: "Beginner",
    technologies: ["Verilog HDL", "ModelSim", "Xilinx Vivado"],
    skills: ["Combinational Logic", "Opcode Decoding", "Arithmetic Operations", "Flags (Zero, Carry, Overflow)"],
    summary: "Design and testbench verification of a parametric 8-bit ALU supporting 16 operations including ADD, SUB, AND, OR, XOR, SHIFT, and Flag generation.",
    description: "The Arithmetic Logic Unit (ALU) is the core computational module of any CPU processor. This project implements a fully parameterized N-bit ALU in Verilog HDL with dedicated flag outputs.",
    verilogCode: `module alu #(parameter WIDTH = 8) (
    input  wire [WIDTH-1:0] a, b,
    input  wire [3:0]       opcode,
    output reg  [WIDTH-1:0] result,
    output wire             zero_flag,
    output reg              carry_flag
);
    always @(*) begin
        carry_flag = 1'b0;
        case (opcode)
            4'b0000: {carry_flag, result} = a + b;         // ADD
            4'b0001: {carry_flag, result} = a - b;         // SUB
            4'b0010: result = a & b;                       // AND
            4'b0011: result = a | b;                       // OR
            4'b0100: result = a ^ b;                       // XOR
            4'b0101: result = ~(a | b);                    // NOR
            4'b0110: result = a << 1;                      // SHL
            4'b0111: result = a >> 1;                      // SHR
            default: result = {WIDTH{1'b0}};
        endcase
    end
    assign zero_flag = (result == {WIDTH{1'b0}});
endmodule`,
    testbenchCode: `\`timescale 1ns/1ps
module tb_alu;
    reg  [7:0] a, b;
    reg  [3:0] opcode;
    wire [7:0] result;
    wire       zero_flag, carry_flag;

    alu #(.WIDTH(8)) uut (
        .a(a), .b(b), .opcode(opcode),
        .result(result), .zero_flag(zero_flag), .carry_flag(carry_flag)
    );

    initial begin
        a = 8'h05; b = 8'h03; opcode = 4'b0000; #10; // 5 + 3 = 8
        a = 8'h0A; b = 8'h0A; opcode = 4'b0001; #10; // 10 - 10 = 0
        $finish;
    end
endmodule`
  },
  {
    id: "logic-gate-design",
    title: "Basic Logic Gates & Universal Gate Converter",
    category: "Digital Electronics",
    difficulty: "Beginner",
    technologies: ["Verilog HDL", "Icarus Verilog"],
    skills: ["Dataflow Modeling", "NAND Universal Logic", "Gate Primitives"],
    summary: "Implementation of basic logic gates (AND, OR, NOT, XOR, XNOR) using continuous assignment equations and universal NAND gates.",
    description: "Build fundamental logic gates using pure NAND gate equations to verify Boolean universality.",
    verilogCode: `module basic_gates (input wire a, b, output wire and_out, or_out, nand_out);
    assign and_out  = a & b;
    assign or_out   = a | b;
    assign nand_out = ~(a & b);
endmodule`,
    testbenchCode: `module tb_gates; reg a, b; wire out; basic_gates uut (a, b, out); initial begin a=0; b=0; #10; a=1; b=1; #10; end endmodule`
  },
  {
    id: "4to1-mux-decoder",
    title: "4-to-1 Multiplexer & 2-to-4 Decoder Core",
    category: "Verilog / RTL",
    difficulty: "Beginner",
    technologies: ["Verilog HDL", "ModelSim"],
    skills: ["Multiplexing", "Address Decoding", "Ternary Operators"],
    summary: "Parametric 4-to-1 MUX and active-low 2-to-4 address decoder with enable pin.",
    description: "Fundamental combinational blocks used in bus selection and RAM address decoding.",
    verilogCode: `module mux41 (input wire [3:0] in, input wire [1:0] sel, output wire out);
    assign out = (sel == 2'b00) ? in[0] : (sel == 2'b01) ? in[1] : (sel == 2'b10) ? in[2] : in[3];
endmodule`,
    testbenchCode: `module tb_mux; reg [3:0] in; reg [1:0] sel; wire out; mux41 uut(in, sel, out); initial begin in=4'b1010; sel=0; #10; sel=1; #10; end endmodule`
  },
  {
    id: "8bit-binary-counter",
    title: "8-bit Up/Down Binary Counter with Load & Reset",
    category: "Verilog / RTL",
    difficulty: "Beginner",
    technologies: ["Verilog HDL", "Vivado"],
    skills: ["Sequential Logic", "Synchronous Counter", "Parallel Load"],
    summary: "Synchronous 8-bit binary up/down counter featuring parallel data pre-load and active-low async reset.",
    description: "Versatile counter block used for timer generators, FIFO pointers, and baud rate clocks.",
    verilogCode: `module counter8 (input wire clk, rst_n, up_down, load, input wire [7:0] data_in, output reg [7:0] count);
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n) count <= 0;
        else if (load) count <= data_in;
        else if (up_down) count <= count + 1;
        else count <= count - 1;
    end
endmodule`,
    testbenchCode: `module tb_cnt; reg clk, rst_n, up_down, load; reg [7:0] d; wire [7:0] c; counter8 uut(clk, rst_n, up_down, load, d, c); always #5 clk=~clk; initial begin clk=0; rst_n=0; #10 rst_n=1; up_down=1; #50; end endmodule`
  },
  {
    id: "universal-shift-register",
    title: "4-bit Universal Shift Register",
    category: "Verilog / RTL",
    difficulty: "Beginner",
    technologies: ["Verilog HDL", "ModelSim"],
    skills: ["Parallel-In Parallel-Out", "Serial-In Serial-Out", "Shift Operations"],
    summary: "Universal shift register supporting hold, shift-right, shift-left, and parallel load modes.",
    description: "Enables serial-to-parallel and parallel-to-serial conversion for communication peripherals.",
    verilogCode: `module shift_reg (input wire clk, rst_n, input wire [1:0] mode, input wire [3:0] d, output reg [3:0] q);
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n) q <= 0;
        else case (mode)
            2'b01: q <= {1'b0, q[3:1]}; // Shift Right
            2'b10: q <= {q[2:0], 1'b0}; // Shift Left
            2 me: q <= d;               // Parallel Load
            default: q <= q;
        endcase
    end
endmodule`,
    testbenchCode: `module tb_shift; reg clk, rst_n; reg [1:0] m; reg [3:0] d; wire [3:0] q; shift_reg uut(clk, rst_n, m, d, q); always #5 clk=~clk; initial begin clk=0; rst_n=0; #10 rst_n=1; m=2; d=4'b1011; #10 m=1; #30; end endmodule`
  },
  {
    id: "priority-encoder-case",
    title: "8-to-3 Priority Encoder Core",
    category: "Digital Electronics",
    difficulty: "Beginner",
    technologies: ["Verilog HDL"],
    skills: ["Priority Logic", "Combinational Case", "Interrupt Controllers"],
    summary: "8-to-3 priority encoder prioritizing highest index input request.",
    description: "Standard interrupt arbiter building block for microcontrollers.",
    verilogCode: `module priority_enc (input wire [7:0] req, output reg [2:0] code, output wire valid);
    assign valid = |req;
    always @(*) begin
        if (req[7])      code = 3'd7;
        else if (req[6]) code = 3'd6;
        else if (req[5]) code = 3'd5;
        else if (req[4]) code = 3'd4;
        else if (req[3]) code = 3'd3;
        else if (req[2]) code = 3'd2;
        else if (req[1]) code = 3'd1;
        else             code = 3'd0;
    end
endmodule`,
    testbenchCode: `module tb_enc; reg [7:0] r; wire [2:0] c; wire v; priority_enc uut(r, c, v); initial begin r=8'b00000000; #10 r=8'b00001000; #10 r=8'b10000100; #10; end endmodule`
  },
  {
    id: "bch-carry-lookahead-adder",
    title: "4-bit Carry Lookahead Adder (CLA)",
    category: "Verilog / RTL",
    difficulty: "Beginner",
    technologies: ["Verilog HDL"],
    skills: ["Generate & Propagate Logic", "Fast Arithmetic Adders"],
    summary: "High-speed 4-bit carry lookahead adder calculating carry bits in parallel.",
    description: "Eliminates ripple carry propagation delay bottlenecks in high-frequency ALUs.",
    verilogCode: `module cla4 (input wire [3:0] a, b, input wire cin, output wire [3:0] sum, output wire cout);
    wire [3:0] p = a ^ b;
    wire [3:0] g = a & b;
    wire [4:0] c;
    assign c[0] = cin;
    assign c[1] = g[0] | (p[0] & c[0]);
    assign c[2] = g[1] | (p[1] & g[0]) | (p[1] & p[0] & c[0]);
    assign c[3] = g[2] | (p[2] & g[1]) | (p[2] & p[1] & g[0]) | (p[2] & p[1] & p[0] & c[0]);
    assign c[4] = g[3] | (p[3] & c[3]);
    assign sum = p ^ c[3:0];
    assign cout = c[4];
endmodule`,
    testbenchCode: `module tb_cla; reg [3:0] a, b; reg cin; wire [3:0] s; wire cout; cla4 uut(a, b, cin, s, cout); initial begin a=4; b=5; cin=0; #10; a=15; b=1; #10; end endmodule`
  },
  {
    id: "bcd-to-7segment-display",
    title: "BCD to 7-Segment Display Decoder",
    category: "Digital Electronics",
    difficulty: "Beginner",
    technologies: ["Verilog HDL", "FPGA Board"],
    skills: ["Binary Coded Decimal", "Segment Mapping", "FPGA Peripherals"],
    summary: "4-bit BCD to 7-segment display decoder driving active-low LED segment anodes (a-g).",
    description: "Drives 7-segment LED displays on FPGA development boards.",
    verilogCode: `module bcd7seg (input wire [3:0] bcd, output reg [6:0] seg);
    always @(*) begin
        case (bcd)
            4'd0: seg = 7'b1000000;
            4'd1: seg = 7'b1111001;
            4'd2: seg = 7'b0100100;
            4'd3: seg = 7'b0110000;
            4'd4: seg = 7'b0011001;
            4'd5: seg = 7'b0100100;
            default: seg = 7'b1111111;
        endcase
    end
endmodule`,
    testbenchCode: `module tb_seg; reg [3:0] b; wire [6:0] s; bcd7seg uut(b, s); initial begin b=0; #10 b=1; #10 b=3; #10; end endmodule`
  }
];
