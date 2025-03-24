import {
    TextField,
    FormControl, InputLabel, MenuItem, Select
  } from "@mui/material";
export const createInput = (type, label, value, setValue, errorstr) => (
    <TextField
      type={type}
      label={label}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
      fullWidth
      margin="normal"
      error={errorstr}
      helperText={errorstr}
    />
  );
  export const createSelectInput = (type, label, value, setValue, options, placeholder,errorstr) => (
    <FormControl variant="outlined" style={{ marginBottom: '10px', borderradius: '5px', background: '#fff' }}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        placeholder={placeholder}
        type={type}
        labelId="select-label"
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        fullWidth
        margin="normal"
        error={!!errorstr}
        helperText={errorstr}
      >
        {options && options.map((option) => (
                <MenuItem key={option.masterTypeId} value={option.masterTypeId}>
                  {option.masterTypeValue}
                </MenuItem>))}
            </Select>  
      </FormControl>
  );