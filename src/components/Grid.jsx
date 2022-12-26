import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 70,
    headerClassName: 'cell-header'
  },
  {
    field: 'firstName',
    headerName: 'First name',
    // width: 130,
    headerClassName: 'cell-header'
  },
  {
    field: 'position',
    headerName: 'Position',
    // width: 130,
    headerClassName: 'cell-header'
  },
  {
    field: 'experience',
    headerName: 'Exp. / years',
    type: 'number',
    // width: 90,
    headerClassName: 'cell-header'
  },
  {
    field: 'ratePerHour',
    headerName: 'Rate/h',
    headerClassName: 'cell-header',
    valueGetter: (params) =>
    `${params.row.ratePerHour || ''} ${params.row.rateCurrency || ''}`
  },
  {
    field: 'location',
    headerName: 'Location',
    headerClassName: 'cell-header'
  },
  {
    field: 'technologies',
    headerName: 'Technologies',
    headerClassName: 'cell-header',
    minWidth: 100,
    // valueGetter: (params) => getTechnologies(params.row.technologies),
    flex: 2,
  },
  {
    field: 'description',
    headerName: 'Description',
    headerClassName: 'cell-header',
    flex: 3,
    // minWidth: 400
  }
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.experience || ''}`,
  //   headerClassName: 'cell-header'
  // }
];


const Xrows = [
  {
    id: 1,
    firstName: 'Jon',
    position: "Backend",
    experience: 5,
    ratePerHour: 30,
    rateCurrency: 'EUR',
    location: 'Poland',
    technologies: 'Pithon, PostgreSQL, FastAPI',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
  },
  {
    id: 2,
    firstName: 'Cersei',
    position: 'Frontend',
    experience: 35,
    ratePerHour: 30,
    rateCurrency: 'USD',
    location: 'USA',
    technologies: 'React, Vue, jss',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
  },
  {
    id: 3,
    firstName: 'Jaime',
    position: 'Backend',
    experience: 5,
    ratePerHour: 30,
    rateCurrency: 'EUR',
    location: 'Poland',
    technologies: 'Pithon, PostgreSQL, FastAPI',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
  },
  {
    id: 4,
    firstName: 'Arya',
    position: 'Backend',
    experience: 5,
    ratePerHour: 30,
    rateCurrency: 'EUR',
    location: 'Poland',
    technologies: 'Pithon, PostgreSQL, FastAPI',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
  },
  {
    id: 5,
    firstName: 'Daenerys',
    position: 'PO',
    experience: null,
    ratePerHour: 30,
    rateCurrency: 'USD',
    location: 'Poland',
    technologies: 'Pithon, PostgreSQL, FastAPI',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
  },
  {
    id: 6,
    firstName: null,
    position: 'Frontend',
    experience: 3,
    ratePerHour: 30,
    rateCurrency: 'USD',
    location: 'USA',
    technologies: 'React, Vue, jss',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
  },
  {
    id: 7,
    firstName: 'Ferrara',
    position: 'PO',
    experience: 4,
    ratePerHour: 30,
    rateCurrency: 'USD',
    location: 'USA',
    technologies: 'React, Vue, jss',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
  },
  {
    id: 8,
    firstName: 'Rossini',
    position: 'Backend',
    experience: 8,
    ratePerHour: 5,
    rateCurrency: 'USD',
    location: 'USA',
    technologies: 'React, Vue, jss',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
  },
  {
    id: 9,
    firstName: 'Harvey',
    position: 'Backend',
    experience: 65,
    ratePerHour: 20,
    rateCurrency: 'USD',
    location: 'Poland',
    technologies: 'Pithon, PostgreSQL, FastAPI',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
  }
];

const QQrows = [
  {
    "id": 1,
    "firstName": "Jon",
    "position": "Backend",
    "experience": 5,
    "ratePerHour": 30,
    "rateCurrency": "EUR",
    "location": "Poland",
    "technologies": ["Pithon", "PostgreSQL", "FastAPI"],
    "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
  },
  {
    "id": 2,
    "firstName": "Cersei",
    "position": "Frontend",
    "experience": 35,
    "ratePerHour": 30,
    "rateCurrency": "USD",
    "location": "USA",
    "technologies": ["React", "Vue", "jss"],
    "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
  },
  {
    "id": 3,
    "firstName": "Jaime",
    "position": "Backend",
    "experience": 5,
    "ratePerHour": 20,
    "rateCurrency": "EUR",
    "location": "Poland",
    "technologies": ["Pithon", "PostgreSQL", "FastAPI"],
    "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
  },
  {
    "id": 4,
    "firstName": "Arya",
    "position": "Backend",
    "experience": 5,
    "ratePerHour": 30,
    "rateCurrency": "EUR",
    "location": "Poland",
    "technologies": ["Pithon", "PostgreSQL", "FastAPI"],
    "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
  },
  {
    "id": 5,
    "firstName": "Daenerys",
    "position": "PO",
    "experience": null,
    "ratePerHour": 30,
    "rateCurrency": "USD",
    "location": "Poland",
    "technologies": ["Pithon", "PostgreSQL", "FastAPI"],
    "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
  },
  {
    "id": 6,
    "firstName": null,
    "position": "Frontend",
    "experience": 3,
    "ratePerHour": 30,
    "rateCurrency": "USD",
    "location": "USA",
    "technologies": ["React", "Vue", "jss"],
    "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
  },
  {
    "id": 7,
    "firstName": "Ferrara",
    "position": "PO",
    "experience": 4,
    "ratePerHour": 30,
    "rateCurrency": "USD",
    "location": "USA",
    "technologies": ["React", "Vue", "jss"],
    "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
  },
  {
    "id": 8,
    "firstName": "Rossini",
    "position": "Backend",
    "experience": 8,
    "ratePerHour": 5,
    "rateCurrency": "USD",
    "location": "USA",
    "technologies": ["React", "Vue", "jss"],
    "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
  },
  {
    "id": 9,
    "firstName": "Harvey",
    "position": "Backend",
    "experience": 65,
    "ratePerHour": 20,
    "rateCurrency": "USD",
    "location": "Poland",
    "technologies": ["Pithon", "PostgreSQL", "FastAPI"],
    "description": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
  }
];
// Props
// https://mui.com/x/api/data-grid/data-grid/


 


export default function DataTable() {
  const [rows, setRows] = useState([]);

  const url = 'https://mocki.io/v1/be84b782-e759-4311-8b3b-a0f9eed79874';

  const getGridDataPromise = () => (
    fetch(url).then((response)=>{
      // return response;  // .json() converting byte data to json
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) { // .json() ?
        setRows(data)
        // return data;
      })
    }).catch(error=>{
        // logging error
      return (error);
    })
  );

  useEffect(() => {
    // setRows(getGridDataPromise)
    getGridDataPromise()
  }, []);

  console.log("rows", rows)

  return (
    <div className='grid-wrap' style={{ height: 400, width: 'auto', padding: '0 60px' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // onCellClick={(value) => {alert(value)}}
          // checkboxSelection
          // autoPageSize
          // rowHeight
          sx={{
            // boxShadow: 2,
            // border: 2,
            // borderColor: 'primary.light',
            // '& .MuiDataGrid-cell:hover': {
            //   color: '#0f0',
            // },
            '& .cell-header': {
              // backgroundColor: 'rgba(255, 7, 0, 0.55)',
              // fontSize: 16
              fontWeight: 600,
              backgroundColor: '#f7f7f7'
            },
          }}
        />
    </div>
  );
}