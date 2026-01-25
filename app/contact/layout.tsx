const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full absolute top-0 h-30 bg-neutral-900"></div>
      {children}
    </>
  );
};

export default ContactLayout;
