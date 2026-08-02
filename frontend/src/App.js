import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#A855F7",
  "#06B6D4",
];

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [categoryCount, setCategoryCount] = useState([]);
  const [sourceCount, setSourceCount] = useState([]);
  const [cityCount, setCityCount] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/businesses")
      .then((res) => setBusinesses(res.data))
      .catch(console.error);

    axios.get("http://127.0.0.1:8000/category-count")
      .then((res) => setCategoryCount(res.data))
      .catch(console.error);

    axios.get("http://127.0.0.1:8000/source-count")
      .then((res) => setSourceCount(res.data))
      .catch(console.error);

    axios.get("http://127.0.0.1:8000/city-count")
      .then((res) => setCityCount(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="dashboard">

      <header className="header">
        <h1>🏢 Business Listing Dashboard</h1>
      </header>

      <section className="cards">

        <div className="card">
          <h2>{businesses.length}</h2>
          <p>Total Businesses</p>
        </div>

        <div className="card">
          <h2>{categoryCount.length}</h2>
          <p>Categories</p>
        </div>

        <div className="card">
          <h2>{sourceCount.length}</h2>
          <p>Sources</p>
        </div>

        <div className="card">
          <h2>{cityCount.length}</h2>
          <p>Cities</p>
        </div>

      </section>

      <section className="chart-grid">

        <div className="chart-card">

          <h3>📊 Category Count</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryCount}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="total"
                fill="#3B82F6"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>

        </div>

        <div className="chart-card">

          <h3>🥧 Source Distribution</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sourceCount}
                dataKey="total"
                nameKey="source"
                outerRadius={100}
                label
              >
                {sourceCount.map((item, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

        </div>

        <div className="chart-card">

          <h3>🏙 City Count</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cityCount}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="total"
                fill="#22C55E"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>

        </div>

        <div className="chart-card">

          <h3>📈 Business Growth</h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={categoryCount}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#38BDF8"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>

      </section>

      <section className="table-card">

        <h2>📋 Latest Business Listings</h2>

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Business</th>
              <th>Category</th>
              <th>City</th>
              <th>Source</th>
            </tr>
          </thead>

          <tbody>

            {businesses.slice(0, 10).map((item) => (

              <tr key={item.id}>

                <td>{item.id}</td>

                <td>{item.business_name}</td>

                <td>{item.category}</td>

                <td>{item.city}</td>

                <td>{item.source}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </section>

    </div>
  );
}

export default App;