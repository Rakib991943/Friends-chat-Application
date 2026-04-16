import Card from "@/Components/Card/Card";
import Image from "next/image";

export default async function Home() {


  const res = await fetch('http://localhost:3000/friends.json')


const friends = await res.json();



  return (
   <div className="w-11/12 mx-auto mt-7">
     <h2 className="text-3xl font-bold mb-3"> Friends </h2>

     <div className="grid grid-cols-4 gap-4">
      {
        friends.map((friend)=> <Card key={friend.id} friend={friend}></Card>)
      }
     </div>
   </div>
  );
}
