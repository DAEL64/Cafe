const BookLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full absolute top-0 h-30 bg-[#1c1917]"></div>
      {children}
    </>
  );
};

export default BookLayout;
