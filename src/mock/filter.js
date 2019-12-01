const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`
];

const filterCounter = {
  all(tasks) {
    return tasks.length;
  },
  overdue(tasks) {
    return tasks.
    filter((task) => task.dueDate instanceof Date && task.dueDate < Date.now()
    ).length;
  },
  today(tasks) {
    const dayToday = new Date();
    return tasks.
    filter((task) => task.dueDate instanceof Date &&
      task.dueDate.getDay() === dayToday.getDay() &&
      task.dueDate.getMonth() === dayToday.getMonth()
    ).length;
  },
  favorites(tasks) {
    return tasks.
    filter((task) => task.isFavorite
    ).length;
  },
  repeating(tasks) {
    return tasks.
    filter((task) => Object.values(task.repeatingDays).some(Boolean)
    ).length;
  },
  tags(tasks) {
    return tasks.
    filter((task) => task.tags.size > 0
    ).length;
  },
  archive(tasks) {
    return tasks.
    filter((task) => task.isArchive
    ).length;
  },
};

const generateFilters = (tasks) => {
  return filterNames.map((name) => {
    return {
      name,
      count: filterCounter[name](tasks)
    };
  });
};

export {generateFilters};
