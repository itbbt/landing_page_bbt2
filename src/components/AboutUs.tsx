import Image from "next/image"

function AboutUs() {
    return (
        <>
            <div className="flex justify-evenly px-11 py-16 items-center">
                <div className="w-1/4">
                    <Image
                        src="/assets/logo-bbt.png"
                        alt="logo company"
                        className="z-0"
                        width={400}
                        height={160}
                    />
                </div>

                <div className="w-2/4 text-center">
                    <p className="text-[#1172B8] font-bold text-3xl text-center mb-4">About Us</p>
                    <p><span className="text-[#1172B8] font-bold">Buana Biru Teknindo</span> adalah leading technology company yang memiliki spesialisasi pada digitalisasi industri dan pemantauan lingkungan.
                    </p>
                    <br />
                    <p>Kami berkomitmen untuk memberikan monitoring system secara real-time, online, dan cost-effective dengan teknologi wireless yang kami kembangkan.</p>
                </div>
            </div>
        </>
    )
}

export default AboutUs