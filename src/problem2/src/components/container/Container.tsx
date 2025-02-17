interface IProps {
  children: React.ReactNode;
}

const Container = ({ children }: IProps) => {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col px-5">
      {children}
    </div>
  );
};

export default Container;
