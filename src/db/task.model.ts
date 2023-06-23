import dbInstance from ".";

const createTask = async (name: string, boardId: number) => {
  const db = await dbInstance();
  const board = await db.put("tasks", { name, boardId, state: "PENDING" });
  return { board };
};

const fetchTasks = async (boardId: number) => {
  const db = await dbInstance();
  const tasks = await db.getAll("tasks");
  return { tasks };
};

const completeTask = async (taskId: number) => {
  const db = await dbInstance();
  const task = await db.get("tasks", taskId);

  if (!task) return null;
  task.state = "COMPLETE";
  await db.put("tasks", task);
};

const deleteTask = async (taskId: number) => {
  const db = await dbInstance();
  const boards = await db.delete("tasks", taskId);
  return { boards };
};

const exports = { createTask, fetchTasks, completeTask, deleteTask };
export default exports;
