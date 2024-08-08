"use client";
import { useState, useEffect } from "react";
import Card from "components/card";
import CardMenu from "components/card/CardMenu";

export default function Company() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:4000/api/company");
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setData(null);
            }
        };

        fetchData();
    }, []);



    return (
        <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
            <div className="relative flex items-center justify-between pt-4">
                <div className="text-xl font-bold text-navy-700 dark:text-white">
                    Company Table
                </div>
                <CardMenu />
            </div>
            <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="!border-px !border-gray-400">
                            <th className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">ID</th>
                            <th className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">Company Name</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data ? (
                            <>
                                {
                                    data.map((company) => (
                                        <tr>
                                            <td key={company.id} className="min-w-[150px] border-white/0 py-3  pr-4">{company.id}</td>
                                            <td key={company.id} className="min-w-[150px] border-white/0 py-3  pr-4">{company.name}</td>
                                        </tr>
                                    ))
                                }
                            </>
                        ) : (
                            <td>No data</td>
                        )}

                    </tbody>
                </table>
            </div>
        </Card>
    );
}
