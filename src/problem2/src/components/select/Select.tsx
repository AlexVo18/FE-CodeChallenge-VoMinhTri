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
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface IProps {
  prices: Currency[];
  chosen: Currency | null;
  onChoose: React.Dispatch<React.SetStateAction<Currency | null>>;
}

const Select = ({ prices, chosen, onChoose }: IProps) => {
  const [open, setOpen] = useState(false);

  const chooseCurrency = () => {
    setOpen(false);
    // onChoose();
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {chosen && chosen.currency
            ? prices.find((price) => price.currency === chosen.currency)
                ?.currency
            : "Choose a currency..."}
          {/* <ChevronsUpDown className="opacity-50" /> */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Choose a currency..." />
          <CommandList>
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandGroup>
              {prices.map((price, index) => (
                <CommandItem
                  key={index}
                  value={price.currency}
                  onSelect={() => chooseCurrency()}
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
