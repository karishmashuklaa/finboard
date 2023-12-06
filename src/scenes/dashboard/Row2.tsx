import DashboardBox from '@/components/DashboardBox'
import BoxHeader from '@/components/BoxHeader';
import { CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';
import { useTheme, Box, Typography } from "@mui/material";
import FlexBetween from '@/components/FlexBetween';
import { useData } from '@/state/context';
import Container from '@/components/Container';
import { pieData, turnover } from '@/data/chartData';

const Row2 = () => {
  const data = useData();
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];

  return (
    <>
      <DashboardBox gridArea="f">
        <BoxHeader title="Turnover" sideText="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
            data={turnover}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis tickLine={false} style={{ fontSize: '10px' }} dataKey="name" />
            <YAxis yAxisId="left" orientation="left" tickLine={false} style={{ fontSize: '10px' }} axisLine={false} />
            <YAxis yAxisId="right" orientation="right" tickLine={false} style={{ fontSize: '10px' }} axisLine={false} />
            <Tooltip />
            <Line yAxisId="left" type="monotone" dataKey="Non Operational Expenses" stroke={palette.tertiary[500]} />
            <Line yAxisId="right" type="monotone" dataKey="Operational Expenses" stroke={palette.primary.main} />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox
        gridArea="e"
      >
        <BoxHeader
          title="Loan Interest"
        />
        <FlexBetween mt='0.25rem' gap='1.5rem' pr='1rem'>
          <PieChart
            width={110}
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}
          >
            <Pie
              stroke='none'
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>
          <Box
            ml='-0.7rem'
            flexBasis='40%'
            textAlign='center'
          >
            <Typography
              variant='h5'
            >
              Interest Rate
            </Typography>
            <Typography
              m='0.3rem 0'
              variant='h3'
              color={palette.primary[300]}
            >
              {data.loanInterest}
            </Typography>
            <Typography
              variant='h6'
            >
              The annual percentage rate (APR) charged for borrowing, representing the cost of the loan.
            </Typography>
          </Box>
          <Box
            flexBasis='40%'
          >
            <Typography
              variant='h5'
            >
              Loan Term
            </Typography>
            <Typography
              variant='h6'
            >
              The period over which the loan will be repaid is 5 years. Monthly payment set to $4,000*
            </Typography>
          </Box>
        </FlexBetween>
      </DashboardBox>
      <DashboardBox
        gridArea="d"
      >
        <BoxHeader
          title="Loan Amount"
        />
        <ResponsiveContainer width="100%" height='100%' >
          <Container>
            <h1>{data.loanAmount}</h1>
            <p style={{ marginTop: '-1rem' }}>At an interest rate of 5.5% annually and monthly deposit of $4,000* </p>
          </Container>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  )
}

export default Row2;