import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Currency } from "@/common/price";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  currencies: Currency[];
  chosen: Currency;
  setChosen: React.Dispatch<React.SetStateAction<Currency>>;
  otherChosen: Currency;
}

const Select: React.FC<Props> = ({
  currencies,
  chosen,
  setChosen,
  otherChosen,
}: Props) => {
  const [open, setOpen] = useState(false);

  const chooseCurrency = (value: string): void => {
    setOpen(false);

    setChosen(currencies.find((current) => current.currency === value)!);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="h-16 ">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          <div className="flex items-center gap-2">
            <img
              src={`../../public/tokens/${chosen.currency}.svg`}
              alt={`${chosen}`}
              className="w-8"
            />
            <span className="text-lg">
              {chosen && chosen
                ? currencies.find((price) => price.currency === chosen.currency)
                    ?.currency
                : "Choose a currency..."}
            </span>
          </div>

          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search for currency..." />
          <CommandList>
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandGroup>
              {currencies
                .filter(
                  (currency) => currency.currency !== otherChosen.currency
                )
                .map((price) => (
                  <CommandItem
                    key={price.currency}
                    value={price.currency}
                    onSelect={(value) => chooseCurrency(value)}
                  >
                    <img
                      src={`../../public/tokens/${price.currency}.svg`}
                      alt={`${price.currency}`}
                      className="w-6"
                    />
                    <span>{price.currency}</span>

                    <Check
                      className={cn(
                        "ml-auto",
                        chosen && chosen.currency === price.currency
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Select;
