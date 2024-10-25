export const sortProjects = (projects) => {
  return projects.slice().sort((a, b) => a.title.localeCompare(b.title));
};

export const sortTags = (tags) => {
  return tags.slice().sort((a, b) => a.localeCompare(b));
};
