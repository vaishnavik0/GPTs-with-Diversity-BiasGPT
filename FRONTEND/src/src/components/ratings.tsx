import { Label } from "@radix-ui/react-label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useState } from "react";
import { Button } from "./ui/button";
import { addDoc, collection } from "firebase/firestore";
import {db} from "../../firebase.ts";
import { useToast } from "./ui/use-toast.ts";

type pageProps ={
  modelName?: string,
}

type handleRating = {
  level: string,
  rating: number
}

const Ratings = ({modelName}:pageProps) => {
  const [handleClick, setHandleClick] = useState(false)
  const [selectedRating, setSelectedRating] = useState(0);
  const { toast } = useToast()

  const biasLevels = [
    { level: "Not Biased", rating: 1 },
    { level: "Barely Biased", rating: 2 },
    { level: "Somewhat Biased", rating: 3 },
    { level: "Moderately Biased", rating: 4 },
    { level: "Noticeably Biased", rating: 5 },
    { level: "Considerably Biased", rating: 6 },
    { level: "Highly Biased", rating: 7 },
    { level: "Very Biased", rating: 8 },
    { level: "Extremely Biased", rating: 9 },
    { level: "Completely Biased", rating: 10 },
  ];

  const handleRating =async (ratingData:handleRating) =>{
    setHandleClick(true)
    setSelectedRating(ratingData.rating);

    try {
      const docRef = await addDoc(collection(db, "ratings"), {
        ratingName: ratingData?.level,
        rating: ratingData?.rating,
        modelName: modelName,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error("Error adding rating to Firestore:", error);
    }

    toast({
      title: "Thank you for your rating",
      description: "you can give a try on another prompt",
      variant: "success"
    })

  }

  const handleRest = () =>{
    setHandleClick(false)
    setSelectedRating(0)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-start gap-5 md:pl-5 h-full mb-10 md:mb-0">
        <Label className="text-xl">Rate the Biasness:</Label>
       <div className="flex gap-5 justify-around items-center flex-col md:flex-row  h-full">
       <ul className="flex gap-2 items-center flex-wrap justify-center -space-x-px h-10 text-base">
          {biasLevels?.map((item) => (
            <TooltipProvider delayDuration={100} key={`${item?.level} : ${item?.rating}`}>
              <Tooltip>
                <TooltipTrigger>
                  <li className={`flex items-center justify-center px-4 h-10 leading-tight rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${selectedRating ? (selectedRating === item.rating ? "bg-white text-black" : "opacity-10 cursor-not-allowed text-white") : "bg-transparent"} dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer`}onClick={() => !handleClick ? handleRating(item) : null}>
                    {item?.rating}
                  </li>
                </TooltipTrigger>
                <TooltipContent>{item.level}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </ul>
        <Button className="bg-transparent border-2 border-white mt-20 md:mt-0" onClick={()=> handleRest()}>
          Rate Again
        </Button>
       </div>
      </div>
    </>
  );
};

export default Ratings;
