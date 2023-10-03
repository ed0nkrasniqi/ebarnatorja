import { CollectionConfig } from "payload/types";

const Barnatoret: CollectionConfig = {
  slug: "barnatoret",
  auth: false,
  access: {
    read: () => true,
  },
  fields: [
    {
      name:'barName',
      label:'Name',
      type:'text'
    },
    {
        name:'barLocation',
        label:'Location',
        type:'text',
    },
    {
        name:'barTel',
        label:'Phone Number',
        type:'number',
    },
    {
      name:'barEmail',
      label:'Email',
      type:'email',
    },
    {
      name:'barFacebook',
      label:'Facebook',
      type:'text',
    },
    {
      name:'barInstagram',
      label:'Instagram',
      type:'text',
    },
    {
      name:'timesRep',
      label:'Times Replied',
      type:'number',
      
    }


   
 
 
  ],
};

export default Barnatoret;
