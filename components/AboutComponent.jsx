import Image from "next/image";

export default function AboutComponent() {
    return (
        <div className="container py-16">
            <div className="flex items-center justify-between pb-4">
                <a className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl" href="">WHY
CHOOSE US? </a>
                <p className="tracking-wider text-gray-400">WORLD AWARD</p>
            </div>
            <div className="grid lg:grid-cols-2 place-items-center ">
                <div>
                    <Image src="https://www.portableas.com/wp-content/uploads/Mining-in-Australia.jpg" width={900} height={500} alt="" className="max-md:hidden" />
                </div>

                <div className="items-center">
                    <p className="px-12 pb-4 ">
                    Neocene Solutions is dedicated to delivering an extensive array of services tailored to meet your specific needs.
                    Our offerings span from personalized one-on-one consultations, ensuring a deep understanding of your unique requirements,
                     to comprehensive full-scale operational support.
                      We pride ourselves on providing solutions that are not only versatile but also meticulously crafted to address the distinct challenges and objectives of our clients
                      . Whether you seek individualized guidance or seek to streamline your entire operational framework,
                      Neocene Solutions is committed to being your trusted partner in achieving success and realizing your goals.</p>
                    <div className="flex px-12 pt-4 gap-x-4 ">
                        <Image src="/image/awards.png" width={100} height={80} alt="" className=" h-[100px]" />
                        <Image src="/image/awards1.png" width={100} height={80} alt="" className=" h-[100px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}