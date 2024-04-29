import React from "react";
import { useEffect,useState } from "react";
import axios from 'axios'
import { Pagination, Stack} from '@mui/material';
import '../style/loader.css'


function Product({product_name}) {
  const [products, setProduct] = useState([]);
  const itemsPerPage = 20 ;  // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  // const [open, setOpen] = React.useState(false);

  useEffect(() => {
    // Fetch details of the specific product from the backend
    axios.get("https://medisell.onrender.com/product")
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(`Error fetching details for frontend:`, error);
        setLoading(false);
      });
  },[products]);  


  const handleChange = (event, value) => {
    setCurrentPage(value);
    
  };



  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = products.slice(startIndex, endIndex);

  // const navigate = useNavigate();
  // const [isDeleting, setIsDeleting] = useState(false);

 
  
//  /product/del/:productName
  // const handleDelete = () => {
  //   // Send a DELETE request to remove the course
  //   setIsDeleting(true);
  //   axios.delete(`http://localhost:8000/product/del/${products}`)
  //     .then(() => {
  //       console.log('product deleted successfully.');
  //       navigate('/product'); // Redirect to the course list page
  //     })
  //     .catch((error) => {
  //       console.error('Error deleting course:', error);
  //       setIsDeleting(false);
  //     });
  // };



  if (!products) {
    return <div>Loading...</div>;
  }
  if (loading) {
    return <div className="loader w-scrren h-screen"></div>; // Render loader while waiting for data
  }
  return (
    
    <div>
      <h1 className=" font-serif h-fit w-screen  text-2xl  bg-gradient-to-r from-lime-200 rounded-xl mt-2 px-4 text-wrap">Product Section</h1>
      <br />
     <Stack spacing={2}>
     
      <div className="grid grid-cols-5 gap-6 rounded-lg  ">
      {currentProducts.map((product_name) => (
            <div key={product_name.product_name} className="h-92 w-fit m-5  rounded-lg  dark:bg-600 shadow-md hover: hover:w-52 mb-4">
              <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png" alt="" />
            <p className="text-md px-2 font-medium text-slate-500">{product_name.product_name}</p>
            <p className="text-green-500 px-2 mt-2">{product_name.product_price}</p>
            </div>
        ))}
      </div>
      {/* <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop> */}
      <Pagination count={Math.ceil(products.length / itemsPerPage)} page={currentPage} onChange={handleChange}  variant="outlined" color="primary" style={{margin:"100px"}}/>
      </Stack>
        
      
    </div>
    
  );
}

export default Product;
