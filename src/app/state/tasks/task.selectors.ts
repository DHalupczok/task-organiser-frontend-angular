import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';

export const selectTasks = (state: AppState) => state.tasks;
export const selectAllTasks = createSelector(
  selectTasks,
  (state: TaskState) => state.tasks
);

export const selectTasksError = createSelector(
  selectTasks,
  (state: TaskState) => state.error
);
export const selectTasksStatus = createSelector(
  selectTasks,
  (state: TaskState) => state.status
);
export const selectChosenRepeatability = createSelector(
  selectTasks,
  state => state.selectedRepeatability
);

export const selectAllTasksByRepeatability = createSelector(
  selectAllTasks,
  selectChosenRepeatability,
  (tasks, repeatability) =>
    tasks.filter(task => task.repeatability === repeatability)
);
export const selectTasksToBeDoneByRepeatability = createSelector(
  selectAllTasksByRepeatability,
  tasks => tasks.filter(task => !task.isDone)
);
export const selectTasksToBeDoneQuantityByRepeatability = createSelector(
  selectTasksToBeDoneByRepeatability,
  tasks => tasks.length.toString()
);
export const selectTasksDoneByRepeatability = createSelector(
  selectAllTasksByRepeatability,
  tasks => tasks.filter(task => task.isDone)
);
export const selectTasksDoneQuantityByRepeatability = createSelector(
  selectTasksDoneByRepeatability,
  tasks => tasks.length.toString()
);

export const selectAllUrgentTasks = createSelector(selectAllTasks, tasks => {
  const tomorrow = new Date(new Date().valueOf() + 1000 * 60 * 60 * 24);
  const tomorrowMidnight = new Date(
    tomorrow.getFullYear(),
    tomorrow.getMonth(),
    tomorrow.getDate()
  );
  return tasks.filter(task => task.stopDate <= tomorrowMidnight);
});
