import classNames from 'classnames/bind';
import Task from 'pages/task/Task';
import React from 'react';
import { updateTaskState } from 'store/redux/taskSlice';
import { useAppDispatch, useAppSelector } from 'store/store';
import styles from './TaskList.module.scss';

const cx = classNames.bind(styles);

const TaskList = () => {
  const tasks = useAppSelector(state => {
    const tasksInOrder = [
      ...state.taskBox.tasks.filter(task => task.state === 'TASK_PINNED'),
      ...state.taskBox.tasks.filter(task => task.state !== 'TASK_PINNED'),
    ];
    return tasksInOrder.filter(
      task => task.state === 'TASK_INBOX' || task.state === 'TASK_PINNED'
    );
  });

  const { status } = useAppSelector(state => state.taskBox);
  const dispatch = useAppDispatch();

  const pinTask = (value: string) => {
    dispatch(updateTaskState({ id: value, newTaskState: 'TASK_PINNED' }));
  };
  const archiveTask = (value: string) => {
    dispatch(updateTaskState({ id: value, newTaskState: 'TASK_ARCHIVED' }));
  };

  const LoadingRow = (
    <div className={cx('loading-item')}>
      <span className={cx('glow-checkbox')} />
      <span className={cx('glow-text')}>
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (status === 'loading') {
    return (
      <div className={cx('list-items')} data-testid="loading" key={'loading'}>
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
      <div className={cx('list-items')} key={'empty'} data-testid="empty">
        <div className={cx('wrapper-message')}>
          <span className={cx('icon-check')} />
          <div className={cx('title-message')}>You have no tasks</div>
          <div className={cx('subtitle-message')}>Sit back and relax</div>
        </div>
      </div>
    );
  }

  return (
    <div className={cx('list-items')} data-testid="success" key={'success'}>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onPinTask={task => pinTask(task as string)}
          onArchiveTask={task => archiveTask(task as string)}
        />
      ))}
    </div>
  );
};
export default TaskList;
