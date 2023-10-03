import { CollectionConfig } from "payload/types";

const EmriGjenerik: CollectionConfig = {
  slug: "emri-gjenerik",
  auth: false,
  access: {
    read: () => true,
  },
  fields: [
    {
      name:'egIndikimet',
      label:'Indikimet',
      type:'richText',
    },
    {
        name:'egDozimi',
        label:'Dozimi',
        type:'text',
    },
    {
        name:'egKunderindikimet',
        label:'Kunderindikimet',
        type:'text',
    },




   
 
 
  ],
};

export default EmriGjenerik;
