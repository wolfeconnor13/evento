type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col max-w-[1600px] mx-auto min-h-screen bg-white/[2%]">
      {children}
    </div>
  );
}
