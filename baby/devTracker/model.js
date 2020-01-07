/**
 * *****************Development tracker model
 * task
 * month (in which it has some possibility to happen)
 *
 */

const milestones = [
  // 1
  [
    { title: "Gazes at black-white objects", note: "#" },
    { title: "Follows face ", note: "#" },
    { title: "Discriminates mother's voice", note: "#" },
    { title: "Cries out of distress", note: "#" },
    { title: "Makes sounds other than crying ", note: "#" }
  ],
  // 2
  [
    {
      title: "Tries to steady head briefly when held",
      note: "#"
    },
    { title: "Holds hands together", note: "#" },
    { title: "Recognizes mother", note: "#" },
    {
      title: "Opens mouth at sight of breast or bottle",
      note: "#"
    }
  ],
  //   3
  [
    { title: "Rolls to side", note: "#" },
    { title: "Brings hands to mouth", note: "#" },
    { title: "Reaches for parent's face", note: "#" },
    {
      title: "Visually follows person who is moving across a room",
      note: "#"
    }
  ],
  //   4
  [
    { title: "Sits with trunk support", note: "#" },
    { title: "Rolls front to back", note: "#" },
    { title: "Briefly holds onto breast or bottle", note: "#" },
    { title: "Mouths objects", note: "#" },
    {
      title: "Smiles spontaneously at pleasurable sight/sound",
      note: "#"
    }
  ],
  // 5
  [
    { title: "Rolls back to front", note: "#" },
    { title: "Begins to respond to name", note: "#" },
    { title: "Holds hands together", note: "#" },
    { title: "Transfers objects: Handmouth-hand", note: "#" }
  ],
  // 6
  [
    { title: "Sits momentarily propped on hand", note: "#" },
    { title: "Feeds self crackers", note: "#" },
    { title: "Touches reflection and vocalizes", note: "#" },
    {
      title: "Stranger anxiety: Recognizes familiar versus unfamiliar people",
      note: "#"
    },
    { title: 'Stops momentarily to "no"', note: "#" }
  ],
  // 7
  [
    { title: "Sits without support (steady)", note: "#" },
    { title: "Refuses excess food ", note: "#" },
    { title: "Attends to music", note: "#" },
    { title: "Explores different aspects of a toy", note: "#" }
  ],
  // 8
  [
    { title: "Gets into sitting", note: "#" },
    { title: "Commando crawls", note: "#" },
    { title: "Attends to music", note: "#" },
    { title: "Pulls to sitting/kneeling", note: "#" },
    { title: "Holds own bottle", note: "#" }
  ],
  // 9
  [
    { title: "Stands on feet and hands", note: "#" },
    {
      title: "Crawls with all four limbs straightened",
      note: "#"
    },
    { title: "Bites, chews cookie", note: "#" },
    { title: "Uses sounds to get attention", note: "#" }
  ],
  // 10
  [
    { title: "Stands, one hand held", note: "#" },
    {
      title: "Walks, two hands held",
      note: "#"
    },
    { title: "Experiences fear", note: "#" },
    { title: "Enjoys peek-a-boo", note: "#" }
  ],
  // 11
  [
    { title: 'Stops activity when told "no"', note: "#" },
    { title: "Cooperates in dressing", note: "#" },
    { title: "Says first word", note: "#" },
    { title: "Vocalizes to songs", note: "#" }
  ],
  // 12
  [
    { title: "Points in order to get desired object", note: "#" },
    { title: "Cooperates in dressing", note: "#" },
    { title: "Independent steps", note: "#" },
    { title: "Shows objects to parent to share interest", note: "#" },
    { title: "Follows one-step command with gesture", note: "#" }
  ],
  // 13
  [
    { title: "Walks with arms high and out", note: "#" },
    { title: "Solitary play", note: "#" },
    { title: "Uses three words", note: "#" },
    { title: "Functional play", note: "#" }
  ],
  // 14
  [
    { title: "Stands without pulling up", note: "#" },
    { title: "Walks well", note: "#" },
    { title: "Imitates back-forth scribble", note: "#" }
  ],
  // 15
  [
    { title: "Gets object from another room upon demand", note: "#" },
    { title: "Attempts to brush own hair", note: "#" },
    { title: "Fusses to be changed", note: "#" },
    {
      title: "Shows empathy (eg, someone else cries, child looks sad)",
      note: "#"
    },
    { title: "Uses three to five words", note: "#" }
  ]
];

async function getMilestones(monthOfBirth) {
  const stages = [];
  milestones.map(async (mils, i) => {
    let month = i + 1;
    mils.map(async mil => {
      if (month >= monthOfBirth)
        stages.push({ month: month, past: false, ...mil });
      else stages.push({ month: month, past: true, ...mil });
    });
  });
  return { stages };
}

// async function main() {
//   const resutl = await getMilestones(6);
//   console.log(resutl);
//   console.log("hello");
// }
// // main();

module.exports = getMilestones;
