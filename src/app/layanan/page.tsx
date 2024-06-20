import CardServices from "@/components/CardServices";
import { servicesList } from "@/helpers/servicesList";

export default function layanan() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-11 px-11 my-11">
                {servicesList.map((data, index) => (
                    <CardServices image={data.image} title={data.title} description={data.description} />
                ))}
            </div>
        </>
    )
}