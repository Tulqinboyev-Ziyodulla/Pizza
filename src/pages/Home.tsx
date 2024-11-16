import React, { useState } from 'react';

const Home: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('Все');

    const categories = [
        { name: 'Все', bgColor: '#282828', textColor: 'text-[#2C2C2C]', width: 'w-[82px]' },
        { name: 'Мясные', bgColor: '#282828', textColor: 'text-[#2C2C2C]', width: 'w-[132px]' },
        { name: 'Вегетарианская', bgColor: '#282828', textColor: 'text-[#2C2C2C]', width: 'w-[195px]' },
        { name: 'Гриль', bgColor: '#282828', textColor: 'text-[#2C2C2C]', width: 'w-[107px]' },
        { name: 'Острые', bgColor: '#282828', textColor: 'text-[#2C2C2C]', width: 'w-[120px]' },
        { name: 'Закрытые', bgColor: '#282828', textColor: 'text-[#2C2C2C]', width: 'w-[145px]' }
    ];

    const handleCategoryClick = (name: string) => {
        setActiveCategory(name);
    };

    return (
        <div className="flex justify-start mt-10">
            {categories.map((category, index) => (
                <button
                    key={index}
                    onClick={() => handleCategoryClick(category.name)}
                    className={`${activeCategory === category.name
                            ? 'bg-[#282828] text-white'
                            : `${category.bgColor} ${category.textColor}`
                        } ${category.width} h-[46px] rounded-[10px] text-[16px]`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default Home;
