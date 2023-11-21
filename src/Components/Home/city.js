import { Select, MenuItem } from "@mui/material";
import './main.css';
const options = [
  { value: "option1", label: "Coimbatore" },
  { value: "option2", label: "Chennai"},
  { value: "option3", label: "Madurai" },
  { value: "option3", label: "Ooty" },
  { value: "option3", label: "Kodaikanal" }
];

export default function MySelect() {
  return (
    <Select className="city"
      defaultValue="option1"
      sx={{ color: "black" }}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}