import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabase = createClient(
  "https://tvwekwohafzwojqwkuaw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2d2Vrd29oYWZ6d29qcXdrdWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMDg4NDAsImV4cCI6MjAwMzU4NDg0MH0.hutfQaax4HpfhD-AiORLc4027L5xIK7E64YhGFtaeNE"
);

export default function Shirts() {
  // implement useState here
  const [Shirts, setShirts] = useState({});
  const [isShirtsLoading, setIsShirtsLoading] = useState(true);
  async function getShirts() {
    const { data, error } = await supabase
      .from("Products")
      .select()
      .eq("item_id", "1");
    // setShirts(data);
    // console.log(data);
    setShirts(data);
    setIsShirtsLoading(false);
  }
  getShirts();
  return (
    <div>
      <h1>Type of Item: {isShirtsLoading ? "loading" : Shirts[0].item_name}</h1>
      <h1>Item ID: {isShirtsLoading ? "loading" : Shirts[0].item_id}</h1>
      <h1>
        Number available:{" "}
        {isShirtsLoading ? "loading" : Shirts[0].quantity_in_stock}
      </h1>
      <h1>
        Number previously sold:{" "}
        {isShirtsLoading ? "loading" : Shirts[0].quantity_sold}
      </h1>
      <h1>Price: ${isShirtsLoading ? "loading" : Shirts[0].price}</h1>
    </div>
  );
}
