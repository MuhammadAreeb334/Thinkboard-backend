export const getAllNotes = (req, res) => {
  res.status(200).send("You fetched 5 notes!");
};

export const createNote = (req, res) => {
  res.status(201).json({ message: "Note created sucessfully!" });
};

export const updateNote = (req, res) => {
  res.status(200).json({ message: "Note Updated successfully" });
};

export const deleteNote = (req, res) => {
  res.status(200).json({ message: "Note deleted successfully" });
};
