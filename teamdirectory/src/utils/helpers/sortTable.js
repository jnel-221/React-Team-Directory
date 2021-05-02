import React from "react";

// compiled with assistance from 'Creating Sortable Tables With React': https://www.smashingmagazine.com/2020/03/sortable-tables-react/

const useSortableData = (users, config = !null) => {
  const [sortConfig, setSortConfig] = React.useState(config);
  
  const sortedUsers = React.useMemo(() => {
    let sortableUsers = [...users];
    if (sortConfig !== null) {
      sortableUsers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) { 
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableUsers;
  }, [users, sortConfig]);

  const requestSort = key => {
    console.log("in sortTableJs helper func", key);
    console.log("sortConfig: ", sortConfig, "sortConfig.key: ", sortConfig.key, "sortConfig.direction: ", sortConfig.direction)
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      console.log("sortConfig: ", sortConfig, "sortConfig.key: ", sortConfig.key, "sortConfig.direction: ", sortConfig.direction)
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedUsers, requestSort };
};

export default useSortableData;
