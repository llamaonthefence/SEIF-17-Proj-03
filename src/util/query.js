export const sortByAscending = (data, key) => {
  return data.sort((a, b) => {
    if (key === "fullName") {
      const fullNameA = `${a.firstName} ${a.lastName}`.toLowerCase();
      const fullNameB = `${b.firstName} ${b.lastName}`.toLowerCase();
      return fullNameA.localeCompare(fullNameB);
    } else {
      return a[key].localeCompare(b[key]);
    }
  });
};

export const sortByDescending = (data, key) => {
  return data.sort((a, b) => {
    if (key === "fullName") {
      const fullNameA = `${a.firstName} ${a.lastName}`.toLowerCase();
      const fullNameB = `${b.firstName} ${b.lastName}`.toLowerCase();
      return fullNameB.localeCompare(fullNameA);
    } else {
      return b[key].localeCompare(a[key]);
    }
  });
};

export const filterData = (data, filterKeys, filterValue) => {
  return data.filter((item) => {
    const searchTerm = filterValue.toLowerCase();

    return filterKeys.some((key) => {
      const itemValue = item[key].toLowerCase();
      return itemValue.includes(searchTerm);
    });
  });
};

export const searchProfiles = (data, searchTerm) => {
  return data.filter((item) => {
    const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
    const fullNameWithoutSpace = `${item.firstName}${item.lastName}`.toLowerCase();
    const search = searchTerm.trim().toLowerCase();

    return (
      fullName.includes(search) ||
      item.firstName.toLowerCase().includes(search) ||
      item.lastName.toLowerCase().includes(search) ||
      fullNameWithoutSpace.includes(search)
    );
  });
};
