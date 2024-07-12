import { useState, useEffect } from "react";
import { ProfileFakeData } from "../components";

const useFakeApi = () => {
  const [datas, setDatas] = useState(ProfileFakeData);
  const [filter, setFilter] = useState("");
  const [filterField, setFilterField] = useState(null);
  const [sortOption, setSortOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Function to simulate sorting data
  const sortData = (data, option) => {
    let sortedData = [...data];
    switch (option) {
      case "name-asc":
        sortedData.sort((a, b) => {
          const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
          const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
          return nameA.localeCompare(nameB);
        });
        break;
      case "name-desc":
        sortedData.sort((a, b) => {
          const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
          const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
          return nameB.localeCompare(nameA);
        });
        break;
      case "course-asc":
        sortedData.sort((a, b) => a.course.localeCompare(b.course));
        break;
      case "course-desc":
        sortedData.sort((a, b) => b.course.localeCompare(a.course));
        break;
      case "specialist-asc":
        sortedData.sort((a, b) =>
          a.specialist.toLowerCase().localeCompare(b.specialist.toLowerCase())
        );
        break;
      case "specialist-desc":
        sortedData.sort((a, b) =>
          b.specialist.toLowerCase().localeCompare(a.specialist.toLowerCase())
        );
        break;
      case "year-asc":
        sortedData.sort((a, b) => a.year - b.year);
        break;
      case "year-desc":
        sortedData.sort((a, b) => b.year - a.year);
        break;
      default:
        // Default sorting by name ascending
        sortedData.sort((a, b) => {
          const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
          const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
          return nameA.localeCompare(nameB);
        });
        break;
    }
    return sortedData;
  };

  // Function to fetch data based on filter, sort, and search options
  const fetchDatas = async (
    filterValue = "",
    field = null,
    sortOption = "",
    searchTerm = ""
  ) => {
    // Simulating API request delay with setTimeout
    setTimeout(() => {
      let filteredData = ProfileFakeData;

      // Apply search if searchTerm is provided
      if (searchTerm.trim()) {
        filteredData = filteredData.filter((item) => {
          const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
          const searchTermLower = searchTerm.toLowerCase().trim();
          return fullName.includes(searchTermLower);
        });
      } else {
        // Apply filtering if filterValue and field are provided
        if (filterValue && field) {
          filteredData = ProfileFakeData.filter((item) =>
            String(item[field])
              .toLowerCase()
              .includes(filterValue.toLowerCase())
          );
        }

        // Apply sorting if sortOption is provided
        if (sortOption) {
          filteredData = sortData(filteredData, sortOption);
        }
      }

      setDatas(filteredData);
    }, 500); // Simulate API delay of 500ms
  };

  // Effect hook to fetch data on component mount and when filters change
  useEffect(() => {
    fetchDatas(filter, filterField, sortOption, searchTerm);
  }, [filter, filterField, sortOption, searchTerm]);

  return {
    datas,
    setFilter,
    setFilterField,
    setSortOption,
    setSearchTerm,
  };
};

export default useFakeApi;
