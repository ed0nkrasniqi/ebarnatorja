import { CollectionConfig } from "payload/types";

const Shpalljet: CollectionConfig = {
  slug: "shpalljet",
  auth: false,
  access: {
    read: () => true,
  },
  fields: [
    {
      name:'firstName',
      label:'First Name',
      type:'text',
      required:true,
    },
    {
        name:'lastName',
        label:'Last Name',
        type:'text',
        required: true,
    },
    {
        name:'phoneNumber',
        label:'Phone Number',
        type:'number',
        required: true,
    },
    {
      name:'shEmail',
      label:'Email',
      type:'email',
    },
    {
      name:'barFacebook',
      label:'Facebook',
      type:'text',
    },
    {
      name:'isApproved',
      label:'Approved',
      type:'checkbox',
    },
    {
      name:'statusiKompletuar',
      label:'Kompletuar',
      type:'checkbox',
      
    }


   
 
 
  ],
};

export default Shpalljet;
