import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedback_list}>
      {options.map(option => {
        const optionName = option => {
          return `${option.charAt(0).toUpperCase()}${option.slice(1)}`;
        };
        return (
          <li key={option}>
            <button
              className={css.btn}
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {optionName(option)}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
