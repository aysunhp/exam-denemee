import React ,{useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { fetchData, addBasket, addWishlist, deleteBasket , increaseBasket, decreaseBasket} from "../../redux/slice/mealSlice";
import "./basket.scss"
const Basket = () => {

  const dispatch = useDispatch();
  const basket = useSelector((state) => state.meal.basket);

  useEffect(() => {
    dispatch(fetchData());
 
  }, [dispatch]);
  return (
    <>
    <div className="basket">
      <div className="containerr">
         <div className="menu-intro">
            <span>OUR BASKET</span>
            <h2>Basket</h2>
          </div>


          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Ingredients</TableCell>
            <TableCell align="right">Total Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Increase</TableCell>
            <TableCell align="right">Decrease</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
             
              <TableCell align="right">{row.ingredients}</TableCell>
              <TableCell align="right">{Number(row.price)*row.quantity}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right"><Button onClick={()=>{
                dispatch(increaseBasket(row))
              }}> Increase</Button></TableCell>
              <TableCell align="right"><Button onClick={()=>{
              row.quantity>1?  dispatch(decreaseBasket(row)):null
              }}>Decrease</Button></TableCell>
              <TableCell align="right"><Button onClick={()=>{
                dispatch(deleteBasket(row))
              }}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
    </>
  );
};

export default Basket;
