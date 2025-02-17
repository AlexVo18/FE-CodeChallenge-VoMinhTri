import { useEffect, useState } from "react";
import Container from "./components/container/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Currency } from "./common/price";
import pricesData from "./data/prices.json";
import Select from "./components/select/Select";
import { Button } from "./components/ui/button";
import { ArrowRightLeft } from "lucide-react";

function App() {
  const [prices] = useState<Currency[]>(pricesData);
  const [isLoading, setIsLoading] = useState(false);
  const [currency1, setCurrency1] = useState<Currency | null>(null);
  const [currency2, setCurrency2] = useState<Currency | null>(null);

  useEffect(() => {}, []);

  const onSwap = () => {};

  return (
    <>
      <Container>
        {isLoading ? (
          <></>
        ) : (
          prices && (
            <>
              <Card className="w-full ">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <Select
                    prices={prices}
                    chosen={currency1}
                    onChoose={setCurrency1}
                  />
                  <Button
                    variant={"ghost"}
                    children={<ArrowRightLeft />}
                    className="cursor-pointer"
                  />
                  <Select
                    prices={prices}
                    chosen={currency2}
                    onChoose={setCurrency2}
                  />
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </>
          )
        )}
      </Container>
    </>
  );
}

export default App;
