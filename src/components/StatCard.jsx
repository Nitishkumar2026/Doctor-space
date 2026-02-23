function StatCard({ icon, value, label, bgColor = 'bg-blue-50' }) {
  return (
    <div className={`${bgColor} p-6 rounded-xl`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-3xl">{icon}</span>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default StatCard;
