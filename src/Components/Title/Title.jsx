
const Title = ({heading,paragraph }) => {
    return (
        <div className="pb-12 pt-12">
            <h2 className="lg:text-4xl text-xl font-semibold text-center text-[#E246C1] mb-6">{heading}</h2>
            <p className="lg:text-lg text-base text-gray-700 mx-auto text-center w-[70%]">{paragraph}</p>
        </div>
    );
};

export default Title;