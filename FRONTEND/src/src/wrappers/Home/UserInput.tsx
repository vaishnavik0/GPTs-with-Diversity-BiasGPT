import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useToast } from "../../components/ui/use-toast";

type PageProps = {
  arrowDirection: string;
  setUserResponse?: any;
  setLoader?: any;
};

const UserInput = ({
  arrowDirection,
  setUserResponse,
  setLoader,
}: PageProps) => {
  const [userPrompt, setUserPrompt] = useState("");
  const { toast } = useToast()

  const handleSendRequest = () => {
    if(userPrompt === ""){
      toast({
        title: "Please enter a valid input",
        variant: "destructive"
      })
    }else {
      setLoader(true);

      axios
        .post("https://biasgptbackend.vercel.app/chat", {
          modelName: "Model A",
          userPrompt: userPrompt,
        })
        .then((response) => {
          setUserResponse({
            modelResponse: response.data.response,
            userPrompt: userPrompt
          }); 
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          setLoader(false);
          setUserPrompt("") 
        });
    }
  
  };

  return (
    <div className="w-full gap-10 flex justify-center flex-col items-center ">
      <div className="relative w-full">
        <Textarea
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          placeholder="Enter your prompt here"
          className="bg-[#0C0F19] w-[80vw] text-xl p-3"
          required
        ></Textarea>
        <Button
          type="submit"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-2xl text-white transition-all hover:bg-transparent hover:scale-100"
        >
          {arrowDirection == "up" ? (
            <CircleArrowUp
              size={24}
              strokeWidth={2}
              onClick={handleSendRequest}
            />
          ) : (
            <CircleArrowDown
              size={24}
              strokeWidth={2}
              onClick={handleSendRequest}
            />
          )}
        </Button>
      </div>
    </div>
  );
};

export default UserInput;
