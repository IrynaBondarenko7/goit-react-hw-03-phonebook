import css from './Statistic.module.css';
export const Statistic = ({ result, options, total, positivePercentage }) => {
  return (
    <>
      <p className={css.stat_title}>Statistic</p>
      <ul className={css.stat_list}>
        {options.map(option => {
          const optionName = option => {
            return `${option.charAt(0).toUpperCase()}${option.slice(1)}`;
          };
          return (
            <li key={option}>
              <p className={css.stat_item_text}>
                {optionName(option)} :
                <span className={css.stat_result}>{result[option]}</span>
              </p>
            </li>
          );
        })}
      </ul>
      <p className={css.total_result}>
        Total <span className={css.stat_result}>{total}</span>
      </p>
      <p className={css.positive_result}>
        Positive feedback :
        <span className={css.stat_result}>{positivePercentage}%</span>
      </p>
    </>
  );
};
