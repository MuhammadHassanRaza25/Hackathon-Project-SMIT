// import { useState } from "react";
// import UserLayout from "./UserLayout";
// import { Modal } from 'antd';

// function WeddingLoans(){

//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const showModal = () => {
//         setIsModalOpen(true);
//       };
//       const handleOk = () => {
//         setIsModalOpen(false);
//       };

//       const handleCancel = () => {
//         setIsModalOpen(false);
//       };

//     return(
//         <>
  
//          <UserLayout>

//             <div className="flex justify-between">
//                <h1 className="text-center text-blue-600 text-2xl font-bold">Wedding Loan</h1>
//                <button onClick={showModal} className="cursor-pointer bg-blue-600 text-white font-semibold rounded-md py-1.5 px-6 text-lg">Get Loan</button>
//             </div>

//             <Modal title="Wedding Loan" onCancel={handleCancel} open={isModalOpen} onOk={handleOk}>
//               <div className="flex gap-3 pt-5 justify-between">
//                   <input className="border border-gray-300 rounded-md p-2 focus:outline-none w-full" type="text" placeholder="Enter Your Name" />
//                   <input className="border border-gray-300 rounded-md p-2 focus:outline-none w-full" type="email" placeholder="Enter Your Email" />
//                </div>
//                <div className="pt-5">
//                   <select className="border border-gray-300 rounded-md p-2 focus:outline-none w-full">
//                      <option selected>Subcategories</option>
//                      <option>Valima</option>
//                      <option>Furniture</option>
//                      <option>Valima Food</option>
//                      <option>Jahez</option>
//                   </select>
//                </div>
//                <div className="flex gap-3 pt-5 pb-3 justify-between">
//                   <input className="border border-gray-300 rounded-md p-2 focus:outline-none w-full" type="number" placeholder="Enter Maximum Loan" />
//                   <input className="border border-gray-300 rounded-md p-2 focus:outline-none w-full" type="number" placeholder="Enter Loan Period In Years" />
//                </div>
//            </Modal>
         
//          </UserLayout>
//         </>
//     )
// }

// export default WeddingLoans;

import { useState, useEffect } from "react";
import UserLayout from "./UserLayout";
import { Modal, Table, Button } from 'antd';

function WeddingLoans() {

   let postLoan = async () => {
      // API call to get the classes of
      let currentUser = getCurrentUser();
      console.log(currentUser, "current user");
      let token = getUserToken();
      console.log(token, "token");
    
      try {
        let Fetching = await fetch(
          ``,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
    
        if (!Fetching.ok) {
          throw new Error(`Error: ${Fetching.statusText}`);
        }
    
        let response = await Fetching.json();
        // console.log("Teacher classes fetching response ===>", response);
    
        response.data.forEach((data) => {
          // console.log('data ===>', data);
        });
  
      //   setAllClassesData(response.data) 
      //   setIsLoading(false)
      } 
      catch (error) {
        console.error("Error fetching teacher classes:", error);
      }
    };
    
    useEffect(() => {
      postLoan(); 
    }, []);
    

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subcategory: '',
    maxLoan: '',
    loanPeriod: ''
  });
  console.log("Form Data==>", formData);
  
  const [loanRequests, setLoanRequests] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setLoanRequests([
      ...loanRequests,
      { ...formData, status: 'Pending' } // Adding the 'status' to each loan request
    ]);
    setIsModalOpen(false);
    setFormData({ name: '', email: '', subcategory: '', maxLoan: '', loanPeriod: '' }); // Reset form data
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const changeStatus = (record, status) => {
    const updatedRequests = loanRequests.map((loan) =>
      loan === record ? { ...loan, status: status } : loan
    );
    setLoanRequests(updatedRequests);
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Subcategory', dataIndex: 'subcategory', key: 'subcategory' },
    { title: 'Maximum Loan', dataIndex: 'maxLoan', key: 'maxLoan' },
    { title: 'Loan Period (Years)', dataIndex: 'loanPeriod', key: 'loanPeriod' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
  ];

  return (
    <>
      <UserLayout>
        <div className="flex justify-between">
          <h1 className="text-center text-blue-600 text-2xl font-bold">Wedding Loan</h1>
          <button
            onClick={showModal}
            className="cursor-pointer bg-blue-600 text-white font-semibold rounded-md py-1.5 px-6 text-lg"
          >
            Get Loan
          </button>
        </div>

        {/* Table to display loan data using Ant Design's Table component */}
        <div className="mt-6">
          <Table
            columns={columns}
            dataSource={loanRequests}
            rowKey={(record) => record.email} // You can use a unique identifier like email or index
          />
        </div>

        {/* Modal for loan application */}
        <Modal title="Wedding Loan" onCancel={handleCancel} open={isModalOpen} onOk={handleOk}>
          <div className="flex gap-3 pt-5 justify-between">
            <input
              name="name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none w-full"
              type="text"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              name="email"
              className="border border-gray-300 rounded-md p-2 focus:outline-none w-full"
              type="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="pt-5">
            <select
              name="subcategory"
              className="border border-gray-300 rounded-md p-2 focus:outline-none w-full"
              value={formData.subcategory}
              onChange={handleChange}
            >
              <option value="">Subcategories</option>
              <option value="Valima">Valima</option>
              <option value="Furniture">Furniture</option>
              <option value="Valima Food">Valima Food</option>
              <option value="Jahez">Jahez</option>
            </select>
          </div>
          <div className="flex gap-3 pt-5 pb-3 justify-between">
            <input
              name="maxLoan"
              className="border border-gray-300 rounded-md p-2 focus:outline-none w-full"
              type="number"
              placeholder="Enter Maximum Loan"
              value={formData.maxLoan}
              onChange={handleChange}
            />
            <input
              name="loanPeriod"
              className="border border-gray-300 rounded-md p-2 focus:outline-none w-full"
              type="number"
              placeholder="Enter Loan Period In Years"
              value={formData.loanPeriod}
              onChange={handleChange}
            />
          </div>
        </Modal>
      </UserLayout>
    </>
  );
}

export default WeddingLoans;

