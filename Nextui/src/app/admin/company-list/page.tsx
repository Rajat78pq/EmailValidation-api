"use client";
import { useState, useEffect } from "react";
import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import {
    MdPeople
} from 'react-icons/md';

export default function Company() {
    const [data, setData] = useState(null);
    const [employeeName, setEmployeeName] = useState(null);

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
        CompanyEmployee(1);
        getEmail();

    }, []);

    const CompanyEmployee = async (id: number) => {
        setEmployeeName(null)
        console.log(id);
        const res = await fetch(`http://localhost:4000/api/company/${id}/user`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        } else {
            const data = await res.json();
            setEmployeeName(data);
            console.log(setEmployeeName);
        }
    };

    const getEmail = async () => {
        const res = await fetch("http://localhost:3000/api/disposalemail");
        console.log(res);
    }

    return (
        <>
            <div className="xl:flex lg:flex gap-5 flex-row">
                <Card extra={"w-[57%] h-full px-6 pb-6 sm:overflow-x-auto"}>
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
                                    <th className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">CreatedBy</th>
                                    <th className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">Company Member</th>
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
                                                    <td key={company.id} className="min-w-[150px] border-white/0 py-3  pr-4">{`${company.userId}- ${company.user.name}`}</td>
                                                    <td key={company.id} className="min-w-[150px] border-white/0 py-3  pr-4 cursor-pointer">{<a onClick={() => CompanyEmployee(company.id)}><MdPeople className="h-6 w-6" /></a>}</td>
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
                <div className="h-64 w-[35%] bg-white border-l-4 border-indigo-500 fixed top-[-17] right-0 overflow-y-scroll overflow-x-hidden rounded-s-lg gap-3">
                    <table className="w-full ml-5">
                        <thead className="sticky top-0 bg-white">
                            <tr className="!border-px !border-gray-400">
                                <th className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">ID</th>
                                <th className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">Employee Name</th>
                                <th className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">Email</th>
                            </tr>
                        </thead>
                        <tbody>

                            {employeeName ? (
                                <>
                                    {employeeName.users.map((employee) => (
                                        <tr key={employee.companyUser.id}>
                                            <td key={employee.companyUser.id} className="min-w-[150px] border-white/0 py-3  pr-4">{employee.companyUser.id}</td>
                                            <td key={employee.companyUser.id} className="min-w-[150px] border-white/0 py-3  pr-4">{employee.companyUser.name}</td>
                                            <td key={employee.companyUser.id} className="min-w-[150px] border-white/0 py-3  pr-4">{employee.companyUser.email}</td>
                                        </tr>
                                    ))}
                                </>
                            ) : (
                                <td>No data</td>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
