import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface Props {
  input: number;
  setInput: React.Dispatch<React.SetStateAction<number>>;
}

const NumberInput: React.FC<Props> = ({ input, setInput }: Props) => {
  const onInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;

    setInput(Number(value));
  };

  return (
    <Label>
      Amount
      <Input
        type="number"
        placeholder="Amount"
        value={input}
        onChange={(e) => onInput(e)}
        defaultValue={input}
        className="h-16 [&:not(:placeholder-shown)]:text-lg [&::placeholder]:text-lg"
      />
    </Label>
  );
};

export default NumberInput;
