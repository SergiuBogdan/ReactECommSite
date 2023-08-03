import React from "react";

const OrderCompleted = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-full bg-green-100 border border-green-500 text-green-900 px-4 py-2 rounded-md text-center">
        <p className="text-lg font-semibold text-uppercase">
          Order sent successfully!
        </p>
      </div>
    </div>
  );
};

export default OrderCompleted;
