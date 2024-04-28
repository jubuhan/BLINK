"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';


export default function Hero() {

const [isLoggedIn, setIsLoggedIn] = React.useState(false);
const navigate = useNavigate();
React.useEffect(() => {
  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setIsLoggedIn(!!user);
  });

  return unsubscribe;
}, [navigate]);



  return <HeroParallax products={products} login={isLoggedIn} />;
}
export const products = [
  {
    title: "1",
    thumbnail:"https://images.pexels.com/photos/5996603/pexels-photo-5996603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "2",
    thumbnail:"https://images.pexels.com/photos/5996689/pexels-photo-5996689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "3",
    thumbnail:"https://images.pexels.com/photos/5752289/pexels-photo-5752289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    title: "4",
    thumbnail:"https://images.pexels.com/photos/5765827/pexels-photo-5765827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "5",
    thumbnail:"https://img.freepik.com/free-vector/eye-care-test-board-with-latin-letters-flat_1284-53683.jpg?t=st=1710266750~exp=1710270350~hmac=d11f13ede59c9ac7a69f14acb7e0f7f3f44183b540630c74ecad924179eef46e&w=900",
  },
  {
    title: "6",
    thumbnail:"https://img.freepik.com/free-vector/isometric-ophthalmology-illustration_1284-56388.jpg?t=st=1710265705~exp=1710269305~hmac=e4bb22945ca9759b7e349ed2e8e65ee58f1046b18e4d83dd25c2b6dbc73921ae&w=1380",
  },

  {
    title: "7",
    thumbnail:"https://img.freepik.com/free-photo/medium-shot-woman-getting-her-eyes-checked_23-2150801430.jpg",
  },
  {
    title: "8",
    thumbnail:"https://img.freepik.com/free-vector/ophthalmologist-concept-illustration_114360-6022.jpg?t=st=1710266777~exp=1710270377~hmac=6e4980fcbe65942b11d0ddafd90efd20837b7a24673f2a4e7317999e048be3bb&w=900",
  },
  {
    title: "9",
    thumbnail:"https://img.freepik.com/free-photo/numbers-table-optics-consultation_23-2148320339.jpg?w=1380",
  },
  {
    title: "10",
    thumbnail:
      "https://images.pexels.com/photos/5715895/pexels-photo-5715895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "11",
    thumbnail:
      "https://images.pexels.com/photos/5752293/pexels-photo-5752293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    title: "12",
    thumbnail:
      "https://images.pexels.com/photos/5201881/pexels-photo-5201881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "13",
    thumbnail:
      "https://images.pexels.com/photos/5932722/pexels-photo-5932722.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "14",
    thumbnail:
      "https://images.pexels.com/photos/5752316/pexels-photo-5752316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "15",
    thumbnail:
      "https://img.freepik.com/free-vector/eye-test-concept-illustration_114360-23068.jpg?t=st=1710266852~exp=1710270452~hmac=e3bdcc63b7fa649accf92e9857fe20843f805c3baf7dc5f535ea868f387946ae&w=900",
  },
];
