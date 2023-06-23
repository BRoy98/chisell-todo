import { DBSchema, openDB } from "idb";

interface ChisellTodoDB extends DBSchema {
  boards: {
    value: {
      name: string;
    };
    key: number;
    indexes: { id: number };
  };
  tasks: {
    value: {
      name: string;
      state: "PENDING" | "COMPLETE";
      boardId: number;
    };
    key: number;
    indexes: { id: number; boardId: number };
  };
}

export const dbInstance = async () => {
  return openDB<ChisellTodoDB>("chisell_todo", 1, {
    upgrade(db, oldVersion, newVersion, transaction, event) {
      const boards = db.createObjectStore("boards", {
        keyPath: "id",
        autoIncrement: true,
      });

      boards.createIndex("id", "number");

      const tasks = db.createObjectStore("tasks", {
        keyPath: "id",
        autoIncrement: true,
      });
      tasks.createIndex("id", "number");
      tasks.createIndex("boardId", "number");
    },
    blocked(currentVersion, blockedVersion, event) {
      console.log("====================================");
      console.log("DB BLocker", currentVersion, blockedVersion);
      console.log("====================================");
    },
    blocking(currentVersion, blockedVersion, event) {
      console.log("====================================");
      console.log("DB BLocking", currentVersion, blockedVersion);
      console.log("====================================");
    },
  });
};

export default dbInstance;
