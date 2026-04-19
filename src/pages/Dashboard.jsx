import FoodCard from "../components/FoodCard";
import SummaryBar from "../components/SummaryBar";

function Dashboard({ foodList, getDaysLeft, getStatus, deleteFood }) {
  // Expiry date ke hisaab se sort karo — nearest expiry pehle
  const sortedList = [...foodList].sort(
    (a, b) => new Date(a.expiryDate) - new Date(b.expiryDate)
  );

  // Alert: kitne items aaj expire ho rahe hain?
  const expiringToday = foodList.filter(
    (food) => getDaysLeft(food.expiryDate) === 0
  ).length;

  return (
    <div className="page">
      <h1 className="page-title">Dashboard</h1>

      {/* Smart alert banner */}
      {expiringToday > 0 && (
        <div className="alert-banner">
          ⚠️ {expiringToday} item(s) expiring today!
        </div>
      )}

      {/* Summary counts */}
      <SummaryBar foodList={foodList} getStatus={getStatus} />

      {/* Food cards */}
      {sortedList.length === 0 ? (
        <div className="empty-state">
          <p>No food items added yet.</p>
          <p>Go to "+ Add Food" to get started!</p>
        </div>
      ) : (
        <div className="food-grid">
          {sortedList.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              daysLeft={getDaysLeft(food.expiryDate)}
              status={getStatus(food.expiryDate)}
              onDelete={deleteFood}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;