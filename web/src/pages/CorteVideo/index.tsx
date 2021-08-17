import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Layout from '../../components/Layout';

interface IHomeProps {
  path?: string
}

const CorteVideo: React.FC<IHomeProps> = () => {
    const [img_base64, setImg_base64] = useState(undefined);


  return (

    <Layout>
       <Grid>
        <Grid item  xs={4}>
          <Paper >
          <input
                      type="file"
                      accept="image/*"
                      id="image"
                      onChange={(e) => {
                        const { files } = e.target;
                        const filesArr = Array.prototype.slice.call(files);
                        setImg_base64(filesArr[0]);
                      }}
                    />
          </Paper>
        </Grid>
   </Grid>
    </Layout>
  
  
  )
}

export default CorteVideo
