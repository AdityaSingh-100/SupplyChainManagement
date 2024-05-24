import React ,{ useState, useEffect, useCallback, useContext} from "react";
// module.exports = {
//     plugins: [
//       require('autoprefixer'),
//       // add other PostCSS plugins here if needed
//     ],
//   };
//internal import
import{
    Table,
    Form,
    Services,
    Profile,
    CompleteShipment,
    GetShipment,
    StartShipment,
} from "../Components/index.js";
import {TrackingContext} from "../Conetxt/TrackingContext";

const index=() =>{
    const{
        currentUser,
        createShipment,
        getAllShipment,
        completeShipment,
        getShipment,
        startShipment,
        getShipmentsCount,

    } =useContext(TrackingContext);
//STATE VARIABLE
    const [createShipmentModel , setCreateShipmentModel]= useState(false);
    const [openProfile , setOpenProfile]= useState(false);
    const [startModal , setStartModal]= useState(false);
    const [completeModal, setCompleteModal]= useState(false);
    const [getModel , setGetModel]= useState(false);
// DATA STATE VARIABLE
    const[AllShipmentdata ,setallShipmentdata  ]=useState();

    useEffect(()=>{
        return async()=>{
        const getCanpaignsData = getAllShipment();
        setallShipmentdata(allData);
        };
    },[]);

    return(
        <>
        <Services 
        setOpenProfile={setOpenProfile}
        setCompleteModal={setCompleteModal}
        setGetModel={setGetModel}
        setStartModal={setStartModal}
        />
        <Table
        createShipmentModel={createShipmentModel}
        createShipment={createShipment}
        setCreateShipmentModel={setCreateShipmentModel}
        />
        <Profile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        currentUser={currentUser}
        getShipmentsCount={getShipmentsCount}
        />
        <CompleteShipment
        compketemodal={completeModal}
        setCompleteModal={setCompleteModal}
        completeShipment={completeShipment}
        />
        <GetShipment
        getModel={getModel}
        setGetModel={setGetModel}
        getShipment={getShipment}
        />
        <StartShipment
        startModal={startModal}
        setStartModal={setStartModal}
        startShipment={startShipment}
        />
        </>
        
    );
};

export default index;