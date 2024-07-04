"use client" 
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { decrement, increment, incrementByAmount } from "@/redux/features/counterSlice";

export default function Home() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button className="" onClick={() => dispatch(increment())}>Increment</button><br />
      <button onClick={()=> dispatch(decrement())}>Dicriment</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>Increment with 2</button>
    </>
  );
}
