import Link from "next/link";

type Props = {
    category: string;
    isActive: boolean;
};

const Navlink = ({ category, isActive }: Props) => {
    return (
        <Link
            href={`news/${category}`}
            className={`text-lightWhite text-center capitalize px-[22px] py-[12px] rounded-[15px] bg-darkTealBlue 
      font-poppins cursor-pointer hover:font-bold hover:scale-110 transition-all
      duration-200 ease-out sm:text-[16px] text-[14px] dark:bg-secondaryDark ${
        isActive && 'bg-accentRed font-bold'}
      }`}
        >
            {category}
        </Link>
    );
};

export default Navlink;
