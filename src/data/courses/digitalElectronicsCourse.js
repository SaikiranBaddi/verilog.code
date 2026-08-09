// Digital Electronics Fundamentals Course Data
export const digitalElectronicsCourse = {
  id: "digital-electronics",
  title: "Digital Electronics & Logic Design",
  category: "VLSI Foundation",
  level: "Beginner",
  duration: "16 Hours",
  rating: 4.90,
  description: "Master digital logic design from ground up: Number systems, Boolean algebra simplification, Karnaugh Maps (K-Maps), combinational logic (Adders, MUX, Decoders), sequential logic (SR, JK, D, T Flip-Flops), counters, shift registers, and finite state machines.",
  learningOutcomes: [
    "Convert between Binary, Octal, Decimal, Hexadecimal, and Two's Complement signed formats",
    "Simplify complex Boolean functions using De Morgan's laws and 2/3/4-variable Karnaugh Maps (K-Maps)",
    "Design combinational logic: Half Adder, Full Adder, Look-Ahead Carry Adder, Subtractor, MUX, Demux, Encoders, Decoders",
    "Analyze sequential logic: Flip-Flop excitation tables, Setup/Hold times, Metastability",
    "Construct Synchronous/Asynchronous Counters, Ring Counters, and Johnson Counters",
    "Design Finite State Machines (FSM) with State Diagrams, State Tables, and State Minimization"
  ],
  modules: [
    {
      id: "dig-mod-1",
      title: "Module 1: Number Systems & Boolean Algebra",
      duration: "50 min",
      content: {
        summary: "Binary, Hexadecimal, Two's complement representation, Boolean logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR), and De Morgan's Theorems.",
        sections: [
          { type: "heading", text: "1. Two's Complement Arithmetic" },
          { type: "paragraph", text: "Two's complement is the standard binary representation for signed integers in digital systems. To negate an N-bit binary number, invert all bits (1's complement) and add 1." }
        ],
        revisionPoints: ["NAND and NOR gates are universal logic gates.", "Two's complement of 8'b00000101 (+5) is 8'b11111011 (-5)."]
      }
    },
    {
      id: "dig-mod-2",
      title: "Module 2: Karnaugh Map (K-Map) Optimization",
      duration: "60 min",
      content: {
        summary: "Gray code cell indexing, forming 2, 4, 8 sub-cubes, prime implicants, essential prime implicants, and Don't Care conditions.",
        sections: [
          { type: "heading", text: "1. K-Map Grouping Rules" },
          { type: "important", title: "K-Map Rules", text: "• Adjacent cells differ by only 1 bit (Gray Code: 00, 01, 11, 10).\n• Groups must be rectangular powers of two ($2^n = 1, 2, 4, 8, 16$).\n• Larger groups eliminate more variables, yielding minimal Sum-of-Products (SOP)." }
        ],
        revisionPoints: ["Group sizes must be powers of 2.", "Don't care terms ('X') can be grouped with 1s to enlarge sub-cubes."]
      }
    }
  ]
};
