import dbInstance from ".";

const createBoard = async (name: string) => {
  const db = await dbInstance();
  const board = await db.put("boards", { name });
  return { board };
};

const fetchBoards = async () => {
  const db = await dbInstance();
  const boards = await db.getAll("boards");
  return { boards };
};

const deleteBoard = async (id: number) => {
  const db = await dbInstance();
  const boards = await db.delete("boards", id);
  return { boards };
};

const exports = { createBoard, fetchBoards, deleteBoard };
export default exports;
