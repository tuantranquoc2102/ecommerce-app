import { Card, CardContent } from "@shared/ui/card";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card><CardContent>Total Revenue: $10.54</CardContent></Card>
        <Card><CardContent>Orders: 1056</CardContent></Card>
        <Card><CardContent>Unique Visits: 5420</CardContent></Card>
        <Card><CardContent>New Users: 1650</CardContent></Card>
      </div>

      {/* Chart + Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card >
          <CardContent>Chart here</CardContent>
        </Card>
        <Card>
          <CardContent>Recent Transactions</CardContent>
        </Card>
      </div>
    </div>
  );
}