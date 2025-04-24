import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

function PaypalReturnPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paymentId = params.get("paymentId");
  const payerId = params.get("PayerID");

  useEffect(() => {
    if (paymentId && payerId) {
      const orderId = JSON.parse(sessionStorage.getItem("currentOrderId"));

      // Call the backend to capture the payment
      fetch("http://localhost:3001/execute-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId, payerId, orderId }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            sessionStorage.removeItem("currentOrderId");
            window.location.href = "/shop/payment-success";
          } else {
            console.error("Payment failed:", data);
            window.location.href = "/shop/payment-failed";
          }
        })
        .catch((err) => {
          console.error("Error capturing payment:", err);
          window.location.href = "/shop/payment-failed";
        });
    }
  }, [paymentId, payerId]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Processing Payment... Please wait!</CardTitle>
      </CardHeader>
    </Card>
  );
}

export default PaypalReturnPage;
