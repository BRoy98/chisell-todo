import { DBSchema, openDB } from "idb";

interface ChisellTodoDB extends DBSchema {
  boards: {
    value: {
      name: string;
    };
    key: number;
    indexes: { id: number };
  };
}

export const dbInstance = async () => {
  return openDB<ChisellTodoDB>("chisell_todo", 1, {
    upgrade(db, oldVersion, newVersion, transaction, event) {
      const store = db.createObjectStore("boards", {
        keyPath: "id",
        autoIncrement: true,
      });

      store.createIndex("id", "number");
    },
  });
};

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
