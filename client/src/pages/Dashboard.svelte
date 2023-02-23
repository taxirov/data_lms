<script lang="ts">
	import { links, link } from "svelte-navigator";

	import Group from "../components/Group.svelte";
    import DashboardAside from '../components/DashboardAside.svelte'

    import { getGroups, deleteGroup } from '../api/groups.api'
	import { groupsStore } from '../store/groups.store'
    
    getGroups()
</script>

<head>
	<title>Dashboard</title>
</head>

<section class="grid grid-cols-4">
	<DashboardAside></DashboardAside>
	<div class="col-span-3 p-5 bg-slate-200 w-full">
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
			<div class="flex justify-between">
                <p class="text-xl font-semibold">Groups</p>
			    <a href="/dashboard/groups" class="bg-blue-500 text-white py-1 px-3 rounded"> View all </a>
            </div>
			<div class="grid grid-cols-3 gap-3 py-2">
				{#each $groupsStore as group}
					<Group group={group} update={group}></Group>
				{/each}
			</div>
		</div>
		<div>
			<p class="text-xl font-semibold">Teachers</p>
			<div class="bg-white rounded-xl shadow p-5">
				
			</div>
		</div>
		<div>
			<p class="text-xl font-semibold">Students</p>
			<div class="bg-white rounded-xl shadow p-5">
				
			</div>
		</div>
	</div>
</section>