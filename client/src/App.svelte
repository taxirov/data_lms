<script lang="ts">
    import type { Group } from "./api/groups.api";

	let groups: Group[] = []
</script>

<head>
	<title>Dashboard</title>
</head>

<section class="grid grid-cols-4">
	<div
		class="aside col-span-1 sticky top-0 left-0 flex flex-col justify-between gap-2 p-5 h-screen bg-white"
	>
		<div>
			<p class="text-2xl font-semibold">Dashboard</p>
			<div class="flex flex-col gap-3">
				<a
					href="/groups"
					class="text-white text-lg bg-blue-700 rounded-lg px-4 py-1"
					><i class="bi bi-people-fill" /> Groups</a
				>
				<a
					href="li"
					class="text-white text-lg bg-blue-700 rounded-lg px-4 py-1"
					><i class="bi bi-people-fill" /> Teachers</a
				>
				<a
					href="li"
					class="text-white text-lg bg-blue-700 rounded-lg px-4 py-1"
					><i class="bi bi-people-fill" /> Students</a
				>
			</div>
		</div>
		<div class="inline-flex flex-col gap-3">
			<a
				href="se"
				class="text-white text-lg bg-blue-700 rounded-lg px-4 py-1"
				><i class="bi bi-gear-fill" /> Settings</a
			>
			<button class="text-white text-lg bg-red-700 rounded-lg px-4 py-1"
				><i class="bi bi-box-arrow-in-left" /> Chiqish</button
			>
		</div>
	</div>
	<div class="col-span-3 p-5 bg-[#e2e8f0] w-full">
		<div>
			<p class="text-xl font-semibold">Dashboard</p>
			<div class="flex gap-5 py-5">
				<div
					class="flex flex-col justify-start gap-3 rounded-xl shadow p-4 bg-white"
				>
					<p class="text-2xl font-semibold">All groups</p>
					<div class="flex items-end gap-5">
						<p class="text-7xl text-blue-500">
							<i class="bi bi-people-fill" />
						</p>
						<div class="flex pb-2 items-end gap-1">
							<p class="text-5xl"><b>24</b></p>
							<p><b>ta</b></p>
						</div>
					</div>
				</div>
				<div
					class="flex flex-col justify-start gap-3 rounded-xl shadow p-4 bg-white"
				>
					<p class="text-2xl font-semibold">All teachers</p>
					<div class="flex items-end gap-5">
						<p class="text-7xl text-blue-500">
							<i class="bi bi-person-workspace" />
						</p>
						<div class="flex pb-2 items-end gap-1">
							<p class="text-5xl"><b>40</b></p>
							<p><b>ta</b></p>
						</div>
					</div>
				</div>
				<div
					class="flex flex-col justify-start gap-3 rounded-xl shadow p-4 bg-white"
				>
					<p class="text-2xl font-semibold">All students</p>
					<div class="flex items-end gap-5">
						<p class="text-7xl text-blue-500">
							<i class="bi bi-person-fill" />
						</p>
						<div class="flex pb-2 items-end gap-1">
							<p class="text-5xl"><b>400</b></p>
							<p><b>ta</b></p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<p class="text-xl font-semibold">Groups</p>
			<div class="bg-white rounded-xl shadow p-5">
				<table
					class="w-full table-auto border-collapse border border-black rounded-xl"
				>
					<thead>
						<tr>
							<th class="border border-slate-600 p-2">№</th>
							<th class="border border-slate-600 p-2">Name</th>
							<th class="border border-slate-600 p-2"
								>Direction</th
							>
							<th class="border border-slate-600 p-2">Id</th>
						</tr>
						{#each groups as group}
							<tr>
								<td class="border border-slate-600 p-2"> 1 </td>
								<td class="border border-slate-600 p-2"
									>{group.name}</td
								>
								<td class="border border-slate-600 p-2"
									>{group.direction}</td
								>
								<td class="border border-slate-600 p-2"
									>{group.id}</td
								>
							</tr>
						{/each}
					</thead>
				</table>
			</div>
		</div>
		<div>
			<p class="text-xl font-semibold">Teachers</p>
			<div class="bg-white rounded-xl shadow p-5">
				<table
					class="w-full table-auto border-collapse border border-black rounded-xl"
				>
					<thead>
						<tr>
							<th class="border border-slate-600 p-2">№</th>
							<th class="border border-slate-600 p-2">Name</th>
							<th class="border border-slate-600 p-2"
								>Direction</th
							>
							<th class="border border-slate-600 p-2">Id</th>
						</tr>
						{#each groups as group}
							<tr>
								<td class="border border-slate-600 p-2">
									1
								</td>
								<td class="border border-slate-600 p-2"
									>{group.name}</td
								>
								<td class="border border-slate-600 p-2"
									>{group.direction}</td
								>
								<td class="border border-slate-600 p-2"
									>{group.id}</td
								>
							</tr>
						{/each}
					</thead>
				</table>
			</div>
		</div>
		<div>
			<p class="text-xl font-semibold">Students</p>
			<div class="bg-white rounded-xl shadow p-5">
				<table
					class="w-full table-auto border-collapse border border-black rounded-xl"
				>
					<thead>
						<tr>
							<th class="border border-slate-600 p-2">№</th>
							<th class="border border-slate-600 p-2">Name</th>
							<th class="border border-slate-600 p-2"
								>Direction</th
							>
							<th class="border border-slate-600 p-2">Id</th>
						</tr>
						{#each groups as group}
							<tr>
								<td class="border border-slate-600 p-2">
									1
								</td>
								<td class="border border-slate-600 p-2"
									>{group.name}</td
								>
								<td class="border border-slate-600 p-2"
									>{group.direction}</td
								>
								<td class="border border-slate-600 p-2"
									>{group.id}</td
								>
							</tr>
						{/each}
					</thead>
				</table>
			</div>
		</div>
	</div>
</section>
