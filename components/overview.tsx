"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

// Sample data for the chart
const data = [
  {
    name: "Jan",
    views: 120,
    scans: 30,
  },
  {
    name: "Feb",
    views: 160,
    scans: 45,
  },
  {
    name: "Mar",
    views: 180,
    scans: 60,
  },
  {
    name: "Apr",
    views: 220,
    scans: 80,
  },
  {
    name: "May",
    views: 280,
    scans: 100,
  },
  {
    name: "Jun",
    views: 250,
    scans: 90,
  },
  {
    name: "Jul",
    views: 300,
    scans: 120,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="views" fill="#8884d8" name="Profile Views" />
        <Bar dataKey="scans" fill="#82ca9d" name="NFC Scans" />
      </BarChart>
    </ResponsiveContainer>
  )
}

