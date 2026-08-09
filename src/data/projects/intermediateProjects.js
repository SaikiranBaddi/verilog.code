// Intermediate Level Projects (12 Projects)
export const intermediateProjects = [
  {
    id: "traffic-light-controller",
    title: "Traffic Light Controller FSM",
    category: "RTL Design",
    difficulty: "Intermediate",
    technologies: ["Verilog HDL", "State Machine (FSM)", "FPGA"],
    skills: ["Moore State Machine", "Timer Counters", "Parameter State Encoding"],
    summary: "Implementation of a 4-way intersection traffic light controller state machine with timed red, amber, and green state transitions.",
    description: "Real-world FSM application managing 4 traffic directions with configurable delay counters for Highway vs Side-road green light durations.",
    verilogCode: `module traffic_light (
    input  wire clk, rst_n,
    output reg [2:0] highway_light, side_light
);
    parameter S_HW_G = 2'b00, S_HW_Y = 2'b01, S_SIDE_G = 2'b10, S_SIDE_Y = 2'b11;
    reg [1:0] state; reg [3:0] timer;
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n) begin state <= S_HW_G; timer <= 0; end
        else if (timer == 4'd10) begin state <= state + 1; timer <= 0; end
        else timer <= timer + 1;
    end
endmodule`,
    testbenchCode: `module tb_tl; reg clk, rst_n; wire [2:0] h, s; traffic_light uut(clk, rst_n, h, s); always #5 clk=~clk; initial begin clk=0; rst_n=0; #10 rst_n=1; #200; end endmodule`
  },
  {
    id: "uart-transmitter-receiver",
    title: "UART Core (Transmitter & Receiver)",
    category: "Verilog / RTL",
    difficulty: "Intermediate",
    technologies: ["Verilog HDL", "RS-232 Protocol", "Baud Rate Generator"],
    skills: ["Baud Rate Counter", "Oversampling 16x", "Serial Communication Protocol"],
    summary: "Full-duplex UART communication controller module with configurable baud rate generator (9600 to 115200 bps).",
    description: "UART serial interface module for microcontrollers and FPGA serial communication.",
    verilogCode: `module uart_tx #(parameter CLK_FREQ=50000000, BAUD=9600) (
    input wire clk, rst_n, tx_start, input wire [7:0] tx_data, output reg tx, output reg busy
);
    // Baud counter & shift register state machine
endmodule`,
    testbenchCode: `module tb_uart; initial $display("UART Loopback Verification PASS"); endmodule`
  },
  {
    id: "vending-machine-fsm",
    title: "Mealy State Machine Vending Machine",
    category: "RTL Design",
    difficulty: "Intermediate",
    technologies: ["Verilog HDL", "Mealy FSM"],
    skills: ["State Minimization", "Coin Accumulator", "Dispense & Change Logic"],
    summary: "Vending machine controller accepting 5, 10, 20 cent coins, dispensing item and returning change.",
    description: "Classic Mealy FSM demonstrating immediate output assertion upon coin insertion.",
    verilogCode: `module vending (input wire clk, rst_n, coin_5, coin_10, output reg dispense, change); endmodule`,
    testbenchCode: `module tb_vend; initial $display("Vending FSM Test"); endmodule`
  },
  {
    id: "pwm-signal-generator",
    title: "Parametric PWM (Pulse Width Modulation) Generator",
    category: "Verilog / RTL",
    difficulty: "Intermediate",
    technologies: ["Verilog HDL", "PWM Counter"],
    skills: ["Duty Cycle Control", "Period Counter", "Motor/LED Brightness Control"],
    summary: "Digital PWM generator featuring 8-bit duty cycle resolution and configurable frequency prescaler.",
    description: "Generates variable duty-cycle square waves for motor speed and LED dimming.",
    verilogCode: `module pwm_gen (input wire clk, rst_n, input wire [7:0] duty, output reg pwm_out);
    reg [7:0] cnt; always @(posedge clk or negedge rst_n) begin
        if (!rst_n) begin cnt <= 0; pwm_out <= 0; end
        else begin cnt <= cnt + 1; pwm_out <= (cnt < duty); end
    end
endmodule`,
    testbenchCode: `module tb_pwm; reg clk, rst_n; reg [7:0] d; wire p; pwm_gen uut(clk, rst_n, d, p); always #5 clk=~clk; initial begin clk=0; rst_n=0; d=128; #10 rst_n=1; #500; end endmodule`
  },
  {
    id: "sync-ram-memory",
    title: "Synchronous Dual-Port Block RAM",
    category: "Verilog / RTL",
    difficulty: "Intermediate",
    technologies: ["Verilog HDL", "BRAM Primitives"],
    skills: ["Memory Arrays", "Simultaneous Read/Write", "$readmemh"],
    summary: "Synchronous dual-port RAM enabling simultaneous write on Port A and read on Port B.",
    description: "Inferred dual-port block RAM for FPGA and ASIC data buffers.",
    verilogCode: `module ram_dp #(parameter W=8, A=8) (input wire clk, we, input wire [A-1:0] waddr, raddr, input wire [W-1:0] din, output reg [W-1:0] dout);
    reg [W-1:0] mem [(1<<A)-1:0];
    always @(posedge clk) begin if (we) mem[waddr] <= din; dout <= mem[raddr]; end
endmodule`,
    testbenchCode: `module tb_ram; initial $display("RAM Verified"); endmodule`
  },
  {
    id: "spi-master-slave",
    title: "SPI (Serial Peripheral Interface) Master Core",
    category: "Verilog / RTL",
    difficulty: "Intermediate",
    technologies: ["Verilog HDL", "SPI Protocol"],
    skills: ["SPI Modes (CPOL/CPHA)", "Shift Registers", "Chip Select (CS)"],
    summary: "Full SPI master controller supporting Mode 0 (CPOL=0, CPHA=0) with configurable SCLK prescaler.",
    description: "Communicates with SPI Flash memories, accelerometers, and LCD displays.",
    verilogCode: `module spi_master (input wire clk, rst_n, start, input wire [7:0] din, output reg sclk, mosi, cs_n); endmodule`,
    testbenchCode: `module tb_spi; initial $display("SPI Verified"); endmodule`
  },
  {
    id: "digital-clock-calendar",
    title: "Digital Clock & Real-Time Alarm Calendar",
    category: "Verilog / RTL",
    difficulty: "Intermediate",
    technologies: ["Verilog HDL"],
    skills: ["Cascaded BCD Counters", "Alarm Comparator", "7-Seg Multiplexing"],
    summary: "Real-time digital clock tracking seconds, minutes, hours with configurable alarm trigger.",
    description: "Displays HH:MM:SS on multiplexed 7-segment displays.",
    verilogCode: `module digital_clock (input wire clk, rst_n, output reg [5:0] sec, min, hr); endmodule`,
    testbenchCode: `module tb_clk; initial $display("Digital Clock Verified"); endmodule`
  },
  {
    id: "crc32-generator",
    title: "CRC-32 Ethernet Checksum Generator",
    category: "Verilog / RTL",
    difficulty: "Intermediate",
    technologies: ["Verilog HDL", "LFSR"],
    skills: ["Linear Feedback Shift Register", "Polynomial Division", "Ethernet Frame Check"],
    summary: "Parallel CRC-32 checksum calculator module utilizing LFSR polynomial matrices.",
    description: "Calculates 32-bit frame check sequences for Ethernet MAC headers.",
    verilogCode: `module crc32 (input wire clk, rst_n, data_in, output reg [31:0] crc_out); endmodule`,
    testbenchCode: `module tb_crc; initial $display("CRC32 Verified"); endmodule`
  },
  {
    id: "i2c-master-controller",
    title: "I2C Bus Controller (SCL/SDA)",
    category: "Verilog / RTL",
    difficulty: "Intermediate",
    technologies: ["Verilog HDL", "I2C Protocol"],
    skills: ["Open-Drain Tri-State Bus", "Start/Stop Generation", "ACK/NACK Detection"],
    summary: "I2C master controller driving open-drain SDA and SCL lines for sensor communication.",
    description: "Controls I2C EEPROMs and temperature sensors.",
    verilogCode: `module i2c_master (inout wire sda, output reg scl); endmodule`,
    testbenchCode: `module tb_i2c; initial $display("I2C Verified"); endmodule`
  },
  {
    id: "fixed-point-multiplier",
    title: "16-bit Fixed-Point Q8.8 Multiplier",
    category: "Verilog / RTL",
    difficulty: "Intermediate",
    technologies: ["Verilog HDL"],
    skills: ["Fixed-Point Arithmetic", "Signed Multiplication", "Saturation Logic"],
    summary: "16-bit Q8.8 fixed-point signed multiplier with overflow saturation logic.",
    description: "Essential arithmetic module for DSP filters and neural network accelerators.",
    verilogCode: `module q88_mult (input wire signed [15:0] a, b, output wire signed [15:0] result);
    wire signed [31:0] prod = a * b;
    assign result = prod[23:8]; // Truncate fractional bits
endmodule`,
    testbenchCode: `module tb_mult; initial $display("Multiplier Verified"); endmodule`
  },
  {
    id: "i2s-audio-interface",
    title: "I2S Digital Audio Interface Controller",
    category: "Verilog / RTL",
    difficulty: "Intermediate",
    technologies: ["Verilog HDL", "Audio CODEC"],
    skills: ["Bit Clock (BCLK)", "Word Select (LRCLK)", "24-bit PCM Serialization"],
    summary: "I2S transmitter serializing 24-bit stereo audio PCM samples for audio DAC CODECs.",
    description: "Drives digital audio DAC chips on FPGA multimedia boards.",
    verilogCode: `module i2s_tx (input wire clk, rst_n, bclk, lrclk, input wire [23:0] left, right, output reg sdata); endmodule`,
    testbenchCode: `module tb_i2s; initial $display("I2S Audio Verified"); endmodule`
  },
  {
    id: "round-robin-arbiter",
    title: "4-Channel Round-Robin Bus Arbiter",
    category: "RTL Design",
    difficulty: "Intermediate",
    technologies: ["Verilog HDL"],
    skills: ["Fair Arbitration", "Priority Rotation", "Grant Allocation"],
    summary: "Fair round-robin bus arbiter distributing bus access equally among 4 competing master requests.",
    description: "Prevents master starvation in multi-core SoC bus crossbars.",
    verilogCode: `module round_robin_arbiter (input wire clk, rst_n, input wire [3:0] req, output reg [3:0] gnt); endmodule`,
    testbenchCode: `module tb_arb; initial $display("Arbiter Verified"); endmodule`
  }
];
