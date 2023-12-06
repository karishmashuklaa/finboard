import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox'
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { useMemo } from 'react';
import { useData } from '@/state/context';

const Row3 = () => {
  const data = useData();
  const { palette } = useTheme();

  const transactionColumns = [
    {
      field: 'date',
      headerName: 'Date',
      flex: 0.5,
    },
    {
      field: 'type',
      headerName: 'Type',
      flex: 0.5,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      flex: 0.5,
      renderCell: (params: GridCellParams) => `${params.value}`
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 0.5,
      renderCell: (params: GridCellParams) => `${params.value}`
    }

  ];

  const transactionData = useMemo(() => {
    return data?.transactions.map((transaction) => {
      return {
        id: transaction.id,
        date: transaction.transactionDate,
        type: transaction.type,
        amount: transaction.amount,
        status: transaction.status
      }
    })
  }, [data?.transactions])

  return (
    <>
      <DashboardBox
        gridArea="g"
      >
        <BoxHeader
          title="Recent Transactions"
          sideText={`${transactionData?.length} latest orders`}
        />
        <Box
          mt='1rem'
          p='0 0.5rem'
          height='100%'
          width='100%'
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: 'none',
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]}`,
              fontSize: '14px', 
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]}`,
              fontSize: '16px', 
            },
            "& .MuiDataGrid-columnHeader:focus": {
              backgroundColor: 'transparent', 
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: 'hidden',
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={30}
            rowHeight={50}
            hideFooter={true}
            rows={transactionData || []}
            columns={transactionColumns}
          />
        </Box>
      </DashboardBox>
    </>
  )
}

export default Row3;