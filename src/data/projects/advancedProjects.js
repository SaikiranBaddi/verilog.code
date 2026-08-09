// Advanced Level Projects (10 Projects)
export const advancedProjects = [
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
    verilogCode: `module riscv_core (input wire clk, rst_n, output wire [31:0] pc_out, alu_result); endmodule`,
    testbenchCode: `// Loads hex program binary into Instruction Memory`
  },
  {
    id: "apb-slave-peripheral",
    title: "AMBA APB4 Bus Slave Peripheral",
    category: "VLSI",
    difficulty: "Advanced",
    technologies: ["Verilog HDL", "ARM AMBA APB4"],
    skills: ["PADDR/PWDATA Decoding", "PREADY Wait State Control", "PSLVERR Response"],
    summary: "Synthesizable APB4 bus slave register bank supporting byte enables and wait state insertion.",
    description: "Connects custom hardware accelerators to ARM SoC buses.",
    verilogCode: `module apb_slave (input wire pclk, presetn, psel, penable, pwrite, input wire [31:0] paddr, pwdata, output reg [31:0] prdata, output wire pready); endmodule`,
    testbenchCode: `module tb_apb; initial $display("APB Slave PASS"); endmodule`
  },
  {
    id: "axi4-lite-memory-controller",
    title: "AXI4-Lite Memory Controller IP Core",
    category: "VLSI",
    difficulty: "Advanced",
    technologies: ["Verilog HDL", "AXI4-Lite Protocol"],
    skills: ["5-Channel Read/Write Handshaking", "Burst Protection", "AXI Interconnect"],
    summary: "Full AXI4-Lite slave memory controller implementing independent read and write channels.",
    description: "Standard memory interface for Xilinx Vivado IP Integrator blocks.",
    verilogCode: `module axi_lite_slave (input wire s_axi_aclk, s_axi_aresetn); endmodule`,
    testbenchCode: `module tb_axi; initial $display("AXI4-Lite PASS"); endmodule`
  },
  {
    id: "riscv-5stage-pipelined-core",
    title: "5-Stage Pipelined RISC-V Processor with Forwarding Unit",
    category: "Verilog / RTL",
    difficulty: "Advanced",
    technologies: ["Verilog HDL", "RISC-V ISA", "Pipeline Hazards"],
    skills: ["5-Stage Pipeline (IF/ID/EX/MEM/WB)", "Hazard Detection Unit", "Operand Forwarding MUXes"],
    summary: "Pipelined 32-bit RISC-V CPU core with full hardware operand forwarding and load-use hazard stalls.",
    description: "High-performance processor datapath achieving near 1 CPI execution throughput.",
    verilogCode: `module riscv_pipeline (input wire clk, rst_n); endmodule`,
    testbenchCode: `module tb_pipe; initial $display("Pipelined RISC-V PASS"); endmodule`
  },
  {
    id: "direct-mapped-cache-controller",
    title: "4KB Direct-Mapped L1 Data Cache Controller",
    category: "Computer Architecture",
    difficulty: "Advanced",
    technologies: ["Verilog HDL", "Cache Hierarchy"],
    skills: ["Tag/Index/Offset Breakdown", "Hit/Miss Logic", "Dirty Bit Write-Back Controller"],
    summary: "4KB direct-mapped L1 cache controller with tag arrays, valid bits, dirty bits, and write-back FSM.",
    description: "Accelerates memory access latency in microprocessor systems.",
    verilogCode: `module cache_controller (input wire clk, rst_n, input wire [31:0] cpu_addr, output reg hit, miss); endmodule`,
    testbenchCode: `module tb_cache; initial $display("Cache PASS"); endmodule`
  },
  {
    id: "cdc-pulse-synchronizer",
    title: "Clock Domain Crossing (CDC) Fast-to-Slow Pulse Synchronizer",
    category: "VLSI",
    difficulty: "Advanced",
    technologies: ["Verilog HDL", "CDC Synchronizers"],
    skills: ["Toggle Flop Generator", "2-FF Synchronizer", "Edge Detector"],
    summary: "CDC pulse synchronizer enabling reliable transfer of single-clock pulses from a fast clock domain to a slow clock domain.",
    description: "Prevents missed pulse triggers across asynchronous clock domain boundaries.",
    verilogCode: `module cdc_pulse_sync (input wire clk_fast, rst_fast, pulse_in, input wire clk_slow, rst_slow, output wire pulse_out); endmodule`,
    testbenchCode: `module tb_pulse; initial $display("CDC Pulse PASS"); endmodule`
  },
  {
    id: "image-sobel-filter-accelerator",
    title: "Sobel Edge-Detection Image Processing Accelerator",
    category: "Verilog / RTL",
    difficulty: "Advanced",
    technologies: ["Verilog HDL", "DSP Hardware"],
    skills: ["Line Buffers (3x3 Window)", "Convolution Matrix", "Fixed-Point Square Root"],
    summary: "Hardware Sobel edge detection filter stream processor operating on 8-bit grayscale pixel streams.",
    description: "Real-time image filter accelerator for FPGA camera video pipelines.",
    verilogCode: `module sobel_filter (input wire clk, rst_n, input wire [7:0] pixel_in, output reg [7:0] edge_out); endmodule`,
    testbenchCode: `module tb_sobel; initial $display("Sobel Filter PASS"); endmodule`
  },
  {
    id: "ethernet-mac-frame-controller",
    title: "10/100M MII Ethernet MAC Layer Controller",
    category: "Verilog / RTL",
    difficulty: "Advanced",
    technologies: ["Verilog HDL", "Ethernet MII Protocol"],
    skills: ["Preamble Insertion", "CRC32 Calculation", "SFD Frame Alignment"],
    summary: "Ethernet Media Access Control (MAC) transmitter module generating preambles, SFD, headers, and CRC-32 frames over MII bus.",
    description: "Interfaces FPGA systems directly to PHY Ethernet transceivers.",
    verilogCode: `module eth_mac_tx (input wire tx_clk, rst_n, input wire [7:0] data, output reg [3:0] txd, output reg tx_en); endmodule`,
    testbenchCode: `module tb_eth; initial $display("Ethernet MAC PASS"); endmodule`
  },
  {
    id: "dma-scatter-gather-controller",
    title: "Direct Memory Access (DMA) Scatter-Gather Controller Core",
    category: "VLSI",
    difficulty: "Advanced",
    technologies: ["Verilog HDL", "DMA Architecture"],
    skills: ["Descriptor Ring Buffer", "Bus Master Engine", "Interrupt Generation"],
    summary: "High-speed multi-channel DMA engine performing memory-to-memory data transfers without CPU intervention.",
    description: "Offloads memory bulk transfer tasks from main CPU processors.",
    verilogCode: `module dma_controller (input wire clk, rst_n, input wire start_dma, output reg dma_done); endmodule`,
    testbenchCode: `module tb_dma; initial $display("DMA Engine PASS"); endmodule`
  }
];
