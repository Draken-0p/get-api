const mongoose = require('mongoose');

const dicomToNiftiSchema = new mongoose.Schema({
    sMRI : String,
    fMRI : String,
    dMRI : String,
})
const preprocessSchema = new mongoose.Schema({
    sMRI_1 : String,
    dMRI_1 : String,
    fMRI_1 : String,
    fMRI_2 : String,
})

const inferenceSchema = new mongoose.Schema({
    tractography : String,
    tumour_segmentation : String,
    functional_connectomes : String,
  
})
const dataUploadSchema = new mongoose.Schema({
    start: String,
    end: String, 
  })
  

const dicomToNiftidetailsSchema = new mongoose.Schema({
    sMRI : dataUploadSchema,
    fMRI : dataUploadSchema,
    dMRI : dataUploadSchema,
    
  })
  const preprocessdetailsSchema = new mongoose.Schema({
    sMRI_1 : dataUploadSchema,
    fMRI_1 : dataUploadSchema,
    dMRI_1 : dataUploadSchema,
    fMRI_2 : dataUploadSchema,
    
  })
  const inferencedetailsSchema = new mongoose.Schema({
    tractography : dataUploadSchema,
    tumour_segmentation : dataUploadSchema,
    functional_connectomes : dataUploadSchema,
  
})


const filesuploadedSchema = new mongoose.Schema({
     rs_fMRI:String,
     DTI : String,
     T1w : String,
     T2w : String,
     T1c : String,
     FLAIR : String,

    
  })
  const statusSchema = new mongoose.Schema({
   dataUpload : String,
    dicomToNifti: dicomToNiftiSchema,
    preprocess: preprocessSchema,
    preprocessStatusSet: String,
    inference: inferenceSchema,
    inferenceStatusSet: String,

   
 })

const timespanSchema = new mongoose.Schema({
  dataUpload :  dataUploadSchema,
   dicomToNiftidetails: dicomToNiftidetailsSchema,
    preprocessdetails: preprocessdetailsSchema,
    preprocessdetailsStatusSet: String,
    inferencedetails: inferencedetailsSchema,
    inferencedetailsStatusSet: String,
})

const filesSchema = new mongoose.Schema({
    status: statusSchema,
    timespan: timespanSchema,
   
    provider: String,
    environment: String,
    dockerArray: [String],
    studyID: String,
    trialID: String,
    hospital: String,
    executionID: String,
    disorder: String,


    patientID: String,

    name: String,
    age: String,
    gender: String,
    createdAt:{
        type: Date,
        default: ()=>Date.now()
    },
    filesuploaded : filesuploadedSchema,
    processStatus : String,

    
})


const file = mongoose.model('file', filesSchema)
module.exports = file





