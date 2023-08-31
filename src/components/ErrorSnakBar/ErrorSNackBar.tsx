import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../app/store';
import { useDispatch } from 'react-redux';
import { setErrorAC } from '../../app/app-reducer';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function CustomizedSnackbars() {
//   const [open, setOpen] = React.useState(true);

//   const handleClick = () => {
//     setOpen(true);
//   };

const error=useSelector<AppRootStateType,string|null>(state=>state.app.error)

const dispatch = useDispatch()
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    // setOpen(false);
    dispatch(setErrorAC(null))
  };

 

 const isOpen=error!==null

  return (
    
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {/* This is a success message! */}
          {error}
        </Alert>
      </Snackbar>
     
  );
}