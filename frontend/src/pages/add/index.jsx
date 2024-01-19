import React,{useEffect, useState} from "react";
import "./add.scss"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";
import { fetchData,deleteData, postData} from "../../redux/slice/mealSlice";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  ingredients: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
    image: Yup.string()
    .min(8, 'Too Short!')
    .required('Required'),
    type: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    price: Yup.number()
    .required('Required'),
 
 
});

const Add = () => {

  const dispatch = useDispatch();
  const data=useSelector(state=>state.meal.data)
const [search,setSearch]=useState("")
const [type,setType]=useState("")
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const filteredData= ()=>{
    if(type=="az"){
      return [...data].sort((a,b)=>a.name.localeCompare(b.name))
    } else  if(type=="za"){
      return [...data].sort((a,b)=>b.name.localeCompare(a.name))
    }else  if(type=="price"){
      return [...data].sort((a,b)=>Number(a.price)-Number(b.price))
    }
  }

  return (
    <>
      <div className="add">
        <div className="containerr">

        <div className="add-intro">
            <span>ADD</span>
            <h2>Add Something</h2>
          </div>
          <TextField id="outlined-basic" label="Outlined" variant="Search..." onChange={(e)=>{
setSearch(e.target.value)
          }}/> 
        
          <Formik
       initialValues={{
         name: '',
         ingredients: '',
         price: '',
         type:"",
         image:""
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         dispatch(postData(values))
         console.log(values);
       }}
     >
       {({ errors, touched ,handleSubmit}) => (
         <Form onSubmit={handleSubmit}>
           <Field name="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <br />
           <Field name="ingredients" />
           {errors.ingredients && touched.ingredients ? (
             <div>{errors.ingredients}</div>
           ) : null}
           <br />
           <Field name="price" />
           {errors.price && touched.price ? <div>{errors.price}</div> : null}
           <br />
           <Field name="image"  />
           {errors.image && touched.image ? <div>{errors.image}</div> : null}
           <br />
           <Field name="type" />
           {errors.type && touched.type ? <div>{errors.type}</div> : null}
           <br />

           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
        </div>

        <div className="table">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Name</TableCell>
            <TableCell align="right">Ingredients</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
           
            <TableCell align="right">{row.ingredients}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
            <TableCell align="right">{row.type}</TableCell>
            <TableCell align="right"><Button onClick={()=>{
              dispatch(deleteData(row._id))
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

export default Add;
