const tasks = [
    {
      id: 1,
      name: "Water the plants",
      description: "All of the plants except for the succulents.",
      due_date: new Date("August 08, 2021 15:24:00")
    },
    {
      id: 2,
      name: "Fix bugs",
      description: "This one never ends, does it?",
      due_date: new Date("August 06, 2021 00:05:00")
    },
    {
      id: 3,
      name: "Go stargazing",
      description: "Make sure not to forget the DSLR camera and the tripod.",
      due_date: new Date("September 02, 2021 02:24:00")
    },
    {
      id: 4,
      name: "Workout",
      description: "3 reps of each exercise.",
      due_date: new Date("August 08, 2021 15:24:00")
    },
    {
      id: 5,
      name: "Order groceries",
      description:
        "There's plenty of eggs already.",
      due_date: new Date("August 12, 2021 10:10:00")
    },
    {
      id: 6,
      name: "Take the dog out for a walk",
      description: "",
      due_date: new Date("August 08, 2021 15:24:00")
    },
    {
      id: 7,
      name: "Client meeting",
      description: "All of the mockups need to be ready for presenting.",
      due_date: new Date("September 01, 2021 09:30:00")
    },
    {
      id: 8,
      name: "Doctor's appointment",
      description: "",
      due_date: new Date("October 02, 2021 11:15:00")
    }
  ];
  
  // making the data available to other files
  module.exports = { tasks };  