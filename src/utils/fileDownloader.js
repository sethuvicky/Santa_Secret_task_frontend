import * as XLSX from "xlsx";

export const downloadAsExcel = (data) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Secret Santa Assignments");

  XLSX.writeFile(workbook, "SecretSantaAssignments.xlsx");
};
