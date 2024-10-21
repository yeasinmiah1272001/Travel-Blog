const SectionTitle = ({ title, subtitle }) => {

  
  return (
    <div className="flex flex-col justify-center items-center text-center mt-16">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-lg">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
