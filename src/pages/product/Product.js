// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
// import "./Product.scss"; // Import SCSS file for styling
// import logo from "../../assets/category.png"; // Import your image
// import Header from "../../components/header/Header";
// import Navbar from "../../components/navBar/NavBar";
// import { useNavigate } from "react-router-dom";
// import { axiosClient } from "../../utils/axiosClient";
// import MyTable from "../../components/table/MyTable";

// function Product() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showPopup, setShowPopup] = useState(false); // State for showing delete confirmation popup
//   const [deleteId, setDeleteId] = useState(null); // State to store the id of the item to be deleted

//   const columns = [
//     {
//       Header: "User ID",
//       accessor: "_id",
//     },
//     {
//       Header: "ProductName",
//       accessor: "productName",
//     },
//     {
//       Header: "PackSize",
//       accessor: "packSize",
//     },
//     {
//       Header: "Mrp",
//       accessor: "mrp",
//     },
//     {
//       Header: "Category",
//       accessor: "categoryName",
//     },
//     {
//       Header: "Status",
//       accessor: "status",
//     },
//     {
//       Header: "Product Image",
//       accessor: "productImage",
//       Cell: ({ row }) => (
//         <div>
//           {row.original.productImage && (
//             <img
//               src={row.original.productImage.url} // Assuming productImage is an object with 'url' property
//               alt="Product"
//               style={{ width: 50, height: 50 }}
//             />
//           )}
//         </div>
//       ),
//     },
//     {
//       Header: "Actions",
//       Cell: ({ row }) => (
//         <div>
//           <FontAwesomeIcon
//             icon={faEdit}
//             style={{ cursor: "pointer", marginRight: "5px" }}
//           />
//           <FontAwesomeIcon
//             icon={faTrash}
//             style={{ cursor: "pointer" }}
//             onClick={() => handleDeleteConfirmation(row.original._id)}
//           />
//         </div>
//       ),
//     },
//   ];

//   const navigate = useNavigate();

//   const handleAddUser = () => {
//     console.log("Adding product:");
//     navigate("/addProduct"); // Navigate to the "/addCategory" route
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axiosClient.get("/item/23");
//         console.log("response in category", response);

//         setData(response.result.items);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleDelete = async () => {
//     try {
//       await axiosClient.delete(`/item/${deleteId}`);
//       // Refresh data after deletion
//       const response = await axiosClient.get("/item/23");
//       setData(response.result.items);
//       setShowPopup(false); // Close the delete confirmation popup after deletion
//     } catch (error) {
//       console.error("Error deleting item: ", error);
//     }
//   };

//   const handleDeleteConfirmation = (itemId) => {
//     setDeleteId(itemId); // Store the item ID to be deleted
//     setShowPopup(true); // Show the delete confirmation popup
//   };

//   return (
//     <>
//       <div>
//         <Header />
//         {/**/}
//       </div>

//       <div className="container">
//         <div className="side-container">
//           {/* Content for the left container */}
//           <Navbar />
//         </div>
//         <div className="side-container1">
//           {/* Content for the right container */}
//           <div className="user-management-container">
//             <div className=" container1">
//               <div className="component-logo">
//                 <img src={logo} alt="Logo" />
//                 <div className="logo-content">
//                   <h1 style={{ margin: "20px" }}>Category</h1>
//                 </div>
//               </div>
//               <div className="search-input">
//                 <input type="text" placeholder="Search..." />
//                 <FontAwesomeIcon icon={faSearch} className="search-icon" />
//               </div>
//               <div>
//                 <button className="add-user-button" onClick={handleAddUser}>
//                   Add User
//                 </button>
//               </div>
//             </div>

//             <div className="user-form-Heading">
//               <div className="ji" style={{}}>
//                 {/* Description */}
//               </div>

//               <div
//                 className="ji"
//                 style={{ paddingLeft: "1100px", paddingRight: "10px" }}
//               ></div>
//             </div>
//             <MyTable columns={columns} data={data} />

//             {/* Delete Confirmation Popup */}
//             {showPopup && (
//               <div className="bg-white p-4 rounded-lg shadow-md absolute right-0 mt-12">
//                 <p>Are you sure you want to delete this item?</p>
//                 <div className="flex justify-end mt-4">
//                   <button
//                     onClick={handleDelete}
//                     className="bg-red-500 text-white px-4 py-2 rounded mr-2"
//                   >
//                     Delete
//                   </button>
//                   <button
//                     onClick={() => setShowPopup(false)}
//                     className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Product;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Product.scss"; // Import SCSS file for styling
import logo from "../../assets/product.png"; // Import your image
import Header from "../../components/header/Header";
import Navbar from "../../components/navBar/NavBar";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import MyTable from "../../components/table/MyTable";

function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false); // State for showing delete confirmation popup
  const [deleteId, setDeleteId] = useState(null); // State to store the id of the item to be deleted

  const columns = [
    {
      Header: "User ID",
      accessor: "_id",
    },
    {
      Header: "ProductName",
      accessor: "productName",
    },
    {
      Header: "PackSize",
      accessor: "packSize",
    },
    {
      Header: "Mrp",
      accessor: "mrp",
    },
    {
      Header: "Category",
      accessor: "categoryName",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Product Image",
      accessor: "productImage",
      Cell: ({ row }) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {row.original.productImage && (
            <img
              src={row.original.productImage.url} // Assuming productImage is an object with 'url' property
              alt="Product"
              style={{ width: 50, height: 50 }}
            />
          )}
        </div>
      ),
    },
    {
      Header: "Actions",
      Cell: ({ row }) => (
        <div>
          <FontAwesomeIcon
            icon={faEdit}
            style={{ cursor: "pointer", marginRight: "5px" }}
          />
          <FontAwesomeIcon
            icon={faTrash}
            style={{ cursor: "pointer" }}
            onClick={() => handleDeleteConfirmation(row.original._id)}
          />
        </div>
      ),
    },
  ];

  const navigate = useNavigate();

  const handleAddUser = () => {
    console.log("Adding product:");
    navigate("/addProduct"); // Navigate to the "/addCategory" route
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/item/23");
        console.log("response in category", response);

        setData(response.result.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async () => {
    try {
      await axiosClient.delete(`/item/${deleteId}`);
      // Refresh data after deletion
      const response = await axiosClient.get("/item/23");
      setData(response.result.items);
      setShowPopup(false); // Close the delete confirmation popup after deletion
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };

  const handleDeleteConfirmation = (itemId) => {
    setDeleteId(itemId); // Store the item ID to be deleted
    setShowPopup(true); // Show the delete confirmation popup
  };

  return (
    <>
      <div>
        <Header />
        {/**/}
      </div>

      <div className="container">
        <div className="side-container">
          {/* Content for the left container */}
          <Navbar />
        </div>
        <div className="side-container1">
          {/* Content for the right container */}
          <div className="user-management-container">
            <div className=" container1">
              <div className="component-logo">
                <img src={logo} alt="Logo" />
                <div className="logo-content">
                  <h1 style={{ margin: "20px" }}>Product</h1>
                </div>
              </div>
              <div className="search-input">
                <input type="text" placeholder="Search..." />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
              </div>
              <div>
                <button className="add-user-button" onClick={handleAddUser}>
                  Add User
                </button>
              </div>
            </div>

            <div className="user-form-Heading">
              <div className="ji" style={{}}>
                {/* Description */}
              </div>

              <div
                className="ji"
                style={{ paddingLeft: "1100px", paddingRight: "10px" }}
              ></div>
            </div>
            <MyTable columns={columns} data={data} />

            {/* Delete Confirmation Popup */}
            {showPopup && (
              <div className="bg-white p-4 rounded-lg shadow-md absolute right-0 mt-12">
                <p>Are you sure you want to delete this item?</p>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
