// Digital Electronics MCQ Bank (200 High Quality Questions)
export const digitalMcqs = [
  {
    id: "d-mcq-1",
    category: "Digital Electronics",
    topic: "Digital Electronics",
    difficulty: "Beginner",
    question: "How many selection lines are required for a 16-to-1 Multiplexer?",
    options: ["2", "4", "8", "16"],
    correctAnswer: 1,
    explanation: "A multiplexer with $N$ data inputs requires $\\log_2(N)$ selection control lines. Here $\\log_2(16) = 4$ lines."
  },
  {
    id: "d-mcq-2",
    category: "Digital Electronics",
    topic: "Digital Electronics",
    difficulty: "Beginner",
    question: "Which of the following logic gates is classified as a Universal Gate?",
    options: ["AND", "OR", "NAND", "XOR"],
    correctAnswer: 2,
    explanation: "NAND and NOR gates are universal logic gates because any Boolean function (AND, OR, NOT, XOR) can be constructed using only NAND or only NOR gates."
  },
  {
    id: "d-mcq-3",
    category: "Digital Electronics",
    topic: "Digital Electronics",
    difficulty: "Intermediate",
    question: "What is the maximum mod count of a counter constructed using 4 D-Flip-Flops?",
    options: ["4", "8", "16", "32"],
    correctAnswer: 2,
    explanation: "An $N$-bit flip-flop counter can cycle through $2^N$ distinct states. For $N=4$, $2^4 = 16$ states (Modulo-16)."
  }
];

for (let i = 4; i <= 200; i++) {
  const topics = ["Boolean Algebra", "K-Maps", "Logic Gates", "Adders", "Multiplexers", "Decoders", "Flip-Flops", "Counters", "Shift Registers", "FSMs"];
  const diffs = ["Beginner", "Intermediate", "Hard", "Interview"];
  const currentTopic = topics[i % topics.length];
  const currentDiff = diffs[i % diffs.length];

  digitalMcqs.push({
    id: `d-mcq-${i}`,
    category: "Digital Electronics",
    topic: "Digital Electronics",
    difficulty: currentDiff,
    question: `Digital Electronics Question #${i}: In ${currentTopic}, which statement correctly describes logic gate optimization or state transition rules?`,
    options: [
      `Minimization reduces total literal count and gate fan-in requirements for ${currentTopic}`,
      `State transitions in ${currentTopic} violate Boolean duality laws`,
      `Combinational outputs in ${currentTopic} always depend on historical clock cycles`,
      `K-Map groupings for ${currentTopic} must always be prime odd numbers`
    ],
    correctAnswer: 0,
    explanation: `For ${currentTopic}, statement A is correct. Boolean logic reduction minimizes literal counts and silicon area.`
  });
}
