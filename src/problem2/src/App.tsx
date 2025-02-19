import { useState } from "react";
import Container from "./components/container/Container";
import { Card, CardContent, CardHeader } from "./components/ui/card";
import { Currency } from "./common/price";
import pricesData from "./data/prices.json";
import Select from "./components/select/Select";
import { Button } from "./components/ui/button";
import { ArrowRightLeft } from "lucide-react";
import NumberInput from "./components/input/NumberInput";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";

function App() {
  const [currencies] = useState<Currency[]>(pricesData);
  const [input, setInput] = useState<number>(1);
  const [currency1, setCurrency1] = useState<Currency>({
    currency: "ETH",
    date: "2023-08-29T07:10:52.000Z",
    price: 1645.9337373737374,
  });
  const [currency2, setCurrency2] = useState<Currency>({
    currency: "USD",
    date: "2023-08-29T07:10:30.000Z",
    price: 1,
  });
  const [result, setResult] = useState<number>(0);

  const handleSwap = (): void => {
    const curr1 = currency1;
    setCurrency1(currency2);
    setCurrency2(curr1);
  };

  const calConversion = (): void => {
    const total = (currency1.price * input) / currency2.price;
    setResult(total);
  };

  return (
    <div className="bg-blue-400/20">
      <Container>
        <h1 className="mb-10 text-4xl font-bold text-center text-blue-500">
          CURRENCY CONVERTER
        </h1>
        <Card className="w-full ">
          <CardHeader></CardHeader>
          <div className="grid grid-cols-2">
            <CardContent className="grid gap-4 items-center grid-cols-7 md:col-span-1 col-span-2">
              <div className="col-span-3">
                <div>From</div>
                <Select
                  currencies={currencies}
                  chosen={currency1}
                  otherChosen={currency2}
                  setChosen={setCurrency1}
                />
                <div className="flex gap-1 mt-2 px-2 truncate">
                  1{" "}
                  <img
                    src={`../../public/tokens/${currency1.currency}.svg`}
                    alt={`${currency1}`}
                    className="w-5"
                  />{" "}
                  {currency1.currency} = ${currency1.price}
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <Button
                  variant={"ghost"}
                  children={
                    <ArrowRightLeft className="w-16 h-16 hover:text-blue-500" />
                  }
                  className="cursor-pointer"
                  onClick={() => handleSwap()}
                  asChild
                />
              </div>

              <div className="col-span-3">
                <div>Convert to</div>
                <Select
                  currencies={currencies}
                  chosen={currency2}
                  otherChosen={currency1}
                  setChosen={setCurrency2}
                />
                <div className="flex gap-1 mt-2 px-2 truncate">
                  1{" "}
                  <img
                    src={`../../public/tokens/${currency2.currency}.svg`}
                    alt={`${currency2}`}
                    className="w-5"
                  />{" "}
                  {currency2.currency} = ${currency2.price}
                </div>
              </div>
            </CardContent>
            <CardContent className="md:col-span-1 col-span-2">
              <div>
                <NumberInput input={input} setInput={setInput} />
              </div>
              {result !== 0 && (
                <div className="mt-2">
                  <Label>Receive</Label>
                  <Input
                    className="h-16 [&:not(:placeholder-shown)]:text-lg [&::placeholder]:text-lg"
                    value={result}
                    disabled
                  />
                </div>
              )}
            </CardContent>
          </div>
          <div className="grid ">
            <CardContent className="flex justify-center">
              <Button
                onClick={() => calConversion()}
                disabled={input === 0}
                className="cursor-pointer bg-blue-500 hover:bg-blue-500/90"
              >
                Covert
              </Button>
            </CardContent>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default App;
