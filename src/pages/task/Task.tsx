import React, { FC } from 'react';
import styles from './Task.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export interface TaskProps {
  task: {
    id?: string;
    title?: string;
    state?: string;
    updatedAt?: Date;
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
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span
          role={'presentation'}
          className="checkbox-custom"
          onClick={() => onArchiveTask?.(id)}
          id={`archiveTask-${id}`}
          aria-label={`archiveTask-${id}`}
        />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>
      <div
        role={'presentation'}
        className="actions"
        onClick={event => event.stopPropagation()}
      >
        {state !== 'TASK_ARCHIVED' && (
          <button onClick={() => onPinTask?.(id)}>
            <span
              className={`icon-star`}
              id={`pinTask-${id}`}
              aria-label={`pinTask-${id}`}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
