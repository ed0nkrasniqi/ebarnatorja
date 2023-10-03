import { CollectionConfig } from "payload/types";

const Barnat: CollectionConfig = {
  slug: "barnat",
  auth: false,
  access: {
    read: () => true,
  },
  fields: [
    {
      name:'emriGjenerik',
      label:'Emri Gjenerik',
      type:'relationship',
      relationTo:'emri-gjenerik'
    },
    {
        name:'productName',
        label:'Product Name',
        type:'text',
    },
    {
        name:'baForma',
        label:'Forma',
        type:'text',
    },
    {
        name:'baDoza',
        label:'Doza',
        type:'text',
    },
    {
        name:'baPaketimi',
        label:'Paketimi',
        type:'text',
    },
    {
        name:'prodhuesi',
        label:'Prodhuesi',
        type:'text',
    },
    {
      name:'atcKodi',
      label:'ATC Kodi',
      type:'text',
    },
    {
      name:'productDescription',
      label:'Description',
      type:'text',
    },



   
 
 
  ],
};

export default Barnat;
