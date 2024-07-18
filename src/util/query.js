import Fuse from 'fuse.js';

export const sortBy = (data, key, order = 'asc') => {
  return data.sort((a, b) => {
    const valueA = key === 'fullName' ? `${a.firstName} ${a.lastName}`.toLowerCase() : a[key].toLowerCase();
    const valueB = key === 'fullName' ? `${b.firstName} ${b.lastName}`.toLowerCase() : b[key].toLowerCase();
    
    if (order === 'asc') {
      return valueA.localeCompare(valueB);
    } else {
      return valueB.localeCompare(valueA);
    }
  });
};

export const filterData = (data, filterKeys, filterValue) => {
  const searchTerm = filterValue.toLowerCase();

  return data.filter((item) => {
    return filterKeys.some((key) => {
      const itemValue = item[key].toLowerCase();
      return itemValue.includes(searchTerm);
    });
  });
};

export const searchItems = (data, searchTerm, keys) => {
  const fuse = new Fuse(data, {
    keys: keys.map((key) => (key === "fullName" ? { name: 'fullName', getFn: (item) => `${item.firstName} ${item.lastName}` } : key)),
    includeScore: true,
    threshold: 0.4, 
  });

  const result = fuse.search(searchTerm.trim());
  return result.map((res) => res.item);
};
