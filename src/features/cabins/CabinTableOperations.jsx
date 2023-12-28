import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With discount" },
          { value: "no-discount", label: "No discount" },
        ]}
      ></Filter>
      <SortBy
        options={[
          {
            value: "name-asc",
            label: "Sort by name (A-Z)",
          },
          {
            value: "name-desc",
            label: "Sort by name (Z-A)",
          },
          {
            value: "regularPrice-asc",
            label: "Sort price (low 1st)",
          },
          {
            value: "regularPrice-desc",
            label: "Sort price (high 1st)",
          },
          {
            value: "maxCapacity-asc",
            label: "Sort capacity (low 1st)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort capacity (high 1st)",
          },
        ]}
      ></SortBy>
    </TableOperations>
  );
}

export default CabinTableOperations;
