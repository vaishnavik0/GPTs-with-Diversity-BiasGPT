import Ratings from "../../components/ratings";
import { Card, CardDescription, CardHeader } from "../../components/ui/card";

type pageProps = {
  modelName: string;
  response?: string;
  model: string,
  userPrompt: string,
};

const ModelWrapper = ({ modelName, response, model, userPrompt }: pageProps) => {

  return (
    <div className="flex flex-col justify-center h-full items-start gap-5 py-4">
      <Card className="lg:w-[700px] lg:h-[480px] w-[100%] h-full p-4 flex flex-col justify-around items-center gap-10 bg-transparent text-white">
        <div className="flex flex-col justify-center items-end w-full">
        <CardHeader className="text-left p-0 text-2xl">
          User Prompt
        </CardHeader>
        <CardDescription className="text-left md:text-xl ">
          {userPrompt}
        </CardDescription>
        </div>
       <div className="flex flex-col justify-center items-start w-full">
       <CardHeader className="text-2xl p-0">
          {modelName} 
        </CardHeader>
        <CardDescription className="md:text-xl text-left overflow-y-scroll h-80">
          {response}
        </CardDescription>
       </div>
      </Card>
      <Ratings modelName={model} />
    </div>
  );
};

export default ModelWrapper;
