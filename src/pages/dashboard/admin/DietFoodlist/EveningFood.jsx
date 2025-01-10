import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 80;
const ITEM_PADDING_TOP = 20;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, morningFood, theme) {
  return {
    fontWeight: morningFood.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const EveningFood = () => {
const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);
const [eveningFood, seteveningFood] = React.useState([])

    const handleeveningFood =(event)=>{
        const {
          target: { value },
        } = event;
        seteveningFood(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      }
    return (
        <div >
         {/* three colounm */}
         <div>
           <h1 className="text-2xl font-bold mx-auto text-center my-5 border-b-2 pb-2 border-gray-500" >Evening</h1>

           <div>
             <FormControl sx={{ m: 1, width: 450 }}>
               <InputLabel id="demo-multiple-chip-label">Food list</InputLabel>
               <Select
                 labelId="demo-multiple-chip-label"
                 id="demo-multiple-chip"
                 multiple
                 value={eveningFood}
                 onChange={handleeveningFood}
                 input={<OutlinedInput id="select-multiple-chip" label="Food List" />}
                 renderValue={(selected) => (
                   <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                     {selected.map((value) => (
                       <Chip key={value} label={value} />
                     ))}
                   </Box>
                 )}
                 MenuProps={MenuProps}
               >
                 {names.map((name) => (
                   <MenuItem
                     key={name}
                     value={name}
                     style={getStyles(name, eveningFood, theme)}
                   >
                     {name}
                   </MenuItem>
                 ))}
               </Select>
             </FormControl>
           </div>
         </div>
       </div>
    );
};

export default EveningFood;