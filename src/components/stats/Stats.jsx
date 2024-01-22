import "./stats.scss";

const Stats = ({ toDoList }) => {
  const uncheckedTasks = toDoList.filter((task) => !task.checked);
  let countList = uncheckedTasks.length;
  return (
    <div className="stats">
      <p className="notify">
        {countList === 0
          ? "only losers have nothing to do"
          : `You have ${countList} items on your list`}
      </p>
    </div>
  );
};

export default Stats;
