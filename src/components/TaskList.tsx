import React, { FC } from 'react';

import Task, { TaskProps } from 'components/Task';

interface TaskListProps extends TaskProps {
  loading?: boolean;
  tasks: TaskProps[];
}

const TaskList: FC<TaskListProps> = props => {
  const { loading = false, tasks, onPinTask, onArchiveTask } = props;

  const events = { onPinTask, onArchiveTask };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items" data-testid="loading" key={'loading'}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items" key={'empty'} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter(t => t.task.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.task.state !== 'TASK_PINNED'),
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <Task key={task.task.id} task={task.task} {...events} />
      ))}
    </div>
  );
};
export default TaskList;
