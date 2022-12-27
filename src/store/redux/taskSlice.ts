import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: string;
  title: string;
  state: string;
  completed: boolean;
}

export type OptionalTask = Partial<Task>;

export interface TaskBoxState {
  tasks: OptionalTask[];
  status: string;
  error: string | null;
}

const defaultTasks: OptionalTask[] = [
  {
    id: '1',
    title: 'Something',
    state: 'TASK_INBOX',
  },
  {
    id: '2',
    title: 'Something more',
    state: 'TASK_INBOX',
  },
  {
    id: '3',
    title: 'Something else',
    state: 'TASK_INBOX',
  },
  {
    id: '4',
    title: 'Something again',
    state: 'TASK_INBOX',
  },
];

const TaskBoxData: TaskBoxState = {
  tasks: defaultTasks,
  status: 'idle',
  error: null,
};

export const fetchTasks = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?userId=1'
  );
  const data = await response.json();
  return data.map((task: OptionalTask) => ({
    id: `${task.id}`,
    title: task.title,
    state: task.completed ? 'TASK_ARCHIVED' : 'TASK_INBOX',
  }));
});

export const TasksSlice = createSlice({
  name: 'taskBox',
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (
      state,
      action: PayloadAction<{ id: string; newTaskState: string }>
    ) => {
      const { id, newTaskState } = action.payload;
      const task = state.tasks.findIndex(task => task.id === id);
      if (task >= 0) {
        state.tasks[task].state = newTaskState;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, state => {
        state.status = 'loading';
        state.error = null;
        state.tasks = [];
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, state => {
        state.status = 'failed';
        state.error = 'Something went wrong';
        state.tasks = [];
      });
  },
});

export const { updateTaskState } = TasksSlice.actions;
