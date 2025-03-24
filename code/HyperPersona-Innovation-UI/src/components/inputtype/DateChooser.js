import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {FormControl} from "@mui/material";
export const createDateChooser = (label, value, setValue, errorstr) => (
    <FormControl style={{ marginBottom: '10px', borderradius: '5px', background: '#fff', height: '55px' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DatePicker
          label={label}
          value={dayjs(value)}
          // onChange={setValue}
          onChange={(e) => setValue(e.toISOString().slice(0, 19).replace("T", " "))}
          format="DD-MM-YYYY"
          minDate={dayjs().subtract(100, 'years')} // For example, max 100 years ago
          maxDate={dayjs()}
          slotProps={{
            textField: { size: "large" }, openPickerIcon: {
              sx: {
                    color: "#f05736",
                  }
                }
            }}
          error={errorstr}
          helperText={errorstr}
        />
      </LocalizationProvider>
    </FormControl>
  );