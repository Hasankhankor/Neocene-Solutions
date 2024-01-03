"use client";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            catagory: "Mineral Exporation",
            title: "Mineral Exporationp",
            image: "https://www.mining-technology.com/wp-content/uploads/sites/19/2020/05/5-e1589884717877.jpg",
            description: "Geologists and exploration teams employ various techniques, such as geological mapping, geochemical analysis, and geophysical surveys, to identify potential areas for mineral resources.",
        },
        {
            id: "02",
            catagory: "Drilling",
            title: "Drilling",
            image: "https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg",
            description: "This process typically utilizes drill bits attached to rotating machinery to penetrate the Earth's crust",
        },
        {
            id: "03",
            catagory: "Mining",
            title: "Mining",
            image: "https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg",
            description: "Mining is the process of extracting valuable minerals or other geological materials from the Earth. This essential industry involves various techniques, including drilling, blasting, and excavation.",
        },
        {
            id: "04",
            catagory: "Engineering",
            title: "Engineering",
            image: "https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg",
            description: "Engineering",
        },
    ]

    return (
        <div className="grid gap-8 divide-gray-300 lg:divide-x lg:gap-0 lg:grid-cols-4 md:grid-cols-2">
            {items.map((item) => (
                <div key={item.id} className="relative overflow-hidden group">
                    <div>
                        <Image src={item.image} width={380} height={100} alt="" className="w-full " />
                    </div>
                    <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur">
                        <div className="flex justify-between pb-4 ">
                            <p className="text-sm">{item.catagory}</p>
                            <span className="text-sm ">{item.id}</span>
                        </div>
                        <a className="block text-xl font-semibold" href="">{item.title}</a>
                        <p className="py-4 text-gray-500">{item.description}</p>
                        <a className="inline-flex items-center font-medium" href="">See Details <TbArrowNarrowRight className="ml-2 text-xl " /></a>
                    </div>

                    <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
                        <p className="tracking-wider -rotate-90 ">{item.catagory} </p>
                        <span className="">
                            {item.id}
                        </span>

                    </div>
                </div>
            ))}
        </div>
    )
}