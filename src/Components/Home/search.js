import React, { useState } from 'react';
import { Select, MenuItem } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './main.css';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [selectedValue, setSelectedValue] = useState("Coimbatore");
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const navigate = useNavigate();
    const handleClick = () => {
        if (selectedValue === "Coimbatore") {
            console.log(selectedValue);
            navigate("/")
        }
        else if (selectedValue === "Ooty") {
            console.log(selectedValue);
        }
        else if (selectedValue === "Kodaikanal") {
            console.log(selectedValue);
        }
        else if (selectedValue === "Chennai") {
            console.log(selectedValue);
        }
        else if (selectedValue === "Madurai") {
            console.log(selectedValue);
        }
    }
    return (
        <div className="all">
            <div>
                <select value={selectedValue} onChange={handleSelectChange}>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Ooty">Ooty</option>
                    <option value="Kodaikanal">Kodaikanal</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Madurai">Madurai</option>
                </select>
            </div>

            <div>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" className="submit" onClick={handleClick}>
                        SEARCH
                    </Button>
                </Stack>
            </div>
        </div>
    );
}
export default Search;