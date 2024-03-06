import React from "react";

function OrderDetails({ params, searchParams }) {
  const { hello } = searchParams;
  const { id } = params;

  console.log(id);

  return (
    <div>
      {id}
      <br />
      {hello}
    </div>
  );
}

export default OrderDetails;
