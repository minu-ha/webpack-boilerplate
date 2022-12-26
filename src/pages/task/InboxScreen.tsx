import classNames from 'classnames/bind';
import React, { useEffect } from 'react';
import TaskList from 'pages/task/TaskList';
import { fetchTasks } from 'store/redux/taskSlice';
import { useAppDispatch, useAppSelector } from 'store/store';
import styles from './InboxScreen.module.scss';

const cx = classNames.bind(styles);

const InboxScreen = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector(state => state.taskBox);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (error) {
    return (
      <div className={cx('page-lists-show')}>
        <div className={cx('wrapper-message')}>
          <span className={cx('icon-face-sad')} />
          <div className={cx('title-message')}>Oh no!</div>
          <div className={cx('subtitle-message')}>Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className={cx('page-lists-show')}>
      <nav>
        <h1 className={cx('title-page')}>TASK-BOX</h1>
      </nav>
      <TaskList />
    </div>
  );
};
export default InboxScreen;
