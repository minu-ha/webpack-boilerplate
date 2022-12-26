import React, { FC } from 'react';
import styles from './Task.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export interface TaskProps {
  task: {
    id?: string;
    title?: string;
    state?: string;
  };
  onArchiveTask?: (id: string | undefined) => void;
  onPinTask?: (id: string | undefined) => void;
}

const Task: FC<TaskProps> = props => {
  const {
    task: { id, title, state },
    onArchiveTask,
    onPinTask,
  } = props;

  return (
    <div className={cx('list-item')}>
      <label
        className={cx('checkbox')}
        htmlFor="checked"
        aria-label={`archiveTask-${id}`}
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          aria-label={`archiveTask-${id}`}
        />
        <span role={'presentation'} onClick={() => onArchiveTask?.(id)} />
      </label>
      <label htmlFor="title" className={cx('title')}>
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>
      {state !== 'TASK_ARCHIVED' && (
        <button
          className={cx('pin-button')}
          onClick={() => onPinTask?.(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={cx('icon-star')} />
        </button>
      )}
    </div>
  );
};

export default Task;
