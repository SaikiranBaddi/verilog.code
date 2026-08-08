export const projectsData = [
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
    input  wire [WIDTH-1:0] a,
    input  wire [WIDTH-1:0] b,
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
        a = 8'h0A; b = 8'h0A; opcode = 4'b0001; #10; // 10 - 10 = 0 (Zero flag high)
        $finish;
    end
endmodule`
  },
  {
    id: "traffic-light-controller",
    title: "Traffic Light Controller FSM",
    category: "RTL Design",
    difficulty: "Beginner",
    technologies: ["Verilog HDL", "State Machine (FSM)", "FPGA"],
    skills: ["Moore State Machine", "Timer Counters", "Parameter State Encoding"],
    summary: "Implementation of a 4-way intersection traffic light controller state machine with timed red, amber, and green state transitions.",
    description: "Real-world FSM application managing 4 traffic directions with configurable delay counters for Highway vs Side-road green light durations.",
    verilogCode: `module traffic_light (
    input  wire clk,
    input  wire rst_n,
    output reg [2:0] highway_light, // Red, Yellow, Green
    output reg [2:0] side_light
);
    // State Encoding
    parameter S_HW_GREEN  = 2'b00,
              S_HW_YELLOW = 2'b01,
              S_SIDE_GREEN = 2'b10,
              S_SIDE_YELLOW= 2'b11;

    reg [1:0] state, next_state;
    reg [3:0] timer;

    always @(posedge clk or negedge rst_n) begin
        if (!rst_n) begin
            state <= S_HW_GREEN;
            timer <= 0;
        end else begin
            if (timer == 4'd10) begin
                state <= next_state;
                timer <= 0;
            end else begin
                timer <= timer + 1;
            end
        end
    end
endmodule`,
    testbenchCode: `// Testbench drives clock and observes state transitions`
  },
  {
    id: "uart-transmitter-receiver",
    title: "UART (Universal Asynchronous Receiver-Transmitter) Core",
    category: "Verilog / RTL",
    difficulty: "Intermediate",
    technologies: ["Verilog HDL", "RS-232 Protocol", "Baud Rate Generator"],
    skills: ["Baud Rate Counter", "Oversampling 16x", "Serial Communication Protocol", "Start/Stop Bit Framing"],
    summary: "Complete full-duplex UART communication controller module with configurable baud rate generator (9600 to 115200 bps).",
    description: "UART is the standard serial communication protocol used in embedded systems and FPGAs to communicate with PC microcontrollers. This project features independent RX and TX modules driven by a baud rate divider.",
    verilogCode: `// UART Transmitter Code
module uart_tx #(parameter CLK_FREQ = 50000000, BAUD = 9600) (
    input  wire       clk,
    input  wire       rst_n,
    input  wire       tx_start,
    input  wire [7:0] tx_data,
    output reg        tx,
    output wire       tx_busy
);
    // Baud clock tick generation logic & shift register
endmodule`,
    testbenchCode: `// Loopback testbench connecting UART TX directly to RX`
  },
  {
    id: "async-fifo",
    title: "Asynchronous Dual-Clock FIFO Buffer",
    category: "VLSI",
    difficulty: "Advanced",
    technologies: ["Verilog HDL", "Clock Domain Crossing (CDC)", "Gray Code"],
    skills: ["Dual Clock Domains", "Gray Code Pointer Converters", "2-Flip-Flop Synchronizers", "Full/Empty Logic"],
    summary: "High-performance asynchronous FIFO buffer for safe data transfer between independent write and read clock domains.",
    description: "One of the most essential IP blocks in System-on-Chip (SoC) design. Transfers data safely across clock boundaries using Gray code pointer synchronization.",
    verilogCode: `module async_fifo #(parameter DSIZE = 8, ASIZE = 4) (
    input  wire             wclk, wrst_n, winc,
    input  wire [DSIZE-1:0] wdata,
    input  wire             rclk, rrst_n, rinc,
    output wire [DSIZE-1:0] rdata,
    output wire             wfull, rempty
);
    // Dual port RAM + Gray code pointers + CDC synchronizers
endmodule`,
    testbenchCode: `// Drives asynchronous write clock (100MHz) and read clock (40MHz)`
  },
  {
    id: "riscv-32bit-core",
    title: "32-bit RISC-V Single-Cycle Processor Core",
    category: "Verilog / RTL",
    difficulty: "Advanced",
    technologies: ["SystemVerilog / Verilog", "RISC-V RV32I ISA", "GTKWave / Vivado"],
    skills: ["Instruction Fetch & Decode", "Register File (32x32)", "Control Unit", "Data Memory & Program Counter"],
    summary: "Implementation of an open-source RV32I RISC-V CPU pipeline processing instructions like ADD, SUB, LW, SW, BEQ, and JAL.",
    description: "Build your own CPU! Executes standard RISC-V assembly binaries with an integrated memory decoder and 32 general-purpose 32-bit registers.",
    verilogCode: `// Single Cycle RISC-V Core Top Level
module riscv_core (
    input  wire clk,
    input  wire rst_n,
    output wire [31:0] pc_out,
    output wire [31:0] alu_result
);
    // PC, Instruction Memory, RegFile, Control Unit, ALU, Data Memory
endmodule`,
    testbenchCode: `// Loads hex program binary into Instruction Memory`
  }
];
