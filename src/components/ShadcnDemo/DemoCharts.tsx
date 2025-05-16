import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '../ui/card'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Tooltip,
  Legend,
  Bar,
  Scatter,
  ScatterChart,
  ComposedChart,
  Area,
} from 'recharts'

export const DemoCharts = () => {
  return (
    <>
      <h2 className="text-xl font-bold">Chart Showcase</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Line Chart</CardTitle>
            <CardDescription>Line Chart, courtesy of Recharts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                width={500}
                height={300}
                data={lineChartData}
                margin={{top: 5, right: 20, bottom: 5, left: 0}}
              >
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Radar Chart</CardTitle>
            <CardDescription>Radar Chart Example, courtesy of Recharts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarChartData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pie Chart</CardTitle>
            <CardDescription>Pie Chart, courtesy of Recharts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart width={800} height={400}>
                <Pie
                  data={pieData}
                  innerRadius={90}
                  outerRadius={120}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label
                  labelLine={false}
                  legendType="line"
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}></Cell>
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bar Chart</CardTitle>
            <CardDescription>Bar Chart, courtesy of Recharts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={lineChartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  interval={0}
                  height={1}
                  scale="band"
                  xAxisId="quarter"
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Scatter Chart</CardTitle>
            <CardDescription>Scatter Chart, courtesy of Recharts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart
                width={400}
                height={400}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                <Tooltip cursor={{strokeDasharray: '3 3'}} />
                <Scatter name="A school" data={scatterData} fill="#8884d8">
                  {scatterData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Composed Line + Bar + Area Chart</CardTitle>
            <CardDescription>Courtesy of Recharts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart width={500} height={400} data={scatterData}>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="x" scale="band" />
                <YAxis label={{value: 'z', angle: -90, position: 'insideLeft'}} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="x" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="y" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="z" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

const lineChartData = [
  {name: 'Anna', uv: 400, pv: 1000, amt: 2400},
  {name: 'Bert', uv: 200, pv: 700, amt: 1200},
  {name: 'Carol', uv: 300, pv: 500, amt: 500},
  {name: 'David', uv: 100, pv: 900, amt: 1800},
  {name: 'Ella', uv: 50, pv: 1400, amt: 200},
]
const pieData = lineChartData.map(({name, uv}) => ({name, value: uv}))

const radarChartData = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
]
const scatterData = [
  ...lineChartData.map(({uv, pv, amt}) => ({x: uv, y: pv, z: amt})),
  ...radarChartData.map(({A, B, fullMark}) => ({x: A * 2, y: B * 4, z: fullMark})),
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8A2BE2']
