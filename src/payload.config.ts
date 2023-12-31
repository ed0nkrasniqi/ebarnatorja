import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Barnatoret from './collections/Barnatoret';
import Shpalljet from './collections/Shpalljet';
import Barnat from './collections/Barnat';
import EmriGjenerik from './collections/EmriGjenerik';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,Barnatoret,Shpalljet,Barnat,EmriGjenerik,
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
