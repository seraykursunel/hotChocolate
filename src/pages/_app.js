import "@/styles/globals.css";
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function App() {
  const [mix, setMix] = useState("");
  const [milk, setMilk] = useState("");
  const [toppings, setToppings] = useState("");

  return (
    <div>
      <h1>Sıcak Çikolata Düzenleyici</h1>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="milk-select-label">Milk</InputLabel>
        <Select
          labelId="milk-select-label"
          id="milk-select"
          value={milk}
          label="Milk"
          onChange={(e) => setMilk(e.target.value)}
        >
          <MenuItem value={"Yağlı"}>Yağlı</MenuItem>
          <MenuItem value={"Laktozsuz"}>Laktozsuz</MenuItem>
          <MenuItem value={"Badem Sütü"}>Badem Sütü</MenuItem>
        </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="mix-select-label">Mix</InputLabel>
        <Select
          labelId="mix-select-label"
          id="mix-select"
          value={mix}
          label="Mix"
          onChange={(e) => setMix(e.target.value)}
        >
          <MenuItem value={"Normal"}>Normal</MenuItem>
          <MenuItem value={"Ekstra Sıcak"}>Ekstra Sıcak</MenuItem>
          <MenuItem value={"Ekstra Çikolatalı"}>Extra Çikolatalı</MenuItem>
        </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="toppings-select-label">Toppings</InputLabel>
        <Select
          labelId="toppings-select-label"
          id="toppings-select"
          value={toppings}
          label="Toppings"
          onChange={(e) => setToppings(e.target.value)}
        >
          <MenuItem value={"Marshmallow"}>Marshmallow</MenuItem>
          <MenuItem value={"Krema"}>Krema</MenuItem>
          <MenuItem value={"Fıstık"}>Fıstık</MenuItem>
        </Select>
      </FormControl>
    </Box>




     
      {/*TODO: KARIŞIMI, SÜTÜ VE SÜSLEMEYI AYARLAMAK İÇİN BİR FORM EKLE*/}
      {/*TODO: HER BIRINDEN EN AZ 3 TÜR EKLEYIN*/}
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
      noValidate
      autoComplete="off"
    >
      
      <TextField label="Sıcak Çikolatanız" variant="filled" color="success" focused value={ milk&&mix&&toppings  ? `${milk} ile ${mix} ve üzerine ${toppings} ekleyin.` : ""}/>
      
    </Box>
      
      
    </div>
  );
}
