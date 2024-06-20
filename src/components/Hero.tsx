import Image from "next/image"

function Hero() {
    return (
        <>
            <div className="flex justify-between w-full h-[600px]">
                <div className="w-1/4 flex flex-col justify-center gap-4 relative z-50 ml-12">
                    <div className="text-6xl flex font-bold tracking-widest gap-4">
                        <p className="">Empowering</p>
                        <p className="text-white">Industries</p>
                    </div>
                    <div className="text-5xl flex font-bold tracking-widest gap-4">
                        <p>Ensuring</p>
                        <p>Water</p>
                        <p className="text-white">Security</p>
                    </div>
                    <p className="tracking-[3px]">A Leading Technology Company Specializing in Industrial Digitization and Environmental Monitoring</p>
                </div>
                <div className="w-3/4 relative -z-0 right-0 ml-12">
                    <Image
                        src="/assets/hero.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="Hero background"
                        className="z-0"

                    />
                </div>
            </div>
        </>
    )
}

export default Hero