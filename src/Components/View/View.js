import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import {getJobs,deleteJobs} from '../Redux/actions';
const View = (props) => {
  useEffect(()=>{
    props.getJobs();
  },[])
  const DeleteJob=(id)=>{
    console.log(`delete hit ${id}`);
    props.deleteJobs(id);
  };
  return (
   <div className="container">
    <div className="row">
       { props.jobList!== undefined ? props.jobList?.map(item =>
        <div key={item.id} className="col-md-4 col-sm-6 mt-3">
      <Card sx={{ maxWidth: 345 , minHeight:230 }}>
        <i onClick={DeleteJob.bind(this, item.id)} className="fa-solid fa-xmark fa-1x mt-3 me-2 float-end text-danger"></i>
      <CardContent>
        <Typography variant="h5" className='text-start ms-2' color="text.secondary">
          {item.title}
        </Typography>
        <div className="row mt-2">
            <div className="col-md-3">
                <Avatar alt="Remy Sharp" style={{ width:60, height:60 }}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png" />
            </div>
            <div className="col-md-9 my-auto">
        <Typography variant="body1" className='text-start ms-2' color="text.secondary">
         {item.companyName}
        </Typography>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-sm-6 text-start">
        <Typography variant="body2" color="text.secondary">
         Salary : {item.salary}
        </Typography>
            </div>
       
            <div className="col-md-8 col-sm-6 text-end">
        <Typography variant="body2" color="text.secondary">
         Joining Date : {item.joiningDate}
        </Typography>
            </div>
        </div>
        
      
        <Typography variant="body2" className='text-start' color="text.secondary">
         Description : {item.description.substring(0,100)}
        </Typography>
      </CardContent>
    </Card>
    </div>
          ): <div></div>}
     </div>
  </div>
  )
}
const mapStateToProps =(state)=>({
    jobList : state?.jobList
});
export default connect(mapStateToProps,{getJobs,deleteJobs})(View);