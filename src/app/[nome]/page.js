"use client";
import Image from "next/image";

import {useParams} from 'next/navigation';

export default function Home() {
  const params=useParams();

  return (
    <div >
      <h1>Hello {params.nome}</h1>
    </div>
  );
}
