import DashboardBox from '@/components/DashboardBox'
import {
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
} from 'recharts';
import { LinearProgress, useTheme } from '@mui/material';
import BoxHeader from '@/components/BoxHeader';
import { useData } from '@/state/context';
import Container from '@/components/Container';
import { netProfit } from '@/data/chartData';

const Row1 = () => {
  const data = useData();
  const { palette } = useTheme();

  return (
    <>
      <DashboardBox
        gridArea="a"
      >
        <BoxHeader
          title="Raised Capital"
          sideText='Last 12 months'
        />
        <ResponsiveContainer width="100%" height="100%">
          <Container>
            <h1>
              {data.raisedCapital}
            </h1>
            <p>
              Total Raised
            </p>
            <LinearProgress
              variant="determinate"
              value={50}
              sx={{
                height: '10px',
                borderRadius: '10px',
                width: '350px',
                '& .MuiLinearProgress-bar': {
                  borderRadius: '10px',
                  backgroundColor: palette.primary.main,
                },
              }}
            />
            <p>
              50% of $10,000,000 raised
            </p>
          </Container>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="b">
        <BoxHeader
          title="Net Profit"
          subtitle="top line revenue and bottom line expenses"
          sideText="+6%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
            data={netProfit}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis tickLine={false} style={{ fontSize: '10px' }} dataKey="name" />
            <YAxis yAxisId="left" tickLine={false} style={{ fontSize: '10px' }} axisLine={false} />
            <YAxis yAxisId="right" orientation="right" tickLine={false} style={{ fontSize: '10px' }} axisLine={false} />
            <Tooltip />
            <Legend height={20} wrapperStyle={{ margin: '0 0 10px 0' }} />
            <Line yAxisId="left" type="monotone" dataKey="profit" stroke={palette.tertiary[500]} />
            <Line yAxisId="right" type="monotone" dataKey="revenue" stroke={palette.primary.main} />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox
        gridArea="c"
      >
        <BoxHeader
          title="Employees"
        />
        <ResponsiveContainer width="100%" height="100%">
          <Container>
            <h1>{data.numberOfEmployees}</h1>
            <p><span>60%</span> employees are remote and <span>40%</span> are hybrid</p>
          </Container>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  )
}

export default Row1;