import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const service = useLoaderData();

    const { title } = service;
    return (
        <div>
            <h1>{title}</h1>


            <form className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <input type="text" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Last Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="number" placeholder="Your Phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">

                    <input className="w-full bg-[#FF3811] text-white py-2 rounded-lg" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>

    );
};

export default CheckOut;