"use client"
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form"
import { PiWarningCircleFill } from "react-icons/pi";

type Inputs = {
	title: string
	description: string
}

export default function Home() {
	const [users, setUsers] = useState([]);
	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('http://localhost:3000/api/users');
			const data = await res.json();
			setUsers(data);
		};

		fetchData();
	}, []);

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
	};

	return (
		<main className="w-full min-h-screen bg-slate-200 flex justify-center flex-col items-center pt-[10rem] gap-10">
			<form onSubmit={handleSubmit(onSubmit)} className="flex justify-start items-end gap-2.5 max-w-[80rem]">
				<label htmlFor="title" className="flex flex-col items-start gap-px">
					Title
					<div className="flex justify-center items-center gap-2.5">
						<input
							id="title"
							{...register("title", { required: true })}
							className="border border-black  px-1 "
						/>
						{errors.title && <PiWarningCircleFill size={25} color="red" />}
					</div>
				</label>

				<label htmlFor="description" className="flex flex-col items-start gap-px">
					Description
					<div className="flex justify-center items-center gap-px">
						<input
							id="description"
							{...register("description", { required: true })}
							className="border border-black px-1 "
						/>
						{errors.description && <PiWarningCircleFill size={25} color="red" />}
					</div>
				</label>

				<Button type="submit">Add task</Button>
			</form>

			<div className="w-full h-full min-h-[30rem] border rounded-lg border-black max-w-[80rem] grid grid-cols-4 justify-center items-start gap-5">

			</div>
		</main>
	);
}
